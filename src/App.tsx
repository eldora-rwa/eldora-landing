import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import EldoraPage from "./pages/EldoraPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/eldora" element={<EldoraPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
