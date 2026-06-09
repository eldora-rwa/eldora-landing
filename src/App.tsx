import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import EldoraPage from "./pages/EldoraPage";
import LandingPageNew from "./pages/LandingPage";
import DocumentPage from "./pages/DocumentPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPageNew />} />
        <Route path="/eldora" element={<EldoraPage />} />
        <Route path="/document" element={<DocumentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
