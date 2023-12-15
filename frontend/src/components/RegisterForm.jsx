import React from "react";
// {
//   username: {
//     type: String,
//     require: true,
//   },
//   password: {
//     type: String,
//     require: true,
//   },
//   email: {
//     type: String,
//     require: true,
//     unique: true,
//   },
//   avatarURL: {
//     type: String,
//     require: true,
//   },
// }
const RegisterForm = () => {
  return (
    <div>
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="******" />
        <input type="email" placeholder="usuario@usuario.com" />
        <input type="url" placeholder="www.my-avatar.com" />
        <button>Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
