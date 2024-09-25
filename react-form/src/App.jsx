import { useState } from "react";
import SignUpForm from "./components/SignUpForm";
import "./App.css";
import Authenticator from "./components/Authenticate";

function App() {
  const [token, setToken] = useState(null);
  return (
    <div>
      <SignUpForm setToken={setToken} />
      <Authenticator token={token} />
    </div>
  );
}

export default App;
