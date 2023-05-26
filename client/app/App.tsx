import React, { useState, useEffect } from "react";
import Navbar from "../features/navbar/Navbar";
import AppRoutes from "./AppRoutes";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";

const App = () => {
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
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: currentTheme.palette.background.default,
          color: currentTheme.palette.text.primary,
          m: 0,
          p: 2,
        }}
      >
        <Navbar />
        <AppRoutes />
      </Box>
    </ThemeProvider>
  );
};

export default App;
