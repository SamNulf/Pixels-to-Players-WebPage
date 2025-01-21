import { useNavigate } from "react-router-dom";
import "./PlayTestersPage.css";
import testersPic from "./assets/footerPic.png";
import testersFooterPic from "./assets/landingPageVector.png";
import video from "./assets/what to expect.mp4";
import icon1 from "./assets/libraryicon.gif";
import icon2 from "./assets/add-user.gif";
import icon3 from "./assets/videogame.gif";
import icon4 from "./assets/interview.gif";
import icon5 from "./assets/community.gif";
import logo from "./assets/logo.png";

const PlayTestersPage = () => {
  const navigate = useNavigate();

  const handleTestersClick = () => {
    navigate("/playtesters");
  };

  const handleDevelopersClick = () => {
    navigate("/developers");
  };

  const handleHomePageClick = () => {
    navigate("/home");
  };

  const openSidebar = () => {
    document.getElementById("sidebar").classList.add("open");
  };

  const closeSidebar = () => {
    document.getElementById("sidebar").classList.remove("open");
  };

  return (
    <>
      <div className="tester-page-background"></div>
      <section className="testers-home-container">
        <nav className="navbar">
          <div className="logo" onClick={handleHomePageClick}></div>
          <div className="nav-links">
            <button className="devButton" onClick={handleDevelopersClick}>
              Developers
            </button>
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
          {/* Mobile sidebar open button */}
          <button className="open-btn" onClick={openSidebar}>
            ☰
          </button>
        </nav>

        {/* Sidebar */}
        <div className="sidebar" id="sidebar">
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
          <button className="devButton" onClick={handleDevelopersClick}>
            Developers
          </button>
        </div>

        <div className="testers-page">
          <h1>Welcome Playtesters!</h1>
          <h2>Your Opinion Matters</h2>
          <p>Help improve games with your feedback before release.</p>
          <img src={testersPic} />
        </div>
      </section>

      <div className="testers-features-container">
        <div className="testersFeatures">
          <video src={video} loop autoPlay></video>
          <p>
            We are a community of players who provide feedback and insights to
            game developers.
          </p>
        </div>
        <div className="steps-container">
          <div className="step">
            <img src={icon1} alt="Library Icon" />
            <p>Search our library of game demos</p>
          </div>
          <div className="step">
            <img src={icon2} alt="Add User Icon" />
            <p>Be invited to join a playtest project</p>
          </div>
          <div className="step">
            <img src={icon3} alt="Video Game Icon" />
            <p>Engage in immersive gaming experiences</p>
          </div>
          <div className="step">
            <img src={icon4} alt="Interview Icon" />
            <p>Be interviewed, complete a survey, share your ideas</p>
          </div>
          <div className="step">
            <img src={icon5} alt="Community Icon" />
            <p>Be part of a supportive gaming community</p>
          </div>
        </div>
      </div>
      <div className="testers-footer-background"></div>
      <div className="testers-footer-container">
        <div className="testers-footer">
          <div className="testers-footer-content">
            <div className="testers-footer-image">
              <img src={testersFooterPic} />
            </div>
            <div className="testers-footer-text">
              <h1>Sign up now</h1>
              <h2>We'll let you know when new game projects arrive!</h2>
              <button>Join our playtest community</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Pixels to Players.</p>
      </div>
    </>
  );
};

export default PlayTestersPage;
