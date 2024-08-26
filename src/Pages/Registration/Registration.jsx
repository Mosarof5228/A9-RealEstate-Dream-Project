import Swal from "sweetalert2";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Registration = () => {
  const { UserCreate } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("name");
    const photo = form.get("photo");
    console.log(name, photo, email, password);
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
      <div className="pt-[20%]">
        <form onSubmit={handleLogin} className="card-body shadow-2xl mt-4 border-8 border-green-50  mx-auto">
          <h2 className=" font-bold text-2xl">Please Registration</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text ">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text ">Photo Url</span>
            </label>
            <input
              type="text"
              placeholder="Photo Url"
              name="photo"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text ">Email</span>
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
            <label className="label ">
              <span className="label-text ">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label ">
              <a href="#" className="label-text-alt link  link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn hover:bg- bg-[#00BBFF] ">
              Registration
            </button>
          </div>
          <div className=" mt-4">
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
