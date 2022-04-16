import React, { FC } from "react";
import { authService, firebaseInstance } from "firebase_config";
const GoogleLogin: FC = () => {
  const handleClick = async () => {
    const provider = new firebaseInstance.auth.GoogleAuthProvider();
    const response = await authService.signInWithPopup(provider);
  };
  return (
    <div>
      <button onClick={handleClick}>Google Login</button>
    </div>
  );
};

export default GoogleLogin;
