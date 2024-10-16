import { atom } from "@mongez/react-atom";
import {
  ChangePasswordDataType,
  UserType,
} from "apps/front-office/design-system/types";
import {
  changePassword,
  editProfile,
  getProfile,
} from "../services/account-services";

type AccountDataType = {
  loading: boolean;
  user: UserType;
  error: string;
};

type AccountActionsType = {
  loadUser: () => void;
  updateUser: (user: UserType) => void;
  changeUserPassword: (data: ChangePasswordDataType) => void;
};

export const accountAtom = atom<AccountDataType, AccountActionsType>({
  key: "account",
  default: {
    loading: false,
    user: {
      name: "",
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      gender: "",
    },
    error: "",
  },
  actions: {
    loadUser: () => {
      accountAtom.change("loading", true);

      getProfile()
        .then(response => {
          console.log(response);
          const user = response.data.user;
          accountAtom.merge({
            user,
            loading: false,
          });
        })
        .catch(error => {
          accountAtom.change("loading", false);
          accountAtom.change("error", error.response.message);
        });
    },
    updateUser: (user: UserType) => {
      accountAtom.change("loading", false);
      editProfile(user)
        .then(response => {
          console.log(response);
          accountAtom.merge({
            user: {
              ...accountAtom.get("user"),
              ...user,
            },
            loading: false,
          });
        })
        .catch(error => {
          console.error(error);
          accountAtom.change("error", error.response.message);
          accountAtom.change("loading", false);
        });
    },
    changeUserPassword: (data: ChangePasswordDataType) => {
      accountAtom.change("loading", true);
      changePassword(data)
        .then(response => {
          console.log(response);
          accountAtom.change("loading", false);
        })
        .catch(error => {
          console.error(error);
          accountAtom.change("error", error.response.message);
          accountAtom.change("loading", false);
        });
      accountAtom.change("loading", false);
    },
  },
});
