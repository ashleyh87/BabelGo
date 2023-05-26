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
    borderRadius: 10,
  },
  typography: {
    fontFamily: "Helvetica",
    h1: {
      fontSize: "2rem",
      fontWeight: "bold",
      "@media (min-width:600px)": {
        fontSize: "3rem",
      },
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      "@media (min-width:600px)": {
        fontSize: "2rem",
      },
    },
    h3: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    h4: {
      fontSize: "1rem",
      fontWeight: "bold",
      "@media (min-width:600px)": {
        fontSize: "1.2rem",
      },
    },
    h5: {
      fontSize: "0.875rem",
      fontWeight: "bold",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
    },
    body1: {
      fontSize: "1rem",
      "@media (min-width:600px)": {
        fontSize: "1.2rem",
      },
    },
    body2: {
      fontSize: "0.875rem",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
    },
    subtitle1: {
      fontSize: "1rem",
      fontStyle: "italic",
      "@media (min-width:600px)": {
        fontSize: "1.2rem",
      },
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontStyle: "italic",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
    },
    caption: {
      fontSize: "0.75rem",
      "@media (min-width:600px)": {
        fontSize: "0.875rem",
      },
    },
    overline: {
      fontSize: "0.75rem",
      textTransform: "uppercase",
      "@media (min-width:600px)": {
        fontSize: "0.875rem",
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
    fontFamily: "Helvetica",
    h1: {
      fontSize: "2rem",
      fontWeight: "bold",
      "@media (min-width:600px)": {
        fontSize: "3rem",
      },
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      "@media (min-width:600px)": {
        fontSize: "2rem",
      },
    },
    h3: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    h4: {
      fontSize: "1rem",
      fontWeight: "bold",
      "@media (min-width:600px)": {
        fontSize: "1.2rem",
      },
    },
    h5: {
      fontSize: "0.875rem",
      fontWeight: "bold",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
    },
    body1: {
      fontSize: "1rem",
      "@media (min-width:600px)": {
        fontSize: "1.2rem",
      },
    },
    body2: {
      fontSize: "0.875rem",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
    },
    subtitle1: {
      fontSize: "1rem",
      fontStyle: "italic",
      "@media (min-width:600px)": {
        fontSize: "1.2rem",
      },
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontStyle: "italic",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
    },
    caption: {
      fontSize: "0.75rem",
      "@media (min-width:600px)": {
        fontSize: "0.875rem",
      },
    },
    overline: {
      fontSize: "0.75rem",
      textTransform: "uppercase",
      "@media (min-width:600px)": {
        fontSize: "0.875rem",
      },
    },
  },
});

darkTheme = responsiveFontSizes(darkTheme);

export { lightTheme, darkTheme };
