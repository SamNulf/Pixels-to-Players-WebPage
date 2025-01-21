import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./DevPage.css";
import "./timeline.css";
import devPic from "./assets/devs.png";
import icon1 from "./assets/icon1.gif";
import icon2 from "./assets/icon2.gif";
import icon3 from "./assets/icon3.gif";
import icon4 from "./assets/icon4.gif";
import icon5 from "./assets/icon5.gif";
import icon6 from "./assets/icon6.gif";
import logo from "./assets/logo.png";

const DevPage = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);
  const navigate = useNavigate();

  const handleHomePageClick = () => {
    navigate("/home");
  };

  const handleTestersClick = () => {
    navigate("/playtesters");
  };

  const openSidebar = () => {
    document.getElementById("sidebar").classList.add("open");
  };

  const closeSidebar = () => {
    document.getElementById("sidebar").classList.remove("open");
  };

  return (
    <>
      <div className="dev-home-background"></div>
      <section className="dev-home-container">
        <nav className="navbar">
          <div className="logo" onClick={handleHomePageClick}></div>
          <div className="nav-links">
            <button className="playTestersButton" onClick={handleTestersClick}>
              Playtesters
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
          <button className="testerButton" onClick={handleTestersClick}>
            Playtesters
          </button>
        </div>

        <div className="dev-page">
          <h1>Welcome Developers!</h1>
          <h2>Playtest with Purpose</h2>
          <p>Manage player insights until you’re ready to release.</p>
          <img src={devPic} alt="Developers" />
        </div>
      </section>

      <div className="timeline">
        <h2>How Does it Work?</h2>
        <div className="timeline-container">
          <div className="timeline-item left fade-in">
            <img src={icon1} alt="Step 1 Icon" />
            <div className="timeline-content">
              <h3>Step 1</h3>
              <p>
                Start a playtest project by setting clear goals, gathering
                feedback from players, and deciding which parts of the game to
                test.
              </p>
            </div>
          </div>

          <div className="timeline-item right fade-in">
            <img src={icon2} alt="Step 2 Icon" />
            <div className="timeline-content">
              <h3>Step 2</h3>
              <p>
                Select players from our database and invite them to join the
                playtest.
              </p>
            </div>
          </div>

          <div className="timeline-item left fade-in">
            <img src={icon3} alt="Step 3 Icon" />
            <div className="timeline-content">
              <h3>Step 3</h3>
              <p>
                Create a survey or choose one from our collection to gather
                insights from participants during the playtest.
              </p>
            </div>
          </div>

          <div className="timeline-item right fade-in">
            <img src={icon4} alt="Step 4 Icon" />
            <div className="timeline-content">
              <h3>Step 4</h3>
              <p>
                Watch and listen to the gameplay to observe player interactions
                and identify areas for improvement.
              </p>
            </div>
          </div>

          <div className="timeline-item left fade-in">
            <img src={icon5} alt="Step 5 Icon" />
            <div className="timeline-content">
              <h3>Step 5</h3>
              <p>
                Review and analyze the feedback to identify key patterns and
                areas that need attention or improvement.
              </p>
            </div>
          </div>

          <div className="timeline-item right fade-in">
            <img src={icon6} alt="Step 6 Icon" />
            <div className="timeline-content">
              <h3>Step 6</h3>
              <p>
                Use the insights gained to make informed decisions about
                adjustments and refinements to your project.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="dev-footer-background"></div>
      <div className="dev-footer-container">
        <div class="dev-footer">
          <div class="dev-footer-content">
            <div class="dev-footer-image">
              <img src={devPic} />
            </div>
            <div class="dev-footer-text">
              <h1>Sign up now</h1>
              <h2>Manage player insights until you're ready to release</h2>
              <button>Join our playtest community</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom"></div>
      </div>
      <p color="white">
        &copy; {new Date().getFullYear()} Pixels to Players. All rights
        reserved.
      </p>
    </>
  );
};

export default DevPage;
