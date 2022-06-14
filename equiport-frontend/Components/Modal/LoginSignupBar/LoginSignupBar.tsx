import * as React from "react";
import { useState } from "react";
import GeneralPurposeButton from "../../Buttons/GeneralPurposeButton/GeneralPurposeButton";
import { useDispatch } from "react-redux";
import { setUsername } from "../../../Store/redux/slices/userSlice";
import { setModalContent } from "../../../Store/redux/slices/modalSlice";

export interface ILoginSignupBarProps {}

export default function LoginSignupBar(props: ILoginSignupBarProps) {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const ContinueSignup = () => {
    const signupStepIsLogin = false;
    const signupStepIsSignup = true;

    if (signupStepIsSignup) {
      dispatch(setModalContent("signup-step"));
    } else if (signupStepIsLogin) {
      dispatch(setModalContent("login-step"));
    }
  };

  return (
    <div className="loginSignup">
      <div className="loginSignup__content-wrap">
        <section className="login">
          <div className="login__email">
            <div className="login__email-title">Email:</div>
            <input
              value={email}
              className="login__input-email"
              onChange={e => {
                setEmail(e.target.value);
                dispatch(setUsername(email));
              }}
            />
          </div>
          <GeneralPurposeButton onClick={() => ContinueSignup()}>
            login or signup
          </GeneralPurposeButton>
        </section>
        <section className="login-with-social">
          <button className="login-with-google"> Login with Google</button>
          <button className="login-with-linkedin"> Login with Linkedin</button>
          <button className="login-with-linkedin"> Login with Linkedin</button>
        </section>
      </div>
    </div>
  );
}
