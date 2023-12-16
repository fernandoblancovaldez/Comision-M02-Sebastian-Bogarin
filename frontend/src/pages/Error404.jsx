import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <h3>Error404</h3>
      <p>Not Found</p>
      <Link to="/">Go to Home</Link>
    </>
  );
};

export default Error404;
