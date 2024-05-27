import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
      <footer className="footer py-10 lg:px-20 px-5  grid lg:grid-cols-2 ">
        <aside className="max-w-[320px]">
          <h2 className="font-bold text-xl">Hunt House</h2>
          <p className="text-[#888B97]">
            We provide information about properties such as houses, villas and
            apartments to help people find their dream home
          </p>
          <div className="flex text-xl gap-5 mt-5">
            <FaFacebookF />
            <FaXTwitter/>
            <FaInstagram/>
          </div>
        </aside>
      
     <div className="grid lg:grid-cols-3">
        
       <nav className="flex flex-col gap-5 mt-5 lg:mt-0">
          <h6 className="text-lg font-semibold">Property</h6>
          <Link to="" className="link link-hover text-[#888B97]">House</Link>
          <Link to="" className="link link-hover text-[#888B97]">Apartment</Link>
          <Link to="" className="link link-hover text-[#888B97]">Villa</Link>
        
        </nav>
       
        <nav className="flex flex-col gap-5 mt-5 lg:mt-0">
          <h6 className="text-lg font-semibold">Article</h6>
          <Link to="" className="link link-hover text-[#888B97]">New Article</Link>
          <Link to="" className="link link-hover text-[#888B97]">Popular Article</Link>
          <Link to="" className="link link-hover text-[#888B97]">Most Read</Link>
          <Link to="" className="link link-hover text-[#888B97]">Tips & Tricks</Link>
        </nav>
        <nav className="flex flex-col gap-5 mt-5 lg:mt-0">
          <h6 className="text-lg font-semibold">Contact</h6>
          <a className="link link-hover text-[#888B97]">2464 Royal Ln. Mesa, New Jersey 45463</a>
          <a className="link link-hover text-[#888B97]">(012) 345-6789</a>
          <a className="link link-hover text-[#888B97]">example@mail.com</a>
        </nav>
     </div>
      
      </footer>
    </div>
  );
};

export default Footer;
