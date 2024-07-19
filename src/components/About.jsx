import bharat from "../utils/menuItemsImages/bharat.jpg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-[50px] font-bold">About us</h1>
      <div className="flex items-center gap-9">
        <img
          src={bharat}
          alt="bharat-image"
          className="h-[480px] border rounded-md"
        />
        <p className="text-[30px] text-center text-slate-500 font-semibold">
          Hello 👋 I'm Bharat, third-year student at Chitkara University,
          focused on <br />
          front-end development 💻 and learning C++ and data structures <br />
          and algorithms (DSA). Passionate about creating efficient web
          solutions 👨‍💻
        </p>
      </div>
      <div className="flex gap-6 font-bold">
        <Link to="https://www.instagram.com/bharat.dhiman21/">
          <h1 className="hover:underline">Instagram: @bharat.dhiman21</h1>
        </Link>
        <Link to="https://github.com/bharat40">
          <h1 className="hover:underline">Github: bharat40</h1>
        </Link>
      </div>
      <h1></h1>
    </div>
  );
};

export default About;
