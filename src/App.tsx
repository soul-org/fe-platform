import "./App.css";
import { Route, Routes } from "react-router-dom";
import Pool from "./pages/Pool";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/pool" element={<Pool />} />
    </Routes>
  );
}

export default App;
