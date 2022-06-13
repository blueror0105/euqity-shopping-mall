import React from "react";
import { useEffect, useState } from "react";
import { RootState } from "../../../Store/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setModalContent } from "../../../Store/redux/slices/modalSlice";

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

  return (
    <div className="signup-step">
      <div>email</div>
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
        <select name="Cities" id="cars">
          <option value="Montreal">Montreal</option>
          <option value="Toronto">Toronto</option>
          <option value="New York">New York</option>
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
    </div>
  );
}
