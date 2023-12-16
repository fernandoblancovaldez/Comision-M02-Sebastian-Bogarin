import { useContext, useRef } from "react";
import { AuthContext } from "../providers/AuthProvider";

const RegisterForm = () => {
  const { login } = useContext(AuthContext);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const username = formData.get("username"),
      password = formData.get("password"),
      email = formData.get("email"),
      avatarURL = formData.get("avatarURL");

    const user = { username, password, email, avatarURL };

    const req = await fetch("http://localhost:5001/user/register", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });
    if (req.status === 400)
      return alert("Error: quizas el usuario o el email se encuentren en uso");
    if (req.status !== 201) return alert("Error al registrar al usuario");

    const res = await req.json();
    login(res);

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
            placeholder="User"
            name="username"
            className="input input-bordered text-slate-500"
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
            className="input input-bordered text-slate-500"
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
            className="input input-bordered text-slate-500"
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
            className="input input-bordered text-slate-500"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary text-slate-100">Register</button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
