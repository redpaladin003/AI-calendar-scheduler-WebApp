import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/home.tsx";

function App() {
  return (
    <div className="background-container">
      <Routes>
        {/* Default route ("/") */}
        <Route index element={<Home />} />

        {/* Auth routes wrapped in Auth */}
        <Route element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
