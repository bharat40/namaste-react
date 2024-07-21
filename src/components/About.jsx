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
        <p className="text-[25px] text-center text-slate-500 font-semibold">
          Hello 👋 I'm Bharat, third-year student at Chitkara University,
          focused on <br />
          front-end development 💻 and learning C++ and data structures <br />
          and algorithms (DSA). Passionate about creating efficient web
          solutions 👨‍💻
        </p>
      </div>
      <div className="flex gap-6 font-bold">
        <h1 className="hover:underline hover:text-blue-500 cursor-pointer">Instagram</h1>
        <h1 className="hover:underline   hover:text-blue-500 cursor-pointer">GitHub</h1>
        <h1 className="hover:underline   hover:text-blue-500 cursor-pointer">Portfolio</h1>
      </div>
    </div>
  );
};

export default About;
