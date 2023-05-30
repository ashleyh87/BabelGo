import React, { useState, useEffect } from "react";
import { lightTheme, darkTheme } from "../../app/theme";
import {
  ThemeProvider,
  Box,
  Typography,
  Container,
  Divider,
} from "@mui/material";
import ConnectingAirportsRoundedIcon from "@mui/icons-material/ConnectingAirportsRounded";
import HotelRoundedIcon from "@mui/icons-material/HotelRounded";
import RestaurantMenuRoundedIcon from "@mui/icons-material/RestaurantMenuRounded";
import DirectionsSubwayRoundedIcon from "@mui/icons-material/DirectionsSubwayRounded";
import AttractionsRoundedIcon from "@mui/icons-material/AttractionsRounded";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import MedicalServicesRoundedIcon from "@mui/icons-material/MedicalServicesRounded";
import FestivalRoundedIcon from "@mui/icons-material/FestivalRounded";
import TextsmsRoundedIcon from "@mui/icons-material/TextsmsRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

const Menu = () => {
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
      <Box
        sx={{
          position: "absolute",
          top: 55,
          right: 0,
          width: 325,
          height: 310,
          m: 2,
          paddingTop: 1,
          border: "1px solid black",
          backgroundColor: currentTheme.palette.background.default,
          borderRadius: currentTheme.shape.borderRadius,
          color: currentTheme.palette.text.primary,
          zIndex: 9999,
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Container
          sx={{
            mx: 1,
            p: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              width: 80,
              p: 1,
            }}
          >
            <ConnectingAirportsRoundedIcon />
            <Typography variant="overline">Airport</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              width: 80,
              p: 1,
            }}
          >
            <HotelRoundedIcon />
            <Typography variant="overline">Accomodation</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              width: 80,
              p: 1,
            }}
          >
            <RestaurantMenuRoundedIcon />
            <Typography variant="overline">Restaurant</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              width: 80,
              p: 1,
            }}
          >
            <DirectionsSubwayRoundedIcon />
            <Typography variant="overline">Transport</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              width: 80,
              p: 1,
            }}
          >
            <AttractionsRoundedIcon />
            <Typography variant="overline">Attractions</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              width: 80,
              p: 1,
            }}
          >
            <ShoppingBagRoundedIcon />
            <Typography variant="overline">Shopping</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              width: 80,
              p: 1,
            }}
          >
            <MedicalServicesRoundedIcon />
            <Typography variant="overline">Emergency</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              width: 80,
              p: 1,
            }}
          >
            <FestivalRoundedIcon />
            <Typography variant="overline">Events</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              width: 80,
              p: 1,
            }}
          >
            <TextsmsRoundedIcon />
            <Typography variant="overline">General</Typography>
          </Box>
        </Container>
        <Divider />
        <Container
          sx={{
            mx: 1,
            p: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              width: 80,
              p: 1,
            }}
          >
            <FavoriteBorderRoundedIcon />
            <Typography variant="overline">Favorites</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              width: 80,
              p: 1,
            }}
          >
            <HistoryRoundedIcon />
            <Typography variant="overline">History</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              width: 80,
              p: 1,
            }}
          >
            <SettingsRoundedIcon />
            <Typography variant="overline">Settings</Typography>
          </Box>
          <Divider />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Menu;
