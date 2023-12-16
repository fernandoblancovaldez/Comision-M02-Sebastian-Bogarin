import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const Home = () => {
  const { auth } = useContext(AuthContext);
  if (auth === undefined)
    return <span className="loading loading-ball loading-lg"></span>;
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <p className="mb-5 text-3xl font-semibold">welcome to</p>
            <h1 className="mb-5 text-5xl font-bold">TRIPshare</h1>
            <p className="mb-5">
              In drug slang, a trip is a metaphor for the hallucinatory high
              produced by LSD, magic mushrooms, and other drugs.
            </p>
            {!auth && (
              <button
                className="btn bg-base-100 font-semibold mx-1"
                onClick={() =>
                  document.getElementById("login_modal").showModal()
                }
              >
                Login
              </button>
            )}
            <dialog
              id="login_modal"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <LoginForm />
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
            {!auth && (
              <button
                className="btn bg-base-300 font-semibold mx-1"
                onClick={() =>
                  document.getElementById("register_modal").showModal()
                }
              >
                Register
              </button>
            )}
            <dialog
              id="register_modal"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <RegisterForm />
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
