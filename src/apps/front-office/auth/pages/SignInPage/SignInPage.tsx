import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import SignInAndSignUpForm from "../../components/SignInAndSignUpForm";

export default function SignInPage() {
  return (
    <>
      <Helmet title={trans("signInPage")} />
      <SignInAndSignUpForm />
    </>
  );
}
