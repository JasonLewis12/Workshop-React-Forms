import React from "react";
import { useState } from "react";

export default function Authenticator({ token }) {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [name, setName] = useState(null);

  async function handleClick() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setSuccessMessage(data.message);
      setName(data.data.username);
    } catch (error) {
      console.log("there was an error in the Auth", error);
      setError(error);
    }
  }
  return (
    <div>
      {successMessage && <p>{successMessage}</p>}
      {name && <p> welcome back {name}</p>}
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
    </div>
  );
}
