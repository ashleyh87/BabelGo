import React, { useState, useEffect } from "react";
import Navbar from "../features/navbar/Navbar";
import AppRoutes from "./AppRoutes";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";
import Footer from "../features/footer/Footer";

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  useEffect(() => {
    const currentHour = new Date().getHours();

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
        }}
      >
        <Navbar />
        <Box sx={{ paddingTop: 10, px: 2 }}>
          <AppRoutes />
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
