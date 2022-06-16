import React, {
  useEffect,
  useState,
  useReducer,
  useContext,
  useRef,
} from "react";
import AuthContext from "../../store/auth-context";
import Card from "../UI/Card";
import Input from "../UI/Input/Input";
import classes from "./Login.module.css";
const emailReducer = (state, action) => {
  console.log(action);
  if (action.type === "SET_EMAIL") {
    return { value: action.payload, isValid: action.payload.includes("@") };
  } else if (action.type === "INITIALISE") {
    return { value: "", isValid: false };
  } else if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  ///state.value gives absolute last snapshot of state
  return { value: "", isValid: false };
};
const passwordReducer = (state, action) => {
  console.log(action);
  if (action.type === "SET_PASSWORD") {
    return { value: action.payload, isValid: state.value.length > 6 };
  } else if (action.type === "INITIALISE") {
    return { value: "", isValid: false };
  } else if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.length > 6 };
  }
  ///state.value gives absolute last snapshot of state
  return { value: "", isValid: false };
};
export default function Login() {
  const ct = useContext(AuthContext);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  //const [userEnteredMail, setUserEnteredMail] = useState("");
  //const [emailValid, setEmailIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("useEffect running");
      if (!emailState.isValid || !passwordState.isValid) {
        setFormIsValid(false);
      } else {
        setFormIsValid(true);
      }
    }, 500);
    return () => {
      console.log("return running");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formIsValid) {
      dispatchEmail({ type: "INITIALISE", payload: "" });
      dispatchPassword({ type: "INITIALISE", payload: "" });
      ct.onLogIn(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "email"
      ? dispatchEmail({ type: "SET_EMAIL", payload: value })
      : dispatchPassword({ type: "SET_PASSWORD", payload: value });
  };
  const validateEmailIsValid = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };
  const validatePasswordIsValid = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <Input
          ref={emailInputRef}
          isValid={emailState.isValid}
          type="text"
          name="email"
          value={emailState.value}
          handleChange={handleChange}
          validateEmailIsValid={validateEmailIsValid}
        />

        <Input
          ref={passwordInputRef}
          isValid={passwordState.isValid}
          type="text"
          name="password"
          value={passwordState.value}
          handleChange={handleChange}
          validateEmailIsValid={validatePasswordIsValid}
        />

        <button type="submit">Login</button>
      </form>
    </Card>
  );
}
