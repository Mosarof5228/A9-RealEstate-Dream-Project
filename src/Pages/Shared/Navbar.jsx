import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(result => {
        console.log("log out successfully", result.user,)
      })
      .catch(error => {
        console.log(error.message);
      })
    console.log("logout comming");
  }
  const { user } = useContext(AuthContext);
  const navInfo = (
    <>
      <li className="text-2xl ">
        <a>Item 1</a>
      </li>




      <li className="text-2xl">
        <a>Item 3</a>
      </li>
    </>
  );
  //
  return (
    <div className="navbar sm:px-4 lg:px-8  bg-white z-10 fixed bg-opacity-40 max-w-screen-2xl mx-auto font-bold   ">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navInfo}
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <Link to={"/"}>
            {" "}
            <img
              className="w-[100px]"
              src="/src/assets/home_logu-removebg-preview.png"
              alt=""
            />
          </Link>
          <span className="font-bold text-2xl">Name:</span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navInfo}</ul>
      </div>
      <div className="navbar-end gap-4 ">
        {
          user ? <div className="flex items-center justify-center"><Link>
            <img
              className="w-14 stroke-2"
              src="/src/assets/login_logo-removebg-preview.png"
              alt=""
            />
          </Link>
            <span className="text-2xl ">
              <Link onClick={handleLogout} >Logout</Link>
            </span></div> : <span className="text-2xl ">
            <Link to="/login">Login</Link>
          </span>
        }
        <button className="btn bg-[#00BBFF] outline-none border-0  text-xl  px-4 ">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default Navbar;
