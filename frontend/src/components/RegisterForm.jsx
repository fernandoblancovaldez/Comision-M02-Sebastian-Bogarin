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
      <h2>Register</h2>
      <form onSubmit={handleSubmit} ref={formRef}>
        <input type="text" placeholder="Usuario" name="username" required />
        <input type="password" placeholder="******" name="password" required />
        <input
          type="email"
          placeholder="usuario@usuario.com"
          name="email"
          required
        />
        <input
          type="url"
          placeholder="www.my-avatar.com"
          name="avatarURL"
          required
        />
        <button>Register</button>
      </form>
    </>
  );
};

export default RegisterForm;
