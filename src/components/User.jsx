import { INSTA_LOGO_URL } from "../utils/constants";
const User = (props) => {
  return (
    <div className="user-card">
      <h2>Name: {props.name}</h2>
      <h3>Location: Ambala Cantt</h3>
      <h4 className="contact-link">
        <img src={INSTA_LOGO_URL} alt="instagram-logo" className="insta-logo" />
        <a href="https://www.instagram.com/bharat.dhiman21/">
          @bharat.dhiman21
        </a>
      </h4>
    </div>
  );
};

export default User;
