import { Route, Routes } from "react-router-dom";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Post from "../pages/Post";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/post" element={<Post />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </main>
  );
};

export default Main;
