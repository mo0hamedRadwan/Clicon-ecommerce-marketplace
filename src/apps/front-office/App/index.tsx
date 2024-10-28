import { useOnce } from "@mongez/react-hooks";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import user from "../account/user";
import { getGuestToken } from "../auth/services/auth-services";

export type AppProps = {
  children: React.ReactNode;
};

export function App({ children }: AppProps) {
  return (
    <div style={{ fontFamily: "public sans" }}>
      {children}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default function AppWithUser({ children }: any) {
  const [canPass, setCanPass] = useState(user.isLoggedIn());

  useOnce(() => {
    if (canPass) return;

    getGuestToken()
      .then(() => {
        setCanPass(true);
      })
      .catch(error => console.log(error));
  });

  if (!canPass) return;

  return <App>{children}</App>;
}
