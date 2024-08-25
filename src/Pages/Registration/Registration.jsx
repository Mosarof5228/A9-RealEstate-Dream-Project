import { Link } from "react-router-dom";

const Registration = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
  };

  return (
    <div className="md:w-1/2 mx-auto  ">
      <div className="pt-[25%]">
        <form onSubmit={handleLogin} className="card-body   mx-auto">
          <h2 className="text-white font-bold text-2xl">Please Login!</h2>
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
            <button className="btn btn-primary">Login</button>
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
