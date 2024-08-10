import React from "react";

export type AppProps = {
  children: React.ReactNode;
};

export default function App({ children }: AppProps) {
  return <div style={{ fontFamily: "public sans" }}>{children}</div>;
}
