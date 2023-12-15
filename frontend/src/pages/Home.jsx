import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const Home = () => {
  const { auth, logout } = useContext(AuthContext);
  if (auth === undefined) return <div>Loading ..</div>;
  return (
    <>
      <h3>{auth?.user?.username}</h3>
      <button onClick={logout}>Logout</button>
      <LoginForm />
      <RegisterForm />
    </>
  );
};

export default Home;
