import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const updateUser = {
      name,
      email,
    };
    console.log(updateUser);
    fetch(`http://localhost:5000/users/${loadedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("modify Successfully");
        }
      });
  };
  return (
    <div className="pt-[15%] text-center">
      <h2>this is update page</h2>
      <h2>Count: {loadedUser.length}</h2>
      <h2>{loadedUser.name}</h2>
      <form onSubmit={handleUpdate} className="w-2/3 mx-auto">
        <input
          type="text"
          name="name"
          defaultValue={loadedUser.name}
          placeholder="Your Name"
          className="input my-2 input-bordered input-info w-full max-w-xs"
        />
        <br></br>
        <input
          type="email"
          name="email"
          defaultValue={loadedUser.email}
          placeholder="Your Email @"
          className="input input-bordered input-info w-full max-w-xs"
        />
        <br />
        <input
          className="btn font-bold text-black my-2 btn-outline btn-accent btn-wide"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default Update;
