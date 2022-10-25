import React, { useContext } from "react";
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { firebaseConfig } from "../FirebaseConfig/Firebaseconfig";
import { initializeApp } from "firebase/app";
import { UserContext } from "../../App";
import { useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import './fbngoogle.css'

//  initializeApp(firebaseConfig);

const FbNGoogle = () => {
  const [login, setLogin] = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();
  const provider = new FacebookAuthProvider();
  //Facebook signin
  const handelFbSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const newUser = { ...login };
        newUser.email = user.email;
        newUser.name = user.displayName;
        setLogin(newUser);
        if (location.state?.from) {
          navigate(location.state.from);
        }
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        const email = error.customData.email;
        const credential = FacebookAuthProvider.credentialFromError(error);
      });
  };

  //GoogleSignIn
  const handelGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        const newUser = { ...login };
        newUser.email = user.email;
        newUser.name = user.displayName;
        setLogin(newUser);
        if (location.state?.from) {
          navigate(location.state.from);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  const fbIcon = {
    color:'blue',
  }
  const GIcon = {
    color:'#fbbc05',
  }
  return (
    <div className="p-4 goo-fb-container">
      <button className="mx-2 rounded"  onClick={handelFbSignIn}><FacebookIcon style={fbIcon} /> Sign in with facebook</button>
      <button className="mx-2 rounded" onClick={handelGoogleSignIn}><GoogleIcon style={GIcon} />  Sign in with Google</button>
    </div>
  );
};

export default FbNGoogle;
