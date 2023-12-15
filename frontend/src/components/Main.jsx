import { Route, Routes } from "react-router-dom";
import Error404 from "../pages/Error404.jsx";
import Home from "../pages/Home.jsx";
import Posts from "../pages/Posts.jsx";
import Post from "../pages/Post.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route exact path="/posts" element={<Posts />} />
          <Route exact path="/posts/:postId" element={<Post />} />
        </Route>

        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </main>
  );
};

export default Main;
