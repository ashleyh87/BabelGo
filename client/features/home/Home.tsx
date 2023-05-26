import React from "react";
import { useSelector } from "react-redux";
import { Container, Typography } from "@mui/material";

const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);

  return (
    <Container>
      <Typography variant="h3">Welcome, {username}</Typography>
    </Container>
  );
};

export default Home;
