import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#0C0C0C",
      light: "#313439",
      contrastText: "#fff",
    },
    secondary: {
      main: "#06044a",
      light: "#4c02f1",
      contrastText: "#000000",
    },
    text: {
      grayText: "#C9C8C8",
    },
    background: {
      paper: "#101010",
      default: "#101010",
    },
  },
});

theme.overrides = {
  MuiCssBaseline: {
    "@global": {
      body: {
        fontFamily: "Roboto",
        color: "#ffffff",
      },
    },
  },
};

theme = responsiveFontSizes(theme);

export default theme;
