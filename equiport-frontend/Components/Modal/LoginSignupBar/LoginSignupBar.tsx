import * as React from "react";
import Slider from "react-slick";

export interface ILoginSignupBarProps {}

export default function LoginSignupBar(props: ILoginSignupBarProps) {
  return (
    <div className="loginSignup">
      <div className="loginSignup__content-wrap">
        <section className="login">
          <div className="login__username">
            username:
            <input />
          </div>
          <div className="login__password">
            password:
            <input />
          </div>
        </section>
        <section className="signup">
          <div className="signup__first-name">
            first name:
            <input />
          </div>
          <div className="signup__last-name">
            last name:
            <input />
          </div>
          <div className="signup__username">
            username:
            <input />
          </div>
          <div className="signup__password">
            password:
            <input />
          </div>
          <div className="signup__confirm-password">
            confirm password:
            <input />
          </div>
        </section>
      </div>
    </div>
  );
}
