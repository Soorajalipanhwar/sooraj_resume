import React from "react";
import { Box, Typography, Grid, Paper, useTheme } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import BuildIcon from "@mui/icons-material/Build";
import GitHubIcon from "@mui/icons-material/GitHub";
import JavascriptIcon from "@mui/icons-material/Javascript";

const skills = [
  {
    category: "Frontend",
    items: [
      {
        name: "JavaScript",
        icon: <JavascriptIcon sx={{ color: "#f7df1e" }} />,
      },
      {
        name: "React",
        icon: (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="React"
            width="24"
          />
        ),
      },
      {
        name: "TypeScript",
        icon: (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
            alt="TypeScript"
            width="24"
          />
        ),
      },
      {
        name: "Material-UI",
        icon: (
          <img
            src="https://mui.com/static/logo.png"
            alt="Material-UI"
            width="24"
          />
        ),
      },
    ],
    icon: <CodeIcon fontSize="large" sx={{ color: "#1976d2" }} />,
  },
  {
    category: "Backend",
    items: [
      {
        name: ".NET Framework",
        icon: (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg"
            alt=".NET Framework"
            width="24"
          />
        ),
      },
      {
        name: "PHP",
        icon: (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
            alt="PHP"
            width="24"
          />
        ),
      },
    ],
    icon: <BuildIcon fontSize="large" sx={{ color: "#388e3c" }} />,
  },
  {
    category: "Database",
    items: [
      {
        name: "SQL Server",
        icon: (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"
            alt="SQL Server"
            width="24"
          />
        ),
      },
      {
        name: "MySQL",
        icon: (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg"
            alt="MySQL"
            width="24"
          />
        ),
      },
    ],
    icon: <StorageIcon fontSize="large" sx={{ color: "#f57c00" }} />,
  },
  {
    category: "Programming Languages",
    items: [
      {
        name: "C#",
        icon: (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png"
            alt="C#"
            width="24"
          />
        ),
      },
      {
        name: "Python",
        icon: (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
            alt="Python"
            width="24"
          />
        ),
      },
      {
        name: "JavaScript",
        icon: <JavascriptIcon sx={{ color: "#f7df1e" }} />,
      },
      {
        name: "PHP",
        icon: (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
            alt="PHP"
            width="24"
          />
        ),
      },
    ],
    icon: <CodeIcon fontSize="large" sx={{ color: "#d32f2f" }} />,
  },
  {
    category: "Tools",
    items: [
      {
        name: "GitHub",
        icon: <GitHubIcon sx={{ color: "#f05032" }} />,
      },
      {
        name: "Vite",
        icon: <img src="https://vitejs.dev/logo.svg" alt="Vite" width="24" />,
      },
      {
        name: "Visual Studio",
        icon: (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/59/Visual_Studio_Icon_2019.svg"
            alt="Visual Studio"
            width="24"
          />
        ),
      },
    ],
    icon: <BuildIcon fontSize="large" sx={{ color: "#0288d1" }} />,
  },
];

