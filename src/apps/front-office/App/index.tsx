import React from "react";
import { Toaster } from "react-hot-toast";

export type AppProps = {
  children: React.ReactNode;
};

export default function App({ children }: AppProps) {
  return (
    <div style={{ fontFamily: "public sans" }}>
      {children}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
