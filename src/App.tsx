import "./App.css";
import { Route, Routes } from "react-router-dom";
import Pool from "./pages/Pool";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Pool />} />
    </Routes>
  );
}

export default App;
