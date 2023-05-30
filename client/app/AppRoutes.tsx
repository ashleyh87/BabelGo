import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../features/auth/AuthForm";
import Home from "../features/home/Home";
import Style from "../features/style/Style";
import { me } from "./store";
import Menu from "../features/menu/Menu";

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/style" element={<Style />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />
          <Route path="/style" element={<Style />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      )}
    </>
  );
};

export default AppRoutes;
