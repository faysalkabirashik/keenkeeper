
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import FriendDetails from "../pages/FriendDetails";
import Timeline from "../pages/Timeline";
import Stats from "../pages/Stats";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/friend/:id",
      //   element: <FriendDetails />,
      // },
      {
        path: "/friend/:id",
        element: <FriendDetails />,
        loader: async ({ params }) => {
          const res = await fetch("/friends.json");
          const data = await res.json();

          return data.find(
            friend => friend.id === parseInt(params.id)
          );
        },
      },
      {
        path: "/timeline",
        element: <Timeline />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
    ],
  },
]);

export default router;