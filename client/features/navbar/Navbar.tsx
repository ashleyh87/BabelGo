import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { logout } from "../../app/store";
import { lightTheme, darkTheme } from "../../app/theme";
import { PrimaryButton, SecondaryButton, TextButton } from "../style/Style";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import { ThemeProvider } from "@emotion/react";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/login");
  };

  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  useEffect(() => {
    const currentHour = new Date().getHours();
    console.log("Current Hour:", currentHour);

    if (currentHour >= 19 || currentHour < 6) {
      setCurrentTheme(darkTheme);
    } else {
      setCurrentTheme(lightTheme);
    }
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          zIndex: 1000,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          p: 2,
          backgroundColor: currentTheme.palette.background.default,
        }}
      >
        <Link to="/">
          <TextButton>
            <img
              src="https://em-content.zobj.net/source/animated-noto-color-emoji/356/dizzy_1f4ab.gif"
              alt="Logo"
              width="25px"
            />
            <Typography
              variant="h5"
              sx={{ marginLeft: 1, textTransform: "lowercase" }}
            >
              BabelGo
            </Typography>
          </TextButton>
        </Link>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AppsRoundedIcon />
          {isLoggedIn ? (
            <Box sx={{ mx: 2 }}>
              {/* The navbar will show these links after you log in */}
              <SecondaryButton type="button" onClick={logoutAndRedirectHome}>
                Logout
              </SecondaryButton>
            </Box>
          ) : (
            <Box sx={{ mx: 2 }}>
              {/* The navbar will show these links before you log in */}
              <Link to="/login">
                <PrimaryButton>Login</PrimaryButton>
              </Link>
            </Box>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Navbar;
