import React, { useState } from "react";
import { app } from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(app);

const SignUp = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((response) => alert("User Created Successfully!")).catch(err => console.log(err));

    setemail('');
    setPassword('')
  };

  const handleEmailChange = (e) => setemail(e.target.value);
  const handlePassChange = (e) => setPassword(e.target.value);
  return (
    <div>
        <h1>Sign Up Page</h1>
      <div>
        <label>Email</label>
        <input
          value={email}
          onChange={handleEmailChange}
          type="email"
          required
          placeholder="Enter Your Email..."
        />
      </div>
      <div>
        <label>Password</label>
        <input
          value={password}
          onChange={handlePassChange}
          type="password"
          required
          placeholder="Enter Your Password..."
        />
      </div>
      <button onClick={createUser}>Sign Up</button>
    </div>
  );
};

export default SignUp;
