import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import SignInAndSignUpForm from "../../components/SignInAndSignUpForm";

export default function SignUpPage() {
  return (
    <>
      <Helmet title={trans("signupPage")} />
      <SignInAndSignUpForm />
    </>
  );
}
