import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import "./HeroSection.css";
import "./Users.css";
import "./Features.css";
import "./HomeFooter.css";
import HomePagePic from "./assets/landingPageVector.png";
import DevPic from "./assets/devs.png";
import TesterPic from "./assets/playtesters.png";
import userdata from "./assets/userdata.png";
import reportingPic from "./assets/reporting.png";
import observingPic from "./assets/observation.png";
import researchPic from "./assets/research.png";
import interviewsPic from "./assets/interviews.png";
import footerPic from "./assets/footerPic.png";
import logo from "./assets/logo.png";

const HomePage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  // Sidebar toggle handlers
  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  // Navigation functions
  const handleDevelopersClick = () => navigate("/developers");
  const handleTestersClick = () => navigate("/playtesters");
  const handleHomePageClick = () => navigate("/");

  useEffect(() => {
    const features = document.querySelectorAll(".feature");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
          } else {
            entry.target.classList.remove("appear");
          }
        });
      },
      { threshold: 0.2 }
    );
    features.forEach((feature) => observer.observe(feature));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="header-container">
        <nav className="navbar">
          <img
            src={logo}
            alt="Logo"
            className="logo"
            onClick={handleHomePageClick}
          />
          <div className={`nav-links ${isSidebarOpen ? "hidden" : ""}`}>
            <button
              className="contact"
              onClick={() =>
                (window.location.href = "mailto:contact@pixelstoplayers.com")
              }
            >
              Contact
            </button>
            <button className="join">Join Our Playtest Community</button>
          </div>
          <button className="open-btn" onClick={openSidebar}>
            ☰
          </button>
        </nav>

        {/* Sidebar */}
        <div className={`sidebar ${isSidebarOpen ? "open" : ""}`} id="sidebar">
          <p className="close-btn" onClick={closeSidebar}>
            ×
          </p>
          <img
            src={logo}
            alt="Logo"
            className="logo-sidebar"
            onClick={handleHomePageClick}
          />
          <button
            className="contact"
            onClick={() =>
              (window.location.href = "mailto:contact@pixelstoplayers.com")
            }
          >
            Contact
          </button>
          <button className="join">Join Our Playtest Community</button>
        </div>
      </div>

      {/* Main Content */}
      <section className="home-container">
        <h1 className="main-text">Playtest with Purpose</h1>
        <h2 className="subtext">
          <h3>DIY User Testing</h3>
          <p>Align player behavior with design.</p>
        </h2>
        <img src={HomePagePic} className="home-pic" alt="Home Page" />
        <div className="ForDevs">
          <img src={DevPic} className="dev-pic" alt="Developers" />
          <button className="DevButton" onClick={handleDevelopersClick}>
            For Developers
          </button>
        </div>
        <div className="ForTesters">
          <img src={TesterPic} className="tester-pic" alt="Playtesters" />
          <button className="testerButton" onClick={handleTestersClick}>
            For Playtesters
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-container">
        <h2>What We Provide</h2>
        <div className="features-grid">
          <div className="feature">
            <div className="icon-container">
              <img src={userdata} alt="Player Database" />
            </div>
            <div className="feature-text">
              <h3>Player Database</h3>
              <p>
                Use filter functions to match a tester to your defined target
                audience.
              </p>
            </div>
          </div>
          <div className="feature second-column">
            <div className="icon-container">
              <img src={reportingPic} alt="Game Demos" />
            </div>
            <div className="feature-text">
              <h3>Game Demos</h3>
              <p>A library of game demos waiting for your opinion.</p>
            </div>
          </div>
          <div className="feature">
            <div className="icon-container">
              <img src={reportingPic} alt="Surveys & Reporting" />
            </div>
            <div className="feature-text">
              <h3>Surveys & Reporting</h3>
              <p>
                Choose from our library of templates or customize your own
                surveys and reporting.
              </p>
            </div>
          </div>
          <div className="feature second-column">
            <div className="icon-container">
              <img src={observingPic} alt="Observe Gameplay" />
            </div>
            <div className="feature-text">
              <h3>Observe Gameplay</h3>
              <p>Record gameplay and timestamp events.</p>
            </div>
          </div>
          <div className="feature">
            <div className="icon-container">
              <img src={interviewsPic} alt="Conduct Interviews" />
            </div>
            <div className="feature-text">
              <h3>Conduct Interviews</h3>
              <p>
                Video conferencing and transcription for documented player
                feedback.
              </p>
            </div>
          </div>
          <div className="feature second-column">
            <div className="icon-container">
              <img src={researchPic} alt="Research Management" />
            </div>
            <div className="feature-text">
              <h3>Research Management</h3>
              <p>
                Structure your research so that the methodology matches your
                development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <div className="home-footer-container">
        <div className="home-footer">
          <div className="home-footer-content">
            <div className="home-footer-image">
              <img src={footerPic} alt="Footer" />
            </div>
            <div className="home-footer-text">
              <h2>Manage player insights until you're ready to release</h2>
              <button>Join our playtest community</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Pixels to Players. All rights
            reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
