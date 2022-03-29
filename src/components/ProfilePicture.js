import "./ProfilePicture.css";
import ProfilePic from "../images/ProfilePic.jpg";

function ProfilePicture() {
  return (
    <section>
      <img src={ProfilePic} alt="profile" className="profile-pic" />
    </section>
  );
}

export default ProfilePicture;
