import "./App.css";
import Line from "./components/Line.js";
import SignIn from "./components/SignIn.js";
import { auth } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);
  return <div>{user ? <Line /> : <SignIn />}</div>;
}

export default App;