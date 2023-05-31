import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#006398",
      light: "#cde5ff",
      dark: "#001d31",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f9d8ff",
      light: "#ffdea4",
      dark: "#261900",
      contrastText: "#330045",
    },
    error: {
      main: "#ba1a1a",
      light: "#ffdad6",
      dark: "#410002",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#191c1e",
    },
    background: {
      default: "#FFFFFF",
    },
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: "Roboto",
    h1: {
      fontSize: "3.75rem",
      fontWeight: "lighter",
      letterSpacing: -1.5,
      "@media (min-width:600px)": {
        fontSize: "6rem",
      },
    },
    h2: {
      fontSize: "3rem",
      fontWeight: "lighter",
      letterSpacing: -0.5,
      "@media (min-width:600px)": {
        fontSize: "3.75rem",
      },
    },
    h3: {
      fontSize: "2.125rem",
      fontWeight: "regular",
      letterSpacing: 0,
      "@media (min-width:600px)": {
        fontSize: "3rem",
      },
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: "regular",
      letterSpacing: 0.25,
      "@media (min-width:600px)": {
        fontSize: "2.125rem",
      },
    },
    h5: {
      fontSize: "1rem",
      fontWeight: "medium",
      letterSpacing: 0,
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    body1: {
      fontSize: "0.875rem",
      fontWeight: "regular",
      letterSpacing: 0.5,
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
    },
    body2: {
      fontSize: "0.75rem",
      fontWeight: "regular",
      letterSpacing: 0.25,
      "@media (min-width:600px)": {
        fontSize: "0.875rem",
      },
    },
    subtitle1: {
      fontSize: "0.75rem",
      fontWeight: "regular",
      fontStyle: "italic",
      letterSpacing: 0.15,
      "@media (min-width:600px)": {
        fontSize: "0.875rem",
      },
    },
    subtitle2: {
      fontSize: "0.625rem",
      fontWeight: "medium",
      fontStyle: "italic",
      letterSpacing: 0.15,
      "@media (min-width:600px)": {
        fontSize: "0.75rem",
      },
    },
    button: {
      fontSize: "0.75rem",
      fontWeight: "medium",
      letterSpacing: 1.25,
      "@media (min-width:600px)": {
        fontSize: "0.875rem",
      },
    },
    caption: {
      fontSize: "0.625rem",
      fontWeight: "regular",
      letterSpacing: 0.4,
      "@media (min-width:600px)": {
        fontSize: "0.75rem",
      },
    },
    overline: {
      fontSize: "0.6rem",
      fontWeight: "regular",
      textTransform: "uppercase",
      letterSpacing: 1.5,
      "@media (min-width:600px)": {
        fontSize: "0.625rem",
      },
    },
  },
});

lightTheme = responsiveFontSizes(lightTheme);

let darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#93ccff",
      light: "#004b74",
      dark: "#cde5ff",
      contrastText: "#003351",
    },
    secondary: {
      main: "#4d1661",
      light: "#5d4200",
      dark: "#ffdea4",
      contrastText: "#eeb1ff",
    },
    error: {
      main: "#ffb4ab",
      light: "#93000a",
      dark: "#ffdad6",
      contrastText: "#690005",
    },
    text: {
      primary: "#FFFFFF",
    },
    background: {
      default: "#191c1e",
    },
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: "Roboto",
    h1: {
      fontSize: "3.75rem",
      fontWeight: "lighter",
      letterSpacing: -1.5,
      "@media (min-width:600px)": {
        fontSize: "6rem",
      },
    },
    h2: {
      fontSize: "3rem",
      fontWeight: "lighter",
      letterSpacing: -0.5,
      "@media (min-width:600px)": {
        fontSize: "3.75rem",
      },
    },
    h3: {
      fontSize: "2.125rem",
      fontWeight: "regular",
      letterSpacing: 0,
      "@media (min-width:600px)": {
        fontSize: "3rem",
      },
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: "regular",
      letterSpacing: 0.25,
      "@media (min-width:600px)": {
        fontSize: "2.125rem",
      },
    },
    h5: {
      fontSize: "1rem",
      fontWeight: "medium",
      letterSpacing: 0,
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    body1: {
      fontSize: "0.875rem",
      fontWeight: "regular",
      letterSpacing: 0.5,
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
    },
    body2: {
      fontSize: "0.75rem",
      fontWeight: "regular",
      letterSpacing: 0.25,
      "@media (min-width:600px)": {
        fontSize: "0.875rem",
      },
    },
    subtitle1: {
      fontSize: "0.75rem",
      fontWeight: "regular",
      fontStyle: "italic",
      letterSpacing: 0.15,
      "@media (min-width:600px)": {
        fontSize: "0.875rem",
      },
    },
    subtitle2: {
      fontSize: "0.625rem",
      fontWeight: "medium",
      fontStyle: "italic",
      letterSpacing: 0.15,
      "@media (min-width:600px)": {
        fontSize: "0.75rem",
      },
    },
    button: {
      fontSize: "0.75rem",
      fontWeight: "medium",
      letterSpacing: 1.25,
      "@media (min-width:600px)": {
        fontSize: "0.875rem",
      },
    },
    caption: {
      fontSize: "0.625rem",
      fontWeight: "regular",
      letterSpacing: 0.4,
      "@media (min-width:600px)": {
        fontSize: "0.75rem",
      },
    },
    overline: {
      fontSize: "0.6rem",
      fontWeight: "regular",
      textTransform: "uppercase",
      letterSpacing: 1.5,
      "@media (min-width:600px)": {
        fontSize: "0.625rem",
      },
    },
  },
});

darkTheme = responsiveFontSizes(darkTheme);

export { lightTheme, darkTheme };
