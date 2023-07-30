import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";

import "./App.css";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

const auth = getAuth(app);
function App() {
  const signUpUser = () => {
    createUserWithEmailAndPassword(
      auth,
      "piyushgarg.dev@gmail.com",
      "piyushgarg@123"
    ).then(value => console.log(value));
  };
  return (
    <div className="App">
      <h1>Firebase React App</h1>
      
      <SignUp />
      <SignIn />
    </div>
  );
}

export default App;
