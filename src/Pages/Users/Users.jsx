import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

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
        if (data.insertedId) {
          alert("Stored to database successfully");
        }
        console.log(data);
      });
  };
  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Deleted Successfully");
          const remainingUsers = users.filter((user) => user._id !== _id);
          setUsers(remainingUsers);
        }
      });
    console.log("coming>>>>", _id);
  };

  const handleUpdate = () => {
    console.log("coming update");
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
            Id : {user._id} {user.name} {user.email}
            <Link to={`/update/${user._id}`}>
              <button
                onClick={handleUpdate}
                className="btn btn-sm btn-primary mx-2"
              >
                Update
              </button>
            </Link>
            <button
              onClick={() => handleDelete(user._id)}
              className="btn btn-error btn-sm my-2"
            >
              Delete
            </button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
