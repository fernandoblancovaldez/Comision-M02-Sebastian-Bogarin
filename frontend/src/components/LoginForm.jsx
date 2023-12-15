import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const email = formData.get("email"),
      password = formData.get("password");

    const user = { email, password };

    const req = await fetch("https://api-tripshare.up.railway.app/user/login", {
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

    navigate("/post");
    formRef.current.reset();
  };
  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} ref={formRef}>
        <input
          type="email"
          placeholder="usuario@usuario.com"
          name="email"
          required
        />
        <input type="password" placeholder="******" name="password" required />
        <button>Login</button>
      </form>
    </>
  );
};

export default LoginForm;
