import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import EldoraPage from "./pages/EldoraPage";
import LandingPageNew from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPageNew />} />
        <Route path="/eldora" element={<EldoraPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
