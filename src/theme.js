/* eslint-disable import/no-anonymous-default-export */
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export let Theme = createTheme({
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        },
      },
    },
  },

  typography: {
    fontFamily: "Inter",
    button: {
      textTransform: "none",
    },
  },
  palette: {
    mode: "dark",
    background: {
      default: "#fff",
    },
    color: "red",

    bgColor: "#262736",

    primary: {
      main: "#16a34a",
      light: "#16a34a",
      dark: "#16a34a",
      contrastText: "#F8F8F8",
    },
    secondary: {
      main: "#57534e",
      light: "#a8a29e",
      dark: "#374151",
      contrastText: "#1f2937",
    },
    error: {
      main: "red",
      light: "#1C1B26",
      dark: "#1C1B26",
      contrastText: "#EEEEEE",
    },
    info: {
      main: "#52525b",
      light: "#9ca3af",
      dark: "#9ca3af",
      contrastText: "#9ca3af",
    },
    warning: {
      main: "#4E526B",
      light: "#4E526B",
      dark: "#4E526B",
      contrastText: "#EEEEEE",
    },
  },
});

Theme = responsiveFontSizes(Theme);