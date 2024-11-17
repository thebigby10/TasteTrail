import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import App from "../App";
import PrivateRoute from "./PrivateRoute";
import AddRecipe from "../pages/Recipe/AddRecipe";
import Login from "../shared/Login/Login";
import Register from "../shared/Register/Register";
import RecipeDetails from "../pages/Recipe/RecipeDetails";
import ProfilePage from "../pages/Profile/ProfilePage";
import Trending from "../pages/TrendingPage/Trending";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/add-recipe",
        element: (
          <PrivateRoute>
            <AddRecipe />
          </PrivateRoute>
        ),
      },
      {
        path: "/recipe-details/:id",
        element: (
          <PrivateRoute>
            <RecipeDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/trending",
        element: <Trending />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);