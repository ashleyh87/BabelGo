import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);

  return (
    <Box>
      <Typography variant="h3">Welcome, {username}</Typography>
    </Box>
  );
};

export default Home;
