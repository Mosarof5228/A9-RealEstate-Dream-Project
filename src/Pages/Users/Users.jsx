import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  console.log(users);
  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {
      name,
      email,
    };
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newUsers = [...users, data];
        setUsers(newUsers);
        form.reset();
      });
  };
  return (
    <div className="pt-[10%]">
      <form onSubmit={handleAddUser} className="card-body w-96  mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered"
            required
          />
        </div>
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>

        <input className="btn btn-primary" type="submit" value="Add User" />
      </form>

      <div className="text-justify flex flex-col  ">
        {users.map((user) => (
          <p key={user.id}>
            Id : {user.id} {user.name} {user.gmail}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
