import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";

import "./App.css";

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
      <button onClick={signUpUser}>Create User</button>
    </div>
  );
}

export default App;
