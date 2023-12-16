import { Route, Routes } from "react-router-dom";
import Error404 from "../pages/Error404.jsx";
import Home from "../pages/Home.jsx";
import Posts from "../pages/Posts.jsx";
import Post from "../pages/Post.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx";
import Profile from "../pages/Profile.jsx";
import NewPost from "../pages/NewPost.jsx";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/new" element={<NewPost />} />
        </Route>

        <Route exact path="/posts/:postId" element={<Post />} />
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </main>
  );
};

export default Main;
