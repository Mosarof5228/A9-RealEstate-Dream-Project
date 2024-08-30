import logo from "/src/assets/home_logu-removebg-preview.png";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  console.log(user);
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
  const navInfo = (
    <>
      <li className="text-2xl ">
        <Link to={"/"}>Home</Link>
      </li>
      <li className="text-2xl md:invisible">
        <Link to={"#"}>Update Profile</Link>
      </li>

    </>
  );
  //
  return (
    <div className="navbar sm:px-4 lg:px-8  font-serif bg-white z-10 fixed bg-opacity-40 max-w-screen-2xl mx-auto font-bold   ">
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
        <div className="flex items-center  justify-center">
          <Link to={"/"}>
            <img
              className="w-[100px]"
              src={logo}
              alt=""
            />
          </Link>
          <p className="text-xl font-serif invisible md:visible underline ">
            {user?.displayName || "Not "}
          </p>


        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navInfo}</ul>
      </div>
      <div className="navbar-end pr-2 ">
        <button className="btn invisible md:visible mr-4 bg-[#00BBFF] outline-none border-0  text-xl  px-4 ">
          U.Profile
        </button>
        {
          user ? <div className="flex items-center justify-center">


            <div className="avatar mr-2">
              <div className=" w-10 rounded-full ring ring-offset-2">
                <img className="" src={user.photoURL} alt="N.." />
              </div>
            </div>

            <span className="text-2xl ml4 ">
              <button className="text-2xl btn bg-[#00BBFF]"><Link onClick={handleLogout} >Logout</Link></button>
            </span></div> : <button className="text-2xl btn bg-[#00BBFF] ">
            <Link to="/login">Login</Link>
          </button>
        }

      </div>
    </div>
  );
};

export default Navbar;
