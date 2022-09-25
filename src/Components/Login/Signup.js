import React, { useState } from "react";
import { Link } from "react-router-dom";
import FbNGoogle from "../FacebookNGoole/FbNGoogle";
import { firebaseConfig } from "../FirebaseConfig/Firebaseconfig";
import "./signup.css";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

initializeApp(firebaseConfig);

const Singup = () => {
  const [signUp, setSignUp] = useState({
    name: "",
    email: "",
    password: "",
  });
  const checkName = (e) => {
    let checkValidaty = true;
    if (e.target.name === "name") {
      checkValidaty = e.target.value;
    }
    if (e.target.name === "email") {
      checkValidaty = e.target.value;
    }
    if (e.target.name === "password") {
      checkValidaty = e.target.value;
    }
    if (checkValidaty) {
      const signUpUser = { ...signUp };
      signUpUser[e.target.name] = e.target.value;
      setSignUp(signUpUser);
      console.log(signUpUser);
    }
  };

  const handelEmlNPassSin = (e) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(
      auth,
      signUp.email,
      signUp.password
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div>
      <div className="create-email-account">
        <h2>Create an account</h2>
        <p>{signUp.name}</p>
        <form onSubmit={handelEmlNPassSin}>
          <input
            type="text"
            onMouseOut={checkName}
            name="name"
            required
            placeholder="Name"
          />
          <br />
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
          <input
            type="password"
            onMouseOut={checkName}
            name="password"
            required
            placeholder="Confirm Password"
          />
          <br />
          <input type="submit" value="Create an account" />
        </form>
        <p>
          already have an account? <Link to="/login">login</Link>{" "}
        </p>
      </div>
      <span>or</span>
      <FbNGoogle />
    </div>
  );
};

export default Singup;
