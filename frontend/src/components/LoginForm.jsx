const LoginForm = () => {
  return (
    <>
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="usuario@usuario.com" required />
        <input type="password" placeholder="******" required />
        <button>Login</button>
      </form>
    </>
  );
};

export default LoginForm;
