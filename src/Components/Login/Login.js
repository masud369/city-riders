import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FbNGoogle from "../FacebookNGoole/FbNGoogle";
import "./signup.css";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import { firebaseConfig } from "../FirebaseConfig/Firebaseconfig";
import { UserContext } from "../../App";

initializeApp(firebaseConfig);
const Login = () => {
  const [logedin, setLogedin] = useState({
    email: "",
    password: "",
  });
  const checkName = (e) => {
    let checkValidaty = true;
    if (e.target.name === "email") {
      checkValidaty = e.target.value;
    }
    if (e.target.name === "password") {
      checkValidaty = e.target.value;
    }
    if (checkValidaty) {
      const signUpUser = { ...logedin };
      signUpUser[e.target.name] = e.target.value;
      setLogedin(signUpUser);
      console.log(signUpUser);
    }
  };
  const [login, setLogin] = useContext(UserContext);
  const location = useLocation();
  const navigat = useNavigate();
  const handelEmlNPassSinnnn = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, logedin.email, logedin.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const newUser = {...logedin}
        setLogin(newUser)
        if(location.state?.from){
          navigat(location.state.from)
        }
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div>
        <p>email:{logedin.email}</p>
      <div className="create-email-account">
        <h2>Create an account</h2>
        <p>{logedin.name}</p>
        <form onSubmit={handelEmlNPassSinnnn}>
          <input
            type="email"
            onMouseOut={checkName}
            name="email"
            id=""
            required
            placeholder="Username or Email"
          />
          <br />
          <input
            type="password"
            onMouseOut={checkName}
            name="password"
            required
            placeholder="Password"
          />
          <br />
          <input type="submit" value="Login" />
        </form>
        <p>
          Don't have account? <Link to="/signup">Create an account</Link>{" "}
        </p>
      </div>
      <span>or</span>
      <FbNGoogle />
    </div>
  );
};

export default Login;
