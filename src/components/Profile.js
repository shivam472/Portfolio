import "./Profile.css";

import ProfileDetails from "./ProfileDetails";
import ProfileFooter from "./ProfileFooter";
import ProfilePicture from "./ProfilePicture";

function Profile() {
  return (
    <section className="profileInfo--container">
      <ProfilePicture />
      <ProfileDetails />
      <ProfileFooter />
    </section>
  );
}

export default Profile;
