import React from "react";

const RegisterForm = () => {
  return (
    <>
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Usuario" required />
        <input type="password" placeholder="******" required />
        <input type="email" placeholder="usuario@usuario.com" required />
        <input type="url" placeholder="www.my-avatar.com" required />
        <button>Register</button>
      </form>
    </>
  );
};

export default RegisterForm;
