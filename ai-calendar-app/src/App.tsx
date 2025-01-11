import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/Home.tsx";
import SignIn from "./components/signinPage/SignIn.tsx";
import Auth from "./components/Auth.tsx";
import Login from "./components/signinPage/Login.tsx";

function App() {

  return (
    <div className="background-container">
      <Routes>
        {/* Default route ("/") */}
        <Route index element={<Home />} />

        {/* Auth routes wrapped in Auth */}
        <Route element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
      
  )
}

export default App
