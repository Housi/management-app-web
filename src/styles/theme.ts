import { colors, createMuiTheme } from "@material-ui/core";
import { softShadows } from "./shadows";
import typography from "./typography";
import { TextField } from "@components/ui";

export const theme = createMuiTheme({
  typography,
  overrides: {
    MuiInputBase: {
      input: {
        "&::placeholder": {
          opacity: 1,
          color: colors.blueGrey[600],
        },
      },
    },
    MuiLinearProgress: {
      root: {
        borderRadius: 3,
        overflow: "hidden",
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 32,
      },
    },
    MuiChip: {
      root: {
        backgroundColor: "rgba(0,0,0,0.075)",
      },
    },
    MuiButton: {
      root: {
        borderRadius: 50,
      },
    },
  },
  palette: {
    type: "light",
    background: {
      default: colors.common.white,
      paper: colors.common.white,
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
    },
    action: {
      active: colors.blueGrey[600],
    },

    primary: {
      main: "#52CAF5",
    },
    secondary: {
      main: "##f57d52",
    },
  },
  shape: {
    borderRadius: 4,
  },
  props: {
    MuiButton: {
      variant: "contained",
      color: "primary",
    },
    MuiTextField: {
      placeholder: "Enter",
      variant: "outlined",
      margin: "normal",
    },
  },
});
