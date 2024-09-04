import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PropertyDetails from "../Pages/Home/PropertyDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Users from "../Pages/Users/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("properties.json"),
      },
      {
        path: "/users",
        element: <Users></Users>,
      },
      {
        path: "/propertyDetails",
        element: (
          <PrivateRoute>
            <PropertyDetails></PropertyDetails>
          </PrivateRoute>
        ),

        // loader:({params})=>{``}
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);
