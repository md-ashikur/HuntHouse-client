import logo1 from "../../images/traveloka_logo 2.png";
import logo2 from "../../images/traveloka_logo 3.png";
import logo3 from "../../images/traveloka_logo 4.png";
import logo4 from "../../images/traveloka_logo 5.png";
import headerbg from "../../images/Img.png";

const Header = () => {
  return (
    <div className="grid grid-cols-2 ">
      <div className="px-5 lg:px-20 flex flex-col justify-center">
        <h1 className="text-5xl font-bold max-w-[496px]">
          Find The Place To Live Your Dreams Easily Here
        </h1>
        <p className="my-5">
          Everything you need about finding your place to live will be here,
          where it will be easier for you
        </p>

        <div className="join my-5">
          <input
            className="input input-bordered join-item"
            placeholder="Email"
          />
          <button className="btn join-item rounded-r-full">Subscribe</button>
        </div>

        <p>Our Partnership </p>
        <div className="flex gap-5 ">
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
        </div>
      </div>
      <div className=" w-auto h-screen">
        <img src={headerbg} alt="" className="w-[100vw] h-screen" />
      </div>
    </div>
  );
};

export default Header;
