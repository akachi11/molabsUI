import logo from "../assets/download.png";
import AppleIcon from "@mui/icons-material/Apple";
import playstore from "../assets/playstore.png";
import qr from "../assets/qr.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-flexbox">
        <div className="socials">
          <div className="f-logo">
            <img src={logo} alt="" />
            <p>Heyfood</p>
          </div>

          <p className="socials-subtext">Your food delivered within minutes</p>

          <div className="f-apps">
            <button>
              <AppleIcon style={{ fontSize: "1.5rem" }} /> App Store
            </button>
            <button>
              <img src={playstore} alt="" />
              Play Store
            </button>
          </div>

          <div className="socials-logos">
            <div className="s-logo">
              <FacebookIcon style={{ fontSize: "1rem" }} />
            </div>
            <div className="s-logo">
              <TwitterIcon style={{ fontSize: "1rem" }} />
            </div>
            <div className="s-logo">
              <InstagramIcon style={{ fontSize: "1rem" }} />
            </div>
            <div className="s-logo">
              <LinkedInIcon style={{ fontSize: "1rem" }} />
            </div>
          </div>
        </div>
        <div className="more">
          <div className="more-1">
            <div className="m1">
              <p className="m1-header">Get To Know Us</p>
              <div className="m1-links">
                <p className="m1-link">About Us</p>
                <p className="m1-link">LinkedIn</p>
                <p className="m1-link">Blog</p>
              </div>
            </div>
            <div className="m1">
              <p className="m1-header">Let Us Help You</p>
              <div className="m1-links">
                <p className="m1-link">Support</p>
                <p className="m1-link">FAQs</p>
                <p className="m1-link">Restaurants Near Me</p>
              </div>
            </div>
            <div className="m1">
              <p className="m1-header">Doing Business</p>
              <div className="m1-links">
                <p className="m1-link">Become a driver</p>
                <p className="m1-link">Become a partner restaurants</p>
              </div>
            </div>
          </div>
          <div className="more-2">
            <img src={qr} alt="" />
            <div className="legal">
              <p>Terms Of Service</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-footer">
        <div className="more-1">
          <div className="m1">
            <p className="m1-header">Get To Know Us</p>
            <div className="m1-links">
              <p className="m1-link">About Us</p>
              <p className="m1-link">LinkedIn</p>
              <p className="m1-link">Blog</p>
            </div>
          </div>
          <div className="m1">
            <p className="m1-header">Let Us Help You</p>
            <div className="m1-links">
              <p className="m1-link">Support</p>
              <p className="m1-link">FAQs</p>
              <p className="m1-link">Restaurants Near Me</p>
            </div>
          </div>
          <div className="m1">
            <p className="m1-header">Doing Business</p>
            <div className="m1-links">
              <p className="m1-link">Become a driver</p>
              <p className="m1-link">Become a partner restaurants</p>
            </div>
          </div>
        </div>

        <div className="socials-logos">
          <div className="s-logo">
            <FacebookIcon style={{ fontSize: "1rem" }} />
          </div>
          <div className="s-logo">
            <TwitterIcon style={{ fontSize: "1rem" }} />
          </div>
          <div className="s-logo">
            <InstagramIcon style={{ fontSize: "1rem" }} />
          </div>
          <div className="s-logo">
            <LinkedInIcon style={{ fontSize: "1rem" }} />
          </div>
        </div>

        <div className="f-logo">
          <img src={logo} alt="" />
          <p>Heyfood</p>
        </div>

        <p className="socials-subtext">Your food delivered within minutes</p>

        <div className="f-apps">
          <button>
            <AppleIcon style={{ fontSize: "1.5rem" }} /> App Store
          </button>
          <button>
            <img src={playstore} alt="" />
            Play Store
          </button>
        </div>
        <div className="legal">
          <p>Terms Of Service</p>
          <p>Privacy Policy</p>
        </div>
      </div>

      <p className="copyright">
        © 2024 Hey Technologies Limited. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
