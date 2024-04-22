import React from "react";
import Main from "../pages/main";
import { Routes, Route } from "react-router-dom";
import Admin from "../pages/Admin/Admin";
import AboutUs from "../pages/AboutUs/AboutUs";
import News from "../pages/News/News";
import Category from "../pages/Category/Category";
import Basket from "../pages/Basket/Basket";
import Favorite from "../pages/Favorite/Favorite";
import Register from "../pages/Admin/registration";
import Profile from "../pages/Admin/editProfile";

const MainRoutes = () => {
  const PUBLIC = [
    { path: "/", element: <Main />, key: 1 },
    { path: "/category", element: <Category />, key: 2 },
    { path: "/news", element: <News />, key: 3 },
    { path: "/aboutus", element: <AboutUs />, key: 4 },
    { path: "/admin", element: <Admin />, key: 5 },
    { path: "/basket", element: <Basket />, key: 6 },
    { path: "/favorite", element: <Favorite />, key: 7 },
    { path: "/register", element: <Register />, key: 8 },
    { path: "/profile", element: <Profile />, key: 9 },
  ];

  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.path} element={el.element} key={el.key} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
