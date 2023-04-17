import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import EditVideo from "./pages/EditVideo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/editvideo" element={<EditVideo />} />
    </Routes>
  );
}

export default App;
