import React from "react";

const LoginForm = () => {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="usuario@usuario.com" />
        <input type="password" placeholder="******" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
