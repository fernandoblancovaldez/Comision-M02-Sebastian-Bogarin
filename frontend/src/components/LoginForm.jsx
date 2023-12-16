import { useContext, useRef } from "react";
import { AuthContext } from "../providers/AuthProvider";

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const email = formData.get("email"),
      password = formData.get("password");

    const user = { email, password };

    const req = await fetch("http://localhost:5001/user/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });
    if (req.status === 400)
      return alert(
        "Error: no se encontró una cominacion de Email y Password en la base de datos"
      );
    if (req.status !== 200) return alert("Error al registrar al usuario");

    const res = await req.json();
    console.log(res);
    login(res);

    formRef.current.reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit} ref={formRef} className="card-body">
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
        <div className="form-control mt-6">
          <button className="btn btn-primary text-slate-100">Login</button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
