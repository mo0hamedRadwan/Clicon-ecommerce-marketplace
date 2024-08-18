import { trans } from "@mongez/localization";
import { currentRoute, Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

export default function SignInAndSignUpForm() {
  const path = currentRoute().split("/").pop();
  const [activeForm, setActiveForm] = useState(path);
  return (
    <div className="container flex-center py-32">
      <div className="w-[500px] rounded-lg shadow-4">
        <div className="center-y">
          <Link
            to={URLS.auth.signin.root}
            onClick={() => setActiveForm("sign-in")}
            className={`w-1/2 py-5 flex-center border-b-2 text-xl ${activeForm === "sign-in" ? "border-orange-450 font-bold" : "border-gray-150"}`}>
            {trans("signin")}
          </Link>
          <Link
            to={URLS.auth.signup.root}
            onClick={() => setActiveForm("sign-up")}
            className={`w-1/2 py-5 flex-center border-b-2 text-xl ${activeForm === "sign-up" ? "border-orange-450 font-bold" : "border-gray-150"}`}>
            {trans("signup")}
          </Link>
        </div>
        {path === "sign-in" ? <SignInForm /> : <SignUpForm />}
      </div>
    </div>
  );
}
