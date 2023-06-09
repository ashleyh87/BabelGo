import React, { useState, useEffect } from "react";
import { lightTheme, darkTheme } from "../../app/theme";
import {
  ThemeProvider,
  Box,
  Typography,
  Stack,
  Chip,
  useMediaQuery,
  MenuItem,
  Input,
  TextField,
} from "@mui/material";
import SwapHorizRoundedIcon from "@mui/icons-material/SwapHorizRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import ThumbDownAltRoundedIcon from "@mui/icons-material/ThumbDownAltRounded";
import { current } from "@reduxjs/toolkit";

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
          m: 2,
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
            backgroundColor: currentTheme.palette.primary.light,
            border: `1px solid ${currentTheme.palette.primary.main}`,
            borderTopLeftRadius: currentTheme.shape.borderRadius,
            borderBottomLeftRadius: currentTheme.shape.borderRadius,
            display: "flex",
            flexDirection: "column",
            marginRight: 1,
          }}
        >
          <Box
            sx={{
              p: 1,
              borderBottom: `1px solid ${currentTheme.palette.primary.main}`,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField select fullWidth helperText="Your Language" />
            <SwapHorizRoundedIcon />
            <TextField select fullWidth helperText="Translate into..." />
          </Box>
          <Box sx={{ px: 2, flexGrow: 1, m: 2 }}>
            <Input
              placeholder="Text to be translated..."
              multiline={true}
              fullWidth
              disableUnderline={true}
              style={{
                fontSize: currentTheme.typography.h1.fontSize,
                fontWeight: currentTheme.typography.h1.fontWeight,
              }}
            />
          </Box>
          <Box sx={{ flexGrow: 0, m: 1 }}>
            <Typography variant="body1" sx={{ height: "20%" }}>
              Functions
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "50%",
            height: "100%",
            backgroundColor: currentTheme.palette.background.default,
            border: `1px solid ${currentTheme.palette.primary.main}`,
            borderTopRightRadius: currentTheme.shape.borderRadius,
            borderBottomRightRadius: currentTheme.shape.borderRadius,
            display: "flex",
            flexDirection: "column",
            marginLeft: 1,
          }}
        >
          <Box
            sx={{
              p: 1,
              borderBottom: `1px solid ${currentTheme.palette.primary.main}`,
            }}
          >
            <TextField
              select
              fullWidth
              label="Tones"
              defaultValue="😐 Neutral"
              helperText="Please select tone preference"
            >
              {tones.map((tone, index) => (
                <MenuItem key={index} value={tone}>
                  {tone}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box sx={{ px: 2, flexGrow: 1, m: 2 }}>
            <Typography variant="h1">Translated Text</Typography>
          </Box>
          <Box sx={{ flexGrow: 0, m: 1 }}>
            <Stack direction="row" spacing={1} sx={{ px: 1 }}>
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
                label="Needs Work"
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
