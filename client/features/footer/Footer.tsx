import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { TextButton } from "../style/Style";

const Footer = () => {
  return (
    <Box
      position="fixed"
      left={0}
      bottom={0}
      width="100%"
      p={2}
      textAlign="center"
    >
      <Typography variant="overline">
        © 2023 BabelGo. All rights reserved.{" "}
      </Typography>
      <Typography variant="overline">
        Powered by{" "}
        <Link
          to="https://openai.com/blog/chatgpt"
          target="_blank"
          rel="noopener"
        >
          Open AI
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
