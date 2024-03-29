import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";

import { Outlet, useNavigate } from "react-router-dom";

function PrivateRoutes() {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth === null) {
      navigate("/");
    }
  }, [auth, navigate]);

  if (auth === undefined)
    return <span className="loading loading-ball loading-lg"></span>;

  return <Outlet />;
}

export default PrivateRoutes;
