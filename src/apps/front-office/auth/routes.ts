import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import VerifyEmailPage from "./pages/VerifyEmailPage";

publicRoutes([
  {
    path: URLS.auth.signin.root,
    component: SignInPage,
  },
  {
    path: URLS.auth.signin.forgetPassword,
    component: ForgetPasswordPage,
  },
  {
    path: URLS.auth.signin.resetPassword,
    component: ResetPasswordPage,
  },
  {
    path: URLS.auth.signup.root,
    component: SignUpPage,
  },
  {
    path: URLS.auth.signup.verifyEmail,
    component: VerifyEmailPage,
  },
]);
