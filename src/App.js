import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "./firebase";

import "./App.css";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { useEffect, useState } from "react";

const auth = getAuth(app);
function App() {

  const [user, setUser] = useState(null)

  // const signUpUser = () => {
  //   createUserWithEmailAndPassword(
  //     auth,
  //     "piyushgarg.dev@gmail.com",
  //     "piyushgarg@123"
  //   ).then(value => console.log(value));
  // };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        setUser(user);
      }else{
        console.log('You are Logged out!');
        setUser(null)
      }
    })
  }, [])

  if(user === null){
    return (
      <div className="App">
        <SignUp />
        <SignIn />
      </div>
    )
  }
  return(
    <div className="App">
      <h1>Hello {user.email}</h1>
      <button onClick={() => signOut(auth)}>Log Out</button>
    </div>
  )
}

export default App;
