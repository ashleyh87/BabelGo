import React, { useState, useEffect } from "react";
import { lightTheme, darkTheme } from "../../app/theme";
import {
  ThemeProvider,
  Box,
  Typography,
  Stack,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import ThumbDownAltRoundedIcon from "@mui/icons-material/ThumbDownAltRounded";

const intros = [
  "Never Lost in Translation Again",
  "Say Goodbye to Language Barriers",
  "Experience Authentic Conversations in Any Language",
  "Speak like a Local, Wherever You Go",
];

const tones = [
  "😐 Neutral",
  "💼 Professional",
  "🩳 Casual",
  "🎩 Formal",
  "💣 Slang",
];

const Home = () => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  const [intro, setIntro] = useState(intros[0]);

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour >= 19 || currentHour < 6) {
      setCurrentTheme(darkTheme);
    } else {
      setCurrentTheme(lightTheme);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * intros.length);
      setIntro(intros[randomIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, [intros]);

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Typography variant="h5">{intro}</Typography>
      </Box>
      <Box
        sx={{
          mx: 1,
          display: "flex",
          flexDirection: "row",
          height: "calc(100vh - 300px)",
        }}
      >
        <Box
          sx={{
            width: "50%",
            height: "100%",
            border: `1px solid ${currentTheme.palette.primary.contrastText}`,
            borderTopLeftRadius: currentTheme.shape.borderRadius,
            borderBottomLeftRadius: currentTheme.shape.borderRadius,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              px: 1,
              borderBottom: `1px solid ${currentTheme.palette.primary.contrastText}`,
            }}
          >
            <FormControl sx={{ minWidth: 125 }}>
              <InputLabel>Languages</InputLabel>
              <Select>
                {tones.map((tone, index) => (
                  <MenuItem key={index} value={tone}>
                    {tone}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ px: 2, flexGrow: 1 }}>
            <Typography variant="h1" sx={{ height: "60%" }}>
              Sample Text
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Typography variant="body1" sx={{ height: "20%" }}>
              Functions
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "50%",
            height: "100%",
            backgroundColor: currentTheme.palette.primary.main,
            borderTopRightRadius: currentTheme.shape.borderRadius,
            borderBottomRightRadius: currentTheme.shape.borderRadius,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ px: 1 }}>
            <FormControl
              sx={{ minWidth: 125, color: currentTheme.palette.text.primary }}
            >
              <InputLabel>Tones</InputLabel>
              <Select>
                {tones.map((tone, index) => (
                  <MenuItem key={index} value={tone}>
                    {tone}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ px: 2, flexGrow: 1 }}>
            <Typography variant="h1">Translated Sample</Typography>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Stack direction="row" spacing={1} sx={{ py: 1, px: 2 }}>
              <Chip
                variant="outlined"
                icon={<ThumbUpAltRoundedIcon fontSize="small" />}
                label="Awesome"
                size="small"
                onClick={handleClick}
                sx={{ py: 1, px: 2 }}
              />
              <Chip
                variant="outlined"
                icon={<ThumbDownAltRoundedIcon fontSize="small" />}
                label="NeedsWork"
                size="small"
                onClick={handleClick}
                sx={{ py: 1, px: 2 }}
              />
            </Stack>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
