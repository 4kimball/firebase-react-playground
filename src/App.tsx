import React from "react";

import WriteComponent from "./views/Write";
import ReadComponent from "./views/Read";
import "./App.css";
import { firebaseInstance, authService } from "./firebase_config";

function App() {
  const onClickGoogle = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const provider = new firebaseInstance.auth.GoogleAuthProvider();
    const response = await authService.signInWithPopup(provider);
    console.log(response);
  };
  return (
    <div className="App">
      <button name="google" onClick={onClickGoogle}>
        구글 계정으로 로그인
      </button>
      <WriteComponent />
      <ReadComponent />
    </div>
  );
}

export default App;
