import React from "react";
import { Box, Typography, Grid, Paper, useTheme } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import BuildIcon from "@mui/icons-material/Build";
import DataUsageIcon from "@mui/icons-material/DataUsage";
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
        name: "Node.js",
        icon: (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
            alt="Node.js"
            width="24"
          />
        ),
      },
      {
        name: "Express",
        icon: (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
            alt="Express"
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
        name: "MongoDB",
        icon: (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
            alt="MongoDB"
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
        name: "Webpack",
        icon: (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/94/Webpack.svg"
            alt="Webpack"
            width="24"
          />
        ),
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
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 4,
        py: 6,
        background: isDark
          ? "linear-gradient(135deg, #1e1e2f, #121212)"
          : "linear-gradient(135deg, #f5f5f5, #ffffff)",
      }}
    >
      <Typography
        variant="h5"
        fontWeight={700}
        gutterBottom
        sx={{
          color: isDark ? "#ffffff" : "#333333",
          textShadow: isDark ? "0px 2px 4px rgba(0,0,0,0.6)" : "none",
        }}
      >
        Skills & Tech Stack
      </Typography>
      <Grid container spacing={3}>
        {skills.map((skill) => (
          <Grid item xs={12} sm={6} md={4} key={skill.category}>
            <Paper
              elevation={4}
              sx={{
                p: 2,
                borderRadius: 4,
                background: isDark
                  ? "linear-gradient(135deg, #2a2a3b, #1e1e2f)"
                  : "linear-gradient(135deg, #ffffff, #f5f5f5)",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                width: 240,
                height: 360,
                overflow: "hidden",
                position: "relative",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.2)",
                },
              }}
              aria-label={`Skill category: ${skill.category}`}
            >
              {/* Icon */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                {skill.icon}
              </Box>
              {/* Category Title */}
              <Typography
                variant="subtitle1"
                fontWeight={600}
                gutterBottom
                sx={{
                  color: isDark ? "#ffffff" : "#333333",
                  textAlign: "center",
                  wordWrap: "break-word",
                  whiteSpace: "normal",
                }}
              >
                {skill.category}
              </Typography>
              {/* Skill Items */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
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
                      width: "100%",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                    <Typography
                      variant="body2"
                      sx={{
                        color: isDark ? "#ffffff" : "#333333",
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SkillsSection;
