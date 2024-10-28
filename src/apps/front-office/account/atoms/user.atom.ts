import { atom } from "@mongez/react-atom";
import { User } from "apps/front-office/design-system/types";
import user from "../user";

export const userAtom = atom<User>({
  key: "user",
  default: user.all(),
});
