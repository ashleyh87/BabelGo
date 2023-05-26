import React from "react";
import { lightTheme, darkTheme } from "../../app/theme";
import {
  Typography,
  Box,
  Button,
  Divider,
  TextField,
  Chip,
  Stack,
  Fab,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SentimentSatisfiedRoundedIcon from "@mui/icons-material/SentimentSatisfiedRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import ThumbDownAltRoundedIcon from "@mui/icons-material/ThumbDownAltRounded";
import AddIcon from "@mui/icons-material/Add";

// Default button
const DefaultButton = styled(Button)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  backgroundColor: `${theme.palette.primary.main}`,
  color: `${theme.palette.primary.contrastText}`,
  borderRadius: theme.shape.borderRadius,
  m: 4,
  px: 2,
  py: 1,
  "&:hover": {
    boxShadow: "1px 1px 2.5px rgba(0, 0, 0, 0.5)",
    backgroundColor: `${theme.palette.primary.main}`,
    color: `${theme.palette.primary.contrastText}`,
  },
  "&:disabled": {
    backgroundColor: `${theme.palette.grey[100]}`,
    color: `${theme.palette.grey[300]}`,
    border: `1px dashed ${theme.palette.grey[400]}`,
    cursor: "not-allowed",
  },
}));

// Primary button
const PrimaryButton = styled(Button)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.light}`,
  backgroundColor: `${theme.palette.primary.light}`,
  color: `${theme.palette.primary.dark}`,
  borderRadius: theme.shape.borderRadius,
  m: 4,
  px: 2,
  py: 1,
  "&:hover": {
    boxShadow: "1px 1px 2.5px rgba(0, 0, 0, 0.5)",
    backgroundColor: `${theme.palette.primary.light}`,
    color: `${theme.palette.primary.dark}`,
  },
  "&:disabled": {
    backgroundColor: `${theme.palette.grey[100]}`,
    color: `${theme.palette.grey[300]}`,
    border: `1px dashed ${theme.palette.grey[400]}`,
    cursor: "not-allowed",
  },
}));

// Accent button
const AccentButton = styled(Button)(({ theme }) => ({
  border: `1px solid ${theme.palette.secondary.main}`,
  backgroundColor: `${theme.palette.secondary.main}`,
  color: `${theme.palette.secondary.contrastText}`,
  borderRadius: theme.shape.borderRadius,
  fontWeight: 600,
  m: 4,
  px: 2,
  py: 1,
  "&:hover": {
    boxShadow: "1px 1px 2.5px rgba(0, 0, 0, 0.5)",
    backgroundColor: `${theme.palette.secondary.main}`,
    color: `${theme.palette.secondary.contrastText}`,
  },
  "&:disabled": {
    backgroundColor: `${theme.palette.grey[100]}`,
    color: `${theme.palette.grey[300]}`,
    border: `1px dashed ${theme.palette.grey[400]}`,
    cursor: "not-allowed",
  },
}));

// Secondary button
const SecondaryButton = styled(Button)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  color: `${theme.palette.primary.main}`,
  borderRadius: theme.shape.borderRadius,
  m: 4,
  px: 2,
  py: 1,
  "&:hover": {
    boxShadow: "1px 1px 2.5px rgba(0, 0, 0, 0.5)",
    backgroundColor: `${theme.palette.primary.light}`,
    color: `${theme.palette.primary.dark}`,
  },
  "&:disabled": {
    color: `${theme.palette.grey[200]}`,
    border: `1px dashed ${theme.palette.grey[300]}`,
    cursor: "not-allowed",
  },
}));

// Text button
const TextButton = styled(Button)(({ theme }) => ({
  color: `${theme.palette.primary.dark}`,
  m: 4,
  px: 2,
  py: 1,
  "&:hover": {
    backgroundColor: `${theme.palette.primary.light}`,
    color: `${theme.palette.primary.dark}`,
  },
  "&:disabled": {
    backgroundColor: `${theme.palette.background.default}`,
    color: `${theme.palette.grey[300]}`,
    cursor: "not-allowed",
  },
}));

// TextField Styled
const StyledTextField = styled(TextField)(({ theme }) => ({
  color: `${theme.palette.text.primary}`,
}));

const StyledFAB = styled(Fab)(({ theme }) => ({
  color: `${theme.palette.secondary.contrastText}`,
  backgroundColor: `${theme.palette.secondary.main}`,
  boxShadow: "1px 1px 2.5px rgba(0, 0, 0, 0.5)",
  "&:hover": {
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
    color: `${theme.palette.secondary.contrastText}`,
    backgroundColor: `${theme.palette.secondary.main}`,
  },
}));

const handleClick = () => {
  console.info("You clicked the Chip.");
};

const Style = () => {
  return (
    <Box
      sx={{
        mx: 2,
      }}
    >
      <Typography variant="h1">Style Guide</Typography>
      <Box sx={{ my: 2 }}>
        <Typography variant="h2">Logos</Typography>
        <Divider sx={{ my: 2 }} />
        <TextButton>
          <img
            src="https://em-content.zobj.net/source/animated-noto-color-emoji/356/dizzy_1f4ab.gif"
            alt="Logo"
            width="30px"
          />
          <Typography
            variant="h2"
            sx={{
              marginLeft: 2,
              textTransform: "lowercase",
              textDecoration: "bold",
            }}
          >
            BabelGo
          </Typography>
        </TextButton>
      </Box>
      <Box sx={{ my: 6 }}>
        <Typography variant="h2">Buttons</Typography>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ my: 1 }}>
          <Typography variant="h4">Default</Typography>
          <DefaultButton sx={{ m: 2 }}>
            <Typography variant="button">Default</Typography>
          </DefaultButton>
          <DefaultButton sx={{ m: 2 }}>
            <Typography variant="button">Default</Typography>
            <SentimentSatisfiedRoundedIcon sx={{ marginLeft: 1 }} />
          </DefaultButton>
          <DefaultButton sx={{ m: 2, paddingRight: 1 }}>
            <MoreVertRoundedIcon sx={{ marginRight: 1 }} />{" "}
            <Typography variant="button" sx={{ mx: 1 }}>
              Default
            </Typography>
          </DefaultButton>
          <DefaultButton sx={{ m: 2 }} disabled>
            <Typography variant="button">Default</Typography>
          </DefaultButton>
        </Box>
        <Box sx={{ my: 1 }}>
          <Typography variant="h4">Primary</Typography>
          <PrimaryButton sx={{ m: 2 }}>
            <Typography variant="button">Primary</Typography>
          </PrimaryButton>
          <PrimaryButton sx={{ m: 2 }}>
            <Typography variant="button">Primary</Typography>{" "}
            <SentimentSatisfiedRoundedIcon sx={{ marginLeft: 1 }} />
          </PrimaryButton>
          <PrimaryButton sx={{ m: 2, paddingRight: 1 }}>
            <MoreVertRoundedIcon sx={{ marginRight: 1 }} />{" "}
            <Typography variant="button" sx={{ mx: 1 }}>
              Primary
            </Typography>
          </PrimaryButton>
          <PrimaryButton sx={{ m: 2 }} disabled>
            <Typography variant="button">Primary</Typography>
          </PrimaryButton>
        </Box>
        <Box sx={{ my: 1 }}>
          <Typography variant="h4">Accent</Typography>
          <AccentButton sx={{ m: 2 }}>
            <Typography variant="button">Accent</Typography>
          </AccentButton>
          <AccentButton sx={{ m: 2 }}>
            <Typography variant="button">Accent</Typography>
            <SentimentSatisfiedRoundedIcon sx={{ marginLeft: 1 }} />
          </AccentButton>
          <AccentButton sx={{ m: 2, paddingRight: 1 }}>
            <MoreVertRoundedIcon sx={{ marginRight: 1 }} />{" "}
            <Typography variant="button" sx={{ mx: 1 }}>
              Accent
            </Typography>
          </AccentButton>
          <AccentButton sx={{ m: 2 }} disabled>
            <Typography variant="button">Accent</Typography>
          </AccentButton>
        </Box>
        <Box sx={{ my: 1 }}>
          <Typography variant="h4">Secondary</Typography>
          <SecondaryButton sx={{ m: 2 }}>
            <Typography variant="button">Secondary</Typography>
          </SecondaryButton>
          <SecondaryButton sx={{ m: 2 }}>
            <Typography variant="button">Secondary</Typography>{" "}
            <SentimentSatisfiedRoundedIcon sx={{ marginLeft: 1 }} />
          </SecondaryButton>
          <SecondaryButton sx={{ m: 2, paddingRight: 1 }}>
            <MoreVertRoundedIcon sx={{ marginRight: 1 }} />{" "}
            <Typography variant="button" sx={{ mx: 1 }}>
              Secondary
            </Typography>
          </SecondaryButton>
          <SecondaryButton sx={{ m: 2 }} disabled>
            <Typography variant="button">Secondary</Typography>
          </SecondaryButton>
        </Box>
        <Box sx={{ my: 1 }}>
          <Typography variant="h4">Text</Typography>
          <TextButton sx={{ m: 2 }}>
            <Typography variant="button">Text</Typography>
          </TextButton>
          <TextButton sx={{ m: 2 }}>
            <Typography variant="button">Text</Typography>{" "}
            <SentimentSatisfiedRoundedIcon sx={{ marginLeft: 1 }} />
          </TextButton>
          <TextButton sx={{ m: 2, paddingRight: 1 }}>
            <MoreVertRoundedIcon sx={{ marginRight: 1 }} />{" "}
            <Typography variant="button" sx={{ mx: 1 }}>
              Text
            </Typography>
          </TextButton>
          <TextButton sx={{ m: 2 }} disabled>
            <Typography variant="button">Text</Typography>
          </TextButton>
        </Box>
        <Box sx={{ my: 1 }}>
          <Typography variant="h4">FAB</Typography>
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <StyledFAB size="small" color="secondary" aria-label="add">
              <AddIcon />
            </StyledFAB>
            <StyledFAB size="medium" color="secondary" aria-label="add">
              <AddIcon />
            </StyledFAB>
            <StyledFAB color="secondary" aria-label="add">
              <AddIcon />
            </StyledFAB>
          </Box>
        </Box>
      </Box>
      <Box sx={{ my: 6 }}>
        <Typography variant="h2">Forms</Typography>
        <Divider sx={{ my: 2 }} />
        <StyledTextField
          label="Search field"
          type="search"
          variant="filled"
          sx={{ m: 2 }}
        />
        <StyledTextField
          label="Search field"
          type="search"
          variant="outlined"
          sx={{ m: 2 }}
        />
      </Box>
      <Box sx={{ my: 6 }}>
        <Typography variant="h2">Ratings</Typography>
        <Divider sx={{ my: 2 }} />
        <Stack direction="row" spacing={1}>
          <Chip
            variant="outlined"
            icon={<ThumbUpAltRoundedIcon fontSize="small" />}
            label="Awesome"
            size="small"
            onClick={handleClick}
          />
          <Chip
            icon={<ThumbDownAltRoundedIcon fontSize="small" />}
            label="NeedsWork"
            size="small"
            onClick={handleClick}
          />
        </Stack>
      </Box>
      <Box sx={{ my: 6 }}>
        <Typography variant="h2">Avatar</Typography>
        <Divider sx={{ my: 2 }} />
      </Box>
      <Box sx={{ my: 6 }}>
        <Typography variant="h2">Light Scheme</Typography>
        <Divider sx={{ my: 2 }} />
        <Box
          sx={{
            my: 1,
            display: "flex",
            flexDirection: "row",
            textTransform: "capitalize",
          }}
        >
          <Box
            sx={{
              backgroundColor: lightTheme.palette.primary.main,
              py: 2,
              px: 1,
              borderTopLeftRadius: lightTheme.shape.borderRadius,
              height: 120,
              width: "15%",
              minWidth: 100,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: lightTheme.palette.primary.contrastText }}
            >
              Primary
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: lightTheme.palette.primary.contrastText,
              py: 2,
              px: 1,
              height: 120,
              width: "15%",
              minWidth: 100,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: lightTheme.palette.primary.main }}
            >
              On Primary
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: lightTheme.palette.primary.light,
              py: 2,
              px: 1,
              height: 120,
              width: "15%",
              minWidth: 100,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: lightTheme.palette.primary.dark }}
            >
              Primary Container
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: lightTheme.palette.primary.dark,
              py: 2,
              px: 1,
              borderTopRightRadius: lightTheme.shape.borderRadius,
              height: 120,
              width: "15%",
              minWidth: 100,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: lightTheme.palette.primary.light }}
            >
              On Primary Container
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            my: 1,
            display: "flex",
            flexDirection: "row",
            textTransform: "capitalize",
          }}
        >
          <Box
            sx={{
              backgroundColor: lightTheme.palette.secondary.main,
              py: 2,
              px: 1,
              height: 120,
              width: "15%",
              minWidth: 100,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: lightTheme.palette.secondary.contrastText }}
            >
              secondary
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: lightTheme.palette.secondary.contrastText,
              py: 2,
              px: 1,
              height: 120,
              width: "15%",
              minWidth: 100,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: lightTheme.palette.secondary.main }}
            >
              On secondary
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: lightTheme.palette.secondary.light,
              py: 2,
              px: 1,
              height: 120,
              width: "15%",
              minWidth: 100,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: lightTheme.palette.secondary.dark }}
            >
              secondary Container
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: lightTheme.palette.secondary.dark,
              py: 2,
              px: 1,
              height: 120,
              width: "15%",
              minWidth: 100,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: lightTheme.palette.secondary.light }}
            >
              On secondary Container
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            my: 1,
            display: "flex",
            flexDirection: "row",
            textTransform: "capitalize",
          }}
        >
          <Box
            sx={{
              backgroundColor: lightTheme.palette.error.main,
              py: 2,
              px: 1,
              height: 120,
              width: "15%",
              minWidth: 100,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: lightTheme.palette.error.contrastText }}
            >
              error
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: lightTheme.palette.error.contrastText,
              py: 2,
              px: 1,
              height: 120,
              width: "15%",
              minWidth: 100,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: lightTheme.palette.error.main }}
            >
              On error
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: lightTheme.palette.error.light,
              py: 2,
              px: 1,
              height: 120,
              width: "15%",
              minWidth: 100,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: lightTheme.palette.error.dark }}
            >
              error Container
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: lightTheme.palette.error.dark,
              py: 2,
              px: 1,
              height: 120,
              width: "15%",
              minWidth: 100,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: lightTheme.palette.error.light }}
            >
              On error Container
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            my: 1,
            display: "flex",
            flexDirection: "row",
            textTransform: "capitalize",
          }}
        >
          <Box
            sx={{
              backgroundColor: lightTheme.palette.background.default,
              py: 2,
              px: 1,
              height: 120,
              width: "30%",
              minWidth: 100,
              borderBottomLeftRadius: lightTheme.shape.borderRadius,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: lightTheme.palette.text.primary }}
            >
              background
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: lightTheme.palette.text.primary,
              py: 2,
              px: 1,
              height: 120,
              width: "30%",
              minWidth: 100,
              borderBottomRightRadius: lightTheme.shape.borderRadius,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: lightTheme.palette.background.default }}
            >
              On background
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ my: 6 }}>
        <Typography variant="h2">Dark Scheme</Typography>
        <Divider sx={{ my: 2 }} />
        <Box
          sx={{
            my: 1,
            display: "flex",
            flexDirection: "row",
            textTransform: "capitalize",
          }}
        >
          <Box
            sx={{
              backgroundColor: darkTheme.palette.primary.main,
              py: 2,
              px: 1,
              borderTopLeftRadius: darkTheme.shape.borderRadius,
              height: 120,
              width: "15%",
              minWidth: 100,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: darkTheme.palette.primary.contrastText }}
            >
              Primary
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: darkTheme.palette.primary.contrastText,
              py: 2,
              px: 1,
              height: 120,
              width: "15%",
              minWidth: 100,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: darkTheme.palette.primary.main }}
            >
              On Primary
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: darkTheme.palette.primary.light,
              py: 2,
              px: 1,
              height: 120,
              width: "15%",
              minWidth: 100,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: darkTheme.palette.primary.dark }}
            >
              Primary Container
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: darkTheme.palette.primary.dark,
              py: 2,
              px: 1,
              borderTopRightRadius: darkTheme.shape.borderRadius,
              height: 120,
              width: "15%",
              minWidth: 100,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: darkTheme.palette.primary.light }}
            >
              On Primary Container
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            my: 1,
            display: "flex",
            flexDirection: "row",
            textTransform: "capitalize",
          }}
        >
          <Box
            sx={{
              backgroundColor: darkTheme.palette.secondary.main,
              py: 2,
              px: 1,
              height: 120,
              width: "15%",
              minWidth: 100,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: darkTheme.palette.secondary.contrastText }}
            >
              secondary
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: darkTheme.palette.secondary.contrastText,
              py: 2,
              px: 1,
              height: 120,
              width: "15%",
              minWidth: 100,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: darkTheme.palette.secondary.main }}
            >
              On secondary
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: darkTheme.palette.secondary.light,
              py: 2,
              px: 1,
              height: 120,
              width: "15%",
              minWidth: 100,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: darkTheme.palette.secondary.dark }}
            >
              secondary Container
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: darkTheme.palette.secondary.dark,
              py: 2,
              px: 1,
              height: 120,
              width: "15%",
              minWidth: 100,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: darkTheme.palette.secondary.light }}
            >
              On secondary Container
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            my: 1,
            display: "flex",
            flexDirection: "row",
            textTransform: "capitalize",
          }}
        >
          <Box
            sx={{
              backgroundColor: darkTheme.palette.error.main,
              py: 2,
              px: 1,
              height: 120,
              width: "15%",
              minWidth: 100,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: darkTheme.palette.error.contrastText }}
            >
              error
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: darkTheme.palette.error.contrastText,
              py: 2,
              px: 1,
              height: 120,
              width: "15%",
              minWidth: 100,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: darkTheme.palette.error.main }}
            >
              On error
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: darkTheme.palette.error.light,
              py: 2,
              px: 1,
              height: 120,
              width: "15%",
              minWidth: 100,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: darkTheme.palette.error.dark }}
            >
              error Container
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: darkTheme.palette.error.dark,
              py: 2,
              px: 1,
              height: 120,
              width: "15%",
              minWidth: 100,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: darkTheme.palette.error.light }}
            >
              On error Container
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            my: 1,
            display: "flex",
            flexDirection: "row",
            textTransform: "capitalize",
          }}
        >
          <Box
            sx={{
              backgroundColor: darkTheme.palette.background.default,
              py: 2,
              px: 1,
              height: 120,
              width: "30%",
              minWidth: 100,
              borderBottomLeftRadius: darkTheme.shape.borderRadius,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: darkTheme.palette.text.primary }}
            >
              background
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: darkTheme.palette.text.primary,
              py: 2,
              px: 1,
              height: 120,
              width: "30%",
              minWidth: 100,
              borderBottomRightRadius: darkTheme.shape.borderRadius,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: darkTheme.palette.background.default }}
            >
              On background
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ my: 6 }}>
        <Box sx={{ my: 1 }}>
          <Typography variant="h2">Typography</Typography>
          <Divider sx={{ my: 2 }} />
        </Box>
        <Box sx={{ my: 1 }}>
          <Typography variant="h1">Heading 1</Typography>
        </Box>
        <Box sx={{ my: 1 }}>
          <Typography variant="h2">Heading 2</Typography>
        </Box>
        <Box sx={{ my: 1 }}>
          <Typography variant="h3">Heading 3</Typography>
        </Box>
        <Box sx={{ my: 1 }}>
          <Typography variant="h4">Heading 4</Typography>
        </Box>
        <Box sx={{ my: 1 }}>
          <Typography variant="h5">Heading 5</Typography>
        </Box>
        <Box sx={{ my: 1 }}>
          <Typography variant="body1">Body 1</Typography>
        </Box>
        <Box sx={{ my: 1 }}>
          <Typography variant="body2">Body 2</Typography>
        </Box>
        <Box sx={{ my: 1 }}>
          <Typography variant="subtitle1">subtitle 1</Typography>
        </Box>
        <Box sx={{ my: 1 }}>
          <Typography variant="subtitle2">subtitle 2</Typography>
        </Box>
        <Box sx={{ my: 1 }}>
          <Typography variant="button">button</Typography>
        </Box>
        <Box sx={{ my: 1 }}>
          <Typography variant="caption">caption</Typography>
        </Box>
        <Box sx={{ my: 1 }}>
          <Typography variant="overline">overline</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Style;

export {
  DefaultButton,
  PrimaryButton,
  AccentButton,
  SecondaryButton,
  TextButton,
  StyledTextField,
};
