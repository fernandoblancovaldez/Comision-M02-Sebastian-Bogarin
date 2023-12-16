import { useContext, useRef } from "react";
import { AuthContext } from "../providers/AuthProvider";

const NewPost = () => {
  const { auth } = useContext(AuthContext);
  const formRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const title = formData.get("title"),
      description = formData.get("description"),
      imageURL = formData.get("imageURL");

    const post = { title, description, imageURL };

    const req = await fetch(`http://localhost:5001/post/`, {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
        authorization: `${auth?.token}`,
      },
    });
    if (req.status === 404)
      return alert(
        "Error: los datos no se encuentran disponibles, recarga la pagina"
      );
    if (req.status !== 201) return alert("Error al postear");

    const res = await req.json();
    console.log(res);

    formRef.current.reset();
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-right">
          <h1 className="text-5xl font-bold">New Post!</h1>
          <p className="py-6">
            The time has come to share your best experiences with the world.
            Write down your trips and tours through the most wonderful places
            you can remember if you are in a position to think.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} ref={formRef} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="title"
                name="title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                type="text"
                placeholder="description"
                name="description"
                className="textarea textarea-bordered textarea-md w-full max-w-xs"
                required
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="url"
                placeholder="www.my-image.com"
                name="imageURL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Post !</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
