import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HeroSection from "./HeroSection";
import DevPage from "./DevPage";
import TestersPage from "./PlayTestersPage";
import PlayTestersPage from "./PlayTestersPage";
import "./App.css";

function HomePage() {
  return (
    <>
      <HeroSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/developers" element={<DevPage />} />
        <Route path="/playtesters" element={<PlayTestersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
