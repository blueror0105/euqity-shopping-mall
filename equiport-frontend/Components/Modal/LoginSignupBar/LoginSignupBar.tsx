import * as React from "react";
import GeneralPurposeButton from "../../Buttons/GeneralPurposeButton/GeneralPurposeButton";
import Slider from "react-slick";

export interface ILoginSignupBarProps {}

export default function LoginSignupBar(props: ILoginSignupBarProps) {
  return (
    <div className="loginSignup">
      <div className="loginSignup__content-wrap">
        <section className="login">
          <div className="login__email">
            Email:
            <input />
          </div>
          <div className="login__password">
            password:
            <input />
          </div>
          <GeneralPurposeButton>Login</GeneralPurposeButton>
        </section>
        <section className="signup">
          <div className="signup__first-section">
            <div className="signup__first-name">
              First name:
              <input />
            </div>
            <div className="signup__last-name">
              Last name:
              <input />
            </div>
          </div>
          <div className="signup__second-section">
            <div className="signup__email">
              Email:
              <input />
            </div>
            <div className="signup__password">
              Password:
              <input />
            </div>
          </div>
          <GeneralPurposeButton>Signup</GeneralPurposeButton>
          {/* <div className="signup__confirm-password">
            Confirm password:
            <input />
          </div> */}
        </section>
      </div>
    </div>
  );
}
