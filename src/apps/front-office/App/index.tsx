import React from "react";
import { Toaster } from "react-hot-toast";

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

// export default function AppWithUser({ children }: any) {
//   const [canPass, setCanPass] = useState(user.isLoggedIn());

//   useOnce(() => {
//     if (user.isLoggedIn()) return;

//     getGuestToken()
//       .then(response => {
//         user.login(response.data.user);
//         setCanPass(true);
//       })
//       .catch(error => console.log(error));
//   });

//   if (!canPass) return;

//   return <App>{children}</App>;
// }
