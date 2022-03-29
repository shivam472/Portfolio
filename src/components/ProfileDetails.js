import "./ProfileDetails.css";

import ProfileInfoHeader from "./ProfileInfoHeader";
import About from "./About";

function ProfileDetails() {
  return (
    <div className="profile-details--container">
      <ProfileInfoHeader />
      <About />
    </div>
  );
}

export default ProfileDetails;