const SkillsSection: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Row on desktop, column on mobile
        alignItems: "stretch",
        justifyContent: "center",
        px: 4,
        py: 6,
        background: isDark
          ? "linear-gradient(135deg, #1e1e2f, #121212)"
          : "linear-gradient(135deg, #f5f5f5, #ffffff)",
        gap: { xs: 4, md: 8 },
      }}
    >
      {/* Experience Column (first on mobile, right on desktop) */}
      <Box
        sx={{
          order: { xs: 1, md: 2 }, // Show first on mobile, second on desktop
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: "center",
          mt: { xs: 0, md: 0 },
        }}
      >
        <Typography
          variant="h5"
          fontWeight={700}
          gutterBottom
          sx={{
            color: isDark ? "#ffffff" : "#333333",
            textShadow: isDark ? "0px 2px 4px rgba(0,0,0,0.6)" : "none",
            textAlign: { xs: "center", md: "left" },
            width: "100%",
          }}
        >
          Experience
        </Typography>
        {/* Add your experience timeline/cards here */}
        <Box
          sx={{
            width: { xs: "100%", md: "90%" },
            minHeight: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-start" },
            border: "2px dashed #aaa",
            borderRadius: 3,
            color: "#aaa",
            p: 3,
            mt: 2,
          }}
        >
          {/* Example placeholder */}
          <Typography variant="body1">
            Your internship and job experiences will appear here.
          </Typography>
        </Box>
      </Box>

      {/* Skills Column (second on mobile, left on desktop) */}
      <Box
        sx={{
          order: { xs: 2, md: 1 }, // Show second on mobile, first on desktop
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "flex-start", md: "flex-start" }, // Align to left on all screens
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h5"
          fontWeight={700}
          gutterBottom
          sx={{
            color: isDark ? "#64b5f6" : "#1976d2", // More appealing blue for both themes
            textShadow: isDark ? "0px 2px 8px #0d47a1" : "none",
            textAlign: { xs: "left", md: "left" },
            width: "100%",
          }}
        >
          Skills & Tech Stack
        </Typography>
        {/* Stack all skill cards in a column */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "flex-start", md: "flex-start" }, // Align cards left
            gap: 2, // slightly less gap for compactness
            width: { xs: "100%", md: "90%" },
            mt: 2,
          }}
        >
          {skills.map((skill) => (
            <Paper
              key={skill.category}
              elevation={2}
              sx={{
                position: "relative",
                p: 0.7, // Even less padding for shorter cards
                borderRadius: 3,
                background: isDark ? "#23272b" : "#fff",
                textAlign: "center",
                width: { xs: "100%", md: 340 }, // Slightly wider for balance
                minHeight: 44, // Even shorter cards
                overflow: "visible",
                boxShadow: isDark
                  ? "0 2px 8px 0 rgba(25, 118, 210, 0.10)"
                  : "0 2px 8px 0 rgba(33, 150, 243, 0.07)",
                mb: 1,
                "&:hover .drawer": {
                  opacity: 1,
                  transform: "translateX(0)",
                  pointerEvents: "auto",
                },
                transition:
                  "box-shadow 0.3s, width 0.3s, min-height 0.3s, padding 0.3s",
              }}
            >
              {/* Skill Icon */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 0.5, // less margin for compactness
                }}
              >
                {skill.icon}
              </Box>
              {/* Category Text */}
              <Typography
                variant="subtitle1"
                fontWeight={700}
                sx={{
                  color: isDark ? "#4caf50" : "#1976d2", // Green on dark, blue on light
                  fontSize: 16,
                  letterSpacing: 0.5,
                  textShadow: isDark
                    ? "0px 1px 6px #000"
                    : "0px 1px 2px #90caf9",
                }}
              >
                {skill.category}
              </Typography>
              {/* Drawer slides out to the right */}
              <Box
                className="drawer"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: "100%",
                  width: 200,
                  background: isDark ? "#23272b" : "#fff",
                  borderRadius: "0 12px 12px 0",
                  boxShadow: 3,
                  zIndex: 10,
                  opacity: 0,
                  pointerEvents: "none",
                  transform: "translateX(-24px)",
                  transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  py: 2,
                  gap: 1,
                }}
              >
                {skill.items.map((item) => (
                  <Box
                    key={item.name}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      p: 1,
                      borderRadius: 2,
                      background: isDark
                        ? "rgba(255, 255, 255, 0.1)"
                        : "rgba(0, 0, 0, 0.05)",
                      width: "90%",
                      justifyContent: "flex-start",
                      transition:
                        "box-shadow 0.25s, transform 0.25s, background 0.25s",
                      cursor: "pointer",
                      "&:hover": {
                        boxShadow: isDark
                          ? "0 0 12px 2px #90caf9, 0 0 2px #fff"
                          : "0 0 12px 2px #1976d2, 0 0 2px #fff",
                        background: isDark
                          ? "rgba(30, 136, 229, 0.18)"
                          : "rgba(25, 118, 210, 0.08)",
                        transform: "scale(1.07)",
                      },
                    }}
                  >
                    {item.icon}
                    <Typography
                      variant="body2"
                      sx={{
                        color: isDark ? "#ffffff" : "#333333",
                        fontWeight: 500,
                        letterSpacing: 0.2,
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SkillsSection;
