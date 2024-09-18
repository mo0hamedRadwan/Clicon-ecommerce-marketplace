import URLS from "apps/front-office/utils/urls";
import { reverseGuardedRoutes } from "../utils/router";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import VerifyEmailPage from "./pages/VerifyEmailPage";
import VerifyForgetPasswordPage from "./pages/VerifyForgetPasswordPage";

reverseGuardedRoutes([
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
    path: URLS.auth.signup.emailVerification,
    component: VerifyEmailPage,
  },
  {
    path: URLS.auth.signin.resetPasswordVerification,
    component: VerifyForgetPasswordPage,
  },
]);
