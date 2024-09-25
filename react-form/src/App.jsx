import { useState } from "react";
import SignUpForm from "./components/SignUpForm";
import "./App.css";
import Authenticator from "./components/Authenticate";

function App() {
  return (
    <div>
      <SignUpForm />
      <Authenticator />
    </div>
  );
}

export default App;
