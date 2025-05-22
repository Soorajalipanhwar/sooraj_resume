import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Button,
} from "@mui/material";
import ScrollProgressBar from "./components/ScrollProgressBar";
import MenuIcon from "@mui/icons-material/Menu";
import ThemeToggle from "./components/ThemeToggle";
import Home from "./pages/Home";
import About from "./pages/About";
import PortfolioSection from "./pages/Portfolio"; // Import PortfolioSection
import Contact from "./pages/Contact"; // Import Contact
import { useThemeContext } from "./contexts/ThemeContext";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const App: React.FC = () => {
  const { mode } = useThemeContext();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Box
      sx={{
        background:
          mode === "dark"
            ? "linear-gradient(120deg, #232526 60%, #1976d2 100%)"
            : "linear-gradient(120deg, #e3f2fd 60%, #1976d2 100%)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100vw", // <-- Use 100vw for full viewport width
        maxWidth: "100vw", // <-- Prevent overflow
        overflowX: "hidden", // <-- Hide horizontal scroll
        boxSizing: "border-box", // <-- Ensure padding/border don't cause overflow
        m: 0, // <-- Remove any default margin
        p: 0, // <-- Remove any default padding
      }}
    >
      {/* HEADER / NAVBAR */}
      <ScrollProgressBar />
      <AppBar
        position="sticky"
        color={mode === "dark" ? "default" : "inherit"}
        elevation={1}
        sx={{
          background: mode === "dark" ? "#232526" : "#fff",
          color: mode === "dark" ? "#fff" : "#232526",
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Button
              href="#home"
              color="inherit"
              sx={{ fontWeight: 700, fontSize: "1.2rem" }}
            >
              My Resume
            </Button>
          </Box>
          {/* Desktop Nav */}
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            {navLinks.map((link) => (
              <Button
                key={link.href}
                href={link.href}
                color="inherit"
                sx={{ mx: 1 }}
              >
                {link.label}
              </Button>
            ))}
            <ThemeToggle />
          </Box>
          {/* Mobile Nav */}
          <Box
            sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}
          >
            <ThemeToggle />
            <IconButton
              color="inherit"
              edge="end"
              onClick={() => setDrawerOpen(true)}
              aria-label="menu"
              sx={{ ml: 1 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Drawer for mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: { width: 220, background: mode === "dark" ? "#232526" : "#fff" },
        }}
      >
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton
                component="a"
                href={link.href}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText primary={link.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* MAIN CONTENT */}
      <Home />
      <About />
      <PortfolioSection /> {/* Render PortfolioSection */}
      <Contact />
      {/* <Contact /> */}
    </Box>
  );
};

export default App;
