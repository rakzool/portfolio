import { useScrollContext } from "../../common/context/ScrollContext";
import NucleusOrbit from "../../components/nucleusOrbit/nucleusOrbit.component";
import MobileWaveBackground from "../../components/MobileWave/mobileWavebackground.component";
import "./homePage.css";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa6";
import { TbCloverFilled } from "react-icons/tb";

const HomePage = () => {
  const { containerRef } = useScrollContext();
  return (
    <div className="hero-page">
      <div className="hero-content">
        <h3>
          <span className="content-highlight">Hola</span>, soy
        </h3>
        <h1>Rahul Kumar</h1>
        <h2>
          &nbsp;Full Stack Engineer |
          <span className="content-highlight"> Frontend Specialist</span>
        </h2>
        <div className="icons-stack">
          <a href="https://github.com/rakzool">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/rakzool/">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/je_el_savant/">
            <FaInstagram />
          </a>
          <a href="https://stackoverflow.com/users/13894163/rahul-kumar">
            <FaStackOverflow />
          </a>
        </div>
      </div>
      <div>
        <div className="mobile-message">
          For best Experience please view this on Desktop
          <span className="clover-icon content-highlight">
            <TbCloverFilled />
          </span>
        </div>
      </div>
      <div className="mobile-wave-bg">
        <MobileWaveBackground />
      </div>

      <div>
        <NucleusOrbit scrollContainerRef={containerRef} />
      </div>
    </div>
  );
};

export default HomePage;
