import { useContext, useRef } from "react";
import { AuthContext } from "../providers/AuthProvider";

const UpdateUserForm = () => {
  const { auth, login } = useContext(AuthContext);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const username = formData.get("username"),
      password = formData.get("password"),
      email = formData.get("email"),
      avatarURL = formData.get("avatarURL");

    const user = { username, password, email, avatarURL };

    const req = await fetch(`http://localhost:5001/user/${auth?.user?._id}`, {
      method: "PATCH",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
        authorization: `${auth?.token}`,
      },
    });
    if (req.status === 404)
      return alert(
        "Error: los datos no estan sincronizados, recarga la pagina"
      );
    if (req.status !== 200) return alert("Error al registrar al usuario");

    const res = await req.json();
    login({ ...auth, user: res });

    formRef.current.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} ref={formRef} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">User</span>
          </label>
          <input
            type="text"
            placeholder="Usuario"
            name="username"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="******"
            name="password"
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
            placeholder="usuario@usuario.com"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Avatar URL</span>
          </label>
          <input
            type="url"
            placeholder="www.my-avatar.com"
            name="avatarURL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Update !</button>
        </div>
      </form>
    </>
  );
};

export default UpdateUserForm;
