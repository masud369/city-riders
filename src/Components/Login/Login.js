import React, { useState } from "react";
import { Link } from "react-router-dom";
import FbNGoogle from "../FacebookNGoole/FbNGoogle";
import "./signup.css";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import { firebaseConfig } from "../FirebaseConfig/Firebaseconfig";

initializeApp(firebaseConfig);
const Login = () => {
  const [login, setLogin] = useState({
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
      const signUpUser = { ...login };
      signUpUser[e.target.name] = e.target.value;
      setLogin(signUpUser);
      console.log(signUpUser);
    }
  };

  const handelEmlNPassSup = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, login.email, login.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
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
        <p>email:{login.email}</p>
      <div className="create-email-account">
        <h2>Create an account</h2>
        <p>{login.name}</p>
        <form onSubmit={handelEmlNPassSup}>
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
          Don't have account? <Link to="/login">Create an account</Link>{" "}
        </p>
      </div>
      <span>or</span>
      <FbNGoogle />
    </div>
  );
};

export default Login;
