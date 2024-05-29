import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { logout, user } = useAuth();

  const handleLogout = async()=>{
    await logout()
  }
  return (
    <div>
      <div className="navbar  lg:px-20 fixed top-0 z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="">About Us</Link>
              </li>
              <li>
                <Link to="">Property</Link>
              </li>
              <li>
                <Link to="">Contact Us</Link>
              </li>
              
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Hunt House</a>
        </div>

        <div className="navbar-end">
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            <li>
                <Link to="">About Us</Link>
              </li>
              <li>
                <Link to="">Property</Link>
              </li>
              <li>
                <Link to="">Contact Us</Link>
              </li>
            </ul>
          </div>

          {user && (
              <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/all">Dashboard</Link>
                </li>
                <li>
                  <Link to="">Settings</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
            )}
             {!user && (
              <ul>
               
                <li>
                  <Link to={"/signup"}>Sign Up</Link>
                </li>
              </ul>
            )}
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
