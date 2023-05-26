import React from "react";
import { Container, Typography, Box, Button, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import { lightTheme, darkTheme } from "../../app/theme";

// Primary button
const PrimaryButton = styled(Button)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.dark}`,
  backgroundColor: `${theme.palette.primary.dark}`,
  color: `${theme.palette.primary.main}`,
  borderRadius: 20,
  fontWeight: 600,
  textTransform: "capitalize",
  margin: 4,
  padding: "10px 40px",
  "&:hover": {
    boxShadow: "1px 1px 2.5px rgba(0, 0, 0, 0.5)",
    backgroundColor: `${theme.palette.primary.dark}`,
    color: `${theme.palette.primary.main}`,
  },
  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },
}));

// Secondary button
const SecondaryButton = styled(Button)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.dark}`,
  color: `${theme.palette.primary.dark}`,
  borderRadius: 20,
  fontWeight: 500,
  textTransform: "capitalize",
  margin: 4,
  padding: "5px 20px",
  "&:hover": {
    boxShadow: "1px 1px 2.5px rgba(0, 0, 0, 0.5)",
    backgroundColor: `${theme.palette.primary.light}`,
    color: `${theme.palette.primary.dark}`,
  },
  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },
}));

// Text button
const TextButton = styled(Button)(({ theme }) => ({
  color: `${theme.palette.primary.dark}`,
  fontWeight: 400,
  textTransform: "capitalize",
  margin: 4,
  padding: "5px 10px",
  "&:hover": {
    backgroundColor: `${theme.palette.primary.light}`,
    color: `${theme.palette.primary.dark}`,
  },
  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },
}));

const Style = () => {
  return (
    <Container
      sx={{
        width: "100%",
      }}
    >
      <Box sx={{ my: 6 }}>
        <Typography variant="h2">Logos</Typography>
        <Divider sx={{ my: 2 }} />
        <TextButton>
          <img
            src="https://em-content.zobj.net/source/animated-noto-color-emoji/356/dizzy_1f4ab.gif"
            alt="Logo"
            width="30px"
          />
          <Typography variant="h1" sx={{ marginLeft: 2 }}>
            BabelGo
          </Typography>
        </TextButton>
      </Box>
      <Box sx={{ my: 6 }}>
        <Typography variant="h2">Buttons</Typography>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ my: 1 }}>
          <Typography variant="h4">Primary</Typography>
        </Box>
        <Box sx={{ my: 1 }}>
          <Typography variant="h4">Secondary</Typography>
        </Box>
        <Box sx={{ my: 1 }}>
          <Typography variant="h4">Text</Typography>
        </Box>
      </Box>
      <Box sx={{ my: 6 }}>
        <Typography variant="h2">Forms</Typography>
        <Divider sx={{ my: 2 }} />
      </Box>
      <Box sx={{ my: 6 }}>
        <Typography variant="h2">Ratings</Typography>
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
          <Typography variant="caption">caption</Typography>
        </Box>
        <Box sx={{ my: 1 }}>
          <Typography variant="overline">overline</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Style;

export { PrimaryButton, SecondaryButton, TextButton };
