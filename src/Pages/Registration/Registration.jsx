import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Registration = () => {
  const { UserCreate } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    if (password.length < 6) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Password at list one six caracter",
        showConfirmButton: false,
        timer: 1200,
      });
      return;
    } else if (!/[A-Z]/.test(password)) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Password at list one Upper case",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    } else if (!/[a-z]/.test(password)) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Password at list one smaller case",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    } else if (!/\d/.test(password)) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Password at list one Numaric case",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    UserCreate(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Created Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="md:w-1/2 mx-auto  ">
      <div className="pt-[25%]">
        <form onSubmit={handleLogin} className="card-body   mx-auto">
          <h2 className="text-white font-bold text-2xl">Please Registration</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Email</span>
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
            <label className="label text-white">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label text-white">
              <a href="#" className="label-text-alt link text-white link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn hover:bg- bg-[#00BBFF] ">
              Registration
            </button>
          </div>
          <div className="text-white mt-4">
            <p>
              Already Have An Account Please
              <Link to="/login" className="link ml-4 link-hover">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
