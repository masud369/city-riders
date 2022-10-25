import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FbNGoogle from "../FacebookNGoole/FbNGoogle";
import { firebaseConfig } from "../FirebaseConfig/Firebaseconfig";
import "./signup.css";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { UserContext } from "../../App";

initializeApp(firebaseConfig);

const Singup = () => {
  const [signUp, setSignUp] = useState({
    name: "",
    email: "",
    password: "",
    displayName:"",
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
  
 const [checkLogin, setCheckLogin] = useState(true)
  const [login, setLogin] = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handelEmlNPassSin = (e) => {
    e.preventDefault();
   if(checkLogin && signUp.email && signUp.password)
   { const auth = getAuth();
    createUserWithEmailAndPassword(
      auth,
      signUp.email,
      signUp.password
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        const newUser = {...signUp};
        newUser.name = user.displayName || signUp.name;
        setLogin(newUser)
        console.log(location.state)
        if(location.state?.from){
          navigate(location.state.from)
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });}
      if(!checkLogin && signUp.email && signUp.password){
        const auth = getAuth();
        signInWithEmailAndPassword(auth, signUp.email, signUp.password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            const newUser = {...signUp}
            newUser.name = user.displayName || signUp.name;
            setLogin(newUser)
            if(location.state?.from){
              navigate(location.state.from)
            }
            console.log(user)
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      }
  };
  
 //goLogin
 const goLogin =(e)=>{
  e.target.innerText = "create an account";
   const name =  document.getElementById('name');
   const confirmPassword = document.getElementById('confirmPassword');
   const check = document.getElementById("valueChange");
   document.getElementById("dNone").classList.remove("d-none");
   document.getElementById("already-account").classList.add("d-none");
   document.getElementById("d-none").classList.remove("d-none");
   check.value = "login";
    name.style.display = "none";
    name.required = false;
    confirmPassword.style.display = "none";
    confirmPassword.required = false;
   setCheckLogin(!checkLogin);
 }

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
            placeholder="Name"
            required
            id="name"
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
            placeholder="Confirm Password"
            required
            id='confirmPassword'
          />
          <br />
          <input type="submit" id="valueChange" value="Create an account" />
        </form>
        <p>
          <span id='d-none' className="d-none">Don't have account</span> <span id="already-account">already have an account</span> ? <span onClick={goLogin} style={{textDecoration:"underline",cursor:"pointer"}}>login</span><span id='dNone' className="d-none">
          Create an account</span>
        </p>
      </div>
      <span>or</span>
      <FbNGoogle />
    </div>
  );
};

export default Singup;
