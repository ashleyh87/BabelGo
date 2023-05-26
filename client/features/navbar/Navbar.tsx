import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import { logout } from "../../app/store";
import { PrimaryButton, SecondaryButton, TextButton } from "../style/Style";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        px: 2,
        m: 1,
      }}
    >
      <Link to="/home">
        <TextButton>
          <img
            src="https://em-content.zobj.net/source/animated-noto-color-emoji/356/dizzy_1f4ab.gif"
            alt="Logo"
            width="30px"
          />
          <Typography
            variant="h2"
            sx={{ marginLeft: 2, textTransform: "lowercase" }}
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
          <Box>
            {/* The navbar will show these links after you log in */}
            <SecondaryButton type="button" onClick={logoutAndRedirectHome}>
              Logout
            </SecondaryButton>
          </Box>
        ) : (
          <Box>
            {/* The navbar will show these links before you log in */}
            <Link to="/login">
              <PrimaryButton>Login</PrimaryButton>
            </Link>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
