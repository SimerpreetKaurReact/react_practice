import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";
const emailReducer = (state, action) => {
  console.log(action);
  if (action.type === "SET_EMAIL") {
    return {
      isValid: action.payload.includes("@"),
      value: action.payload,
    };
  } else if (action.type === "INITIALISE") {
    return {
      isValid: false,
      value: "",
    };
  } else if (action.type === "VALIDATE_EMAIL") {
    return {
      value: state.value,
      isValid: state.value.includes("@"),
    };
  }
  return {
    isValid: false,
    value: "",
  };
};
const passwordReducer = (state, action) => {
  console.log(action);
  if (action.type === "SET_PASSWORD") {
    return {
      isValid: state.value.length > 6,
      value: action.payload,
    };
  } else if (action.type === "INITIALISE") {
    return {
      isValid: false,
      value: "",
    };
  } else if (action.type === "VALIDATE_PASSWORD") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6,
    };
  }
  return {
    isValid: false,
    value: "",
  };
};

const Login = (props) => {
  const [emailState, emailDispatch] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, passwordDispatch] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const [formIsValid, setFormIsValid] = useState(false);
  const authCtx = useContext(AuthContext);
  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log('Checking form validity!');
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     );
  //   }, 500);

  //   return () => {
  //     console.log('CLEANUP');
  //     clearTimeout(identifier);
  //   };
  // }, [enteredEmail, enteredPassword]);
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("checking form validity");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);
  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    emailDispatch({ type: "SET_EMAIL", payload: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    passwordDispatch({ type: "SET_PASSWORD", payload: event.target.value });

    setFormIsValid(
      emailState.value.includes("@") && event.target.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    emailDispatch({ type: "VALIDATE_EMAIL" });
    //setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    passwordDispatch({ type: "VALIDATE_PASSWORD" });
    //setPasswordIsValid(enteredPassword.trim().length > 6);
  };
  const emailRef = useRef();
  const passwordRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailRef.current.focus();
    } else {
      passwordRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailRef}
          isValid={emailState.isValid}
          type="email"
          id="email"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          label="E-Mail"
        />
        <Input
          ref={passwordRef}
          isValid={passwordState.isValid}
          type="password"
          id="password"
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          label="Password"
        />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
