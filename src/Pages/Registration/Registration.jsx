import Swal from "sweetalert2";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { UserCreate, user } = useContext(AuthContext);
  console.log(user);
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    const checkedd = event.target.check.checked;
    console.log(name, photo, email, password, checkedd);
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
    } else if (!checkedd) {
      alert("please checked before registration");
      return;
    }
    UserCreate(email, password)
      .then((result) => {
        // update profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });

        // email varification
        sendEmailVerification(result.user)
          .then(() => {
            alert("Please Check your Email And verify");
          })
          .catch((error) => {
            console.log(error.message);
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "You Already used this email so use the new email",
              showConfirmButton: false,
              timer: 1500,
            });
          });

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
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Already used this email",
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
      <div className="pt-[20%]">
        <form
          onSubmit={handleLogin}
          className="card-body shadow-2xl mt-4 border-8 border-green-50  mx-auto"
        >
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
            <div className="flex justify-end items-center ">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className=" w-full input input-bordered"
                required
              />
              <span
                onClick={handleEyePassword}
                className=" text-3xl absolute mr-4 "
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>

            <label className="label ">
              <a href="#" className="label-text-alt link  link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="flex gap-2 ">
            <input type="checkbox" name="check" id="" />
            <span>
              <p className="text-sm text-blue-400">
                Please Accecpt Terms And Condition
              </p>
            </span>
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
