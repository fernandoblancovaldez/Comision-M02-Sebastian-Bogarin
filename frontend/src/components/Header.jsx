import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const navigate = useNavigate();
  const { auth, logout } = useContext(AuthContext);

  return (
    <header>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a
            className="btn btn-ghost text-xl"
            onClick={() => {
              navigate("/");
            }}
          >
            TRIPshare
          </a>
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal bg-base-200 font-semibold rounded-box">
            <li>
              <a
                onClick={() => {
                  navigate("/");
                }}
              >
                home
              </a>{" "}
            </li>
            <li>
              <a
                onClick={() => {
                  navigate("/posts");
                }}
              >
                posts
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {auth && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-15 rounded-full">
                  <img alt={auth?.user?.username} src={auth?.user?.avatarURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a
                    className="justify-between"
                    onClick={() => {
                      navigate("/profile");
                    }}
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a onClick={logout}>Logout</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
