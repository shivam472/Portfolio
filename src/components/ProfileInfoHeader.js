import "./ProfileInfoHeader.css";

import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

function ProfileInfoHeader() {
  return (
    <>
      <header className="personal--details">
        <h3 className="name">Shivam Pandey</h3>
        <p className="designation">Frontend Developer</p>
        <div className="contact">
          <button className="email">
            <MdEmail />
            <span className="email--text">Email</span>
          </button>
          <button className="linkedin">
            <FaLinkedin />
            <span className="linkedin--text">LinkedIn</span>
          </button>
        </div>
      </header>
    </>
  );
}

export default ProfileInfoHeader;
