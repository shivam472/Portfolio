import "./ProfileFooter.css";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaGithubSquare,
} from "react-icons/fa";

function ProfileFooter() {
  return (
    <footer className="socials">
      <FaTwitterSquare className="social twitter" />
      <FaFacebookSquare className="social facebook" />
      <FaInstagramSquare className="social instagram" />
      <FaGithubSquare className="social github" />
    </footer>
  );
}

export default ProfileFooter;
