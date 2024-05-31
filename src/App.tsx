import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pool from "./pages/Pool";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pool" element={<Pool />} />
    </Routes>
  );
}

export default App;
