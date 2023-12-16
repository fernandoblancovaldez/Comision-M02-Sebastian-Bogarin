import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

import UpdateUserForm from "../components/UpdateUserForm";

const Profile = () => {
  const { auth, logout } = useContext(AuthContext);

  const handleDeleteUser = async (e) => {
    e.preventDefault();
    if (confirm("Are you sure ?")) {
      const req = await fetch(`http://localhost:5001/user/${auth?.user?._id}`, {
        method: "DELETE",
        headers: {
          authorization: `${auth?.token}`,
        },
      });
      if (req.status === 404)
        return alert(
          "Error: los datos no estan sincronizados, recarga la pagina"
        );
      if (req.status !== 200) return alert("Error al eliminar el usuario");

      logout();
    }
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img className="mask mask-circle" src={auth?.user?.avatarURL} />
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">{auth?.user?.username} !</h1>
            <p className="py-6">Here you can edit your profile !</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <UpdateUserForm />
            <form onSubmit={handleDeleteUser} className="card-body">
              <div className="form-control mt-6">
                <button className="btn btn-error text-white">
                  Delete user
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
