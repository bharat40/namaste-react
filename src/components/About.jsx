import bharat from "../utils/menuItemsImages/bharat.jpg";
const About = () => {
  return (
    <div className="flex flex-col items-center bg-blue-50">
      <h1 className="text-center text-[50px]">About us</h1>
      <div className="flex items-center gap-9">
        <img
          src={bharat}
          alt="bharat-image"
          className="h-[500px] border shadow-lg rounded-md"
        />
        <p className="text-[30px] text-center text-gray-700">
          Hello I'm Bharat, third-year student at Chitkara University, focused
          on <br />
          front-end development and learning C++ and data structures <br />
          and algorithms (DSA). Passionate about creating efficient web
          solutions.
        </p>
      </div>
      <div className="flex gap-6">
        <h1>
          GitHub ➡️{" "}
          <a href="https://github.com/bharat40" className="hover:underline">
            bharat40
          </a>
        </h1>
        <h1>
          Instagram ➡️{" "}
          <a
            href="https://www.instagram.com/bharat.dhiman21/"
            className="hover:underline"
          >
            @bharat.dhiman21
          </a>
        </h1>
      </div>
      <h1></h1>
    </div>
  );
};

export default About;
