import React from "react";
import { useEffect, useState } from "react";
import { RootState } from "../../../Store/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setModalContent } from "../../../Store/redux/slices/modalSlice";
import UserPool from "../../../Helpers/AwsCognitoUserPool";

export interface ISignupStepProps {}

export default function SignupStep(props: ISignupStepProps) {
  const dispatch = useDispatch();
  const email = useSelector((state: RootState) => state.user.username);
  const [userInfo, setUserInfo] = useState({
    userEmail: email,
    firstName: "",
    password: "",
    city: "",
  });
  useEffect(() => {
    if (email.length < 0) {
      dispatch(setModalContent("oauth"));
    }
  }, [dispatch, email.length]);
  const { userEmail, firstName, password, city } = userInfo;

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setUserInfo(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const signup = () => {
    UserPool.signUp(email, password, [], [], (err, data) => {
      if (err) {
        //dispatch global error
      } else console.log(data);
    });
  };

  return (
    <div className="signup-step">
      <div>{userEmail}</div>
      <div>
        First Name
        <input
          value={firstName}
          name="firstName"
          onChange={e => onChange(e)}
          type="text"
        />
      </div>
      <div>
        Last Name
        <input
          value={password}
          name="password"
          onChange={e => onChange(e)}
          type="text"
        />
      </div>
      <div>
        Where are you located ?
        <select name="city" id="cars" value={city}>
          <option value="Montreal" onChange={e => onChange(e)}>
            Montreal
          </option>
          <option value="Toronto" onChange={e => onChange(e)}>
            Toronto
          </option>
          <option value="New York" onChange={e => onChange(e)}>
            New York
          </option>
        </select>
      </div>
      <div>
        Do you want a membership ?
        <div>
          <input type="radio" id="huey" name="drone" value="huey" checked />
          <label htmlFor="huey">Yes sign me up</label>
        </div>
        <div>
          <input type="radio" id="dewey" name="drone" value="dewey" />
          <label htmlFor="dewey">Not right now</label>
        </div>
      </div>
      <div onClick={() => signup()}>Signup</div>
    </div>
  );
}
