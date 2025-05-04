import React from "react";
import { IconButton, useTheme, Tooltip } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useThemeContext } from "../contexts/ThemeContext";

const ThemeToggle: React.FC = () => {
  const theme = useTheme();
  const { toggleTheme } = useThemeContext();

  return (
    <Tooltip
      title={`Switch to ${
        theme.palette.mode === "light" ? "dark" : "light"
      } mode`}
    >
      <IconButton color="inherit" onClick={toggleTheme}>
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
