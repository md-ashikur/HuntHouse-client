import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Notfound from "../pages/NotFound/Notfound";
import AllHouse from "../utilities/dashboard/AllHouse/AllHouse";
import UpdateHouse from "../utilities/dashboard/UpdateHouse/UpdateHouse";
import CreateHouse from "../utilities/dashboard/AddHouse/CreateHouse";
import DashboardLayout from "../layouts/DashboardLayout";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import PrivateRoute from "./Private/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:3000/house"),
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },

      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        ),
        errorElement: <Notfound />,
        children: [
          {
            path: "all",
            element: (
              <PrivateRoute>
                <AllHouse />
              </PrivateRoute>
            ),
          },
          {
            path: "update/:id",
            element: (
              <PrivateRoute>
                <UpdateHouse />
              </PrivateRoute>
            ),
            loader: ({ params }) =>
              fetch(`http://localhost:3000/shoes/${params.id}`),
          },
          {
            path: "create",
            element: (
              <PrivateRoute>
                <CreateHouse />
              </PrivateRoute>
            ),
          },
        ],
      },
    ],
  },
]);
