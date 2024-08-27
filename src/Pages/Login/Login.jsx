import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { UserLogin } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    UserLogin(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Something Wrong please check console.",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const handleEyePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="md:w-1/2 mx-auto  ">
      <div className="pt-[25%]">
        <form
          onSubmit={handleLogin}
          className="card-body border-8 border-green-50  shadow-2xl  mx-auto"
        >
          <h2 className=" font-bold text-2xl">Please Login!</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="flex items-center justify-end">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered w-full"
                required
              />
              <span
                onClick={handleEyePassword}
                className="absolute mr-4 text-2xl"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#00BBFF]">Login</button>
          </div>
          <div className=" mt-4">
            <p>
              Are You New Here Please{" "}
              <Link to="/registration" className="link link-hover">
                Registration
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
