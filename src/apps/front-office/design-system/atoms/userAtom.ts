import { atom } from "@mongez/react-atom";
import { User } from "@mongez/user";

type UserDataType = {
  user: User | null;
};

type UserActionsType = {
  setUser: (user: User) => void;
  getUser: () => User;
  logout: () => void;
};

export const userAtom = atom<UserDataType, UserActionsType>({
  key: "user",
  default: {
    user: null,
  },
  actions: {
    setUser: (user: User) => {
      userAtom.change("user", user);
    },
    getUser: () => {
      return userAtom.use("user");
    },
  },
});
