import {
  createBrowserRouter,
  createRoutesFromChildren,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import SingleBlogPage from "./pages/SingleBlogPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<Root />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:blogId" element={<SingleBlogPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};