import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { useThemeContext } from "../contexts/ThemeContext"; // Import your theme context

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my skills and projects.",
    technologies: ["React", "Material-UI", "TypeScript"],
    liveDemo: "https://your-portfolio.com",
    github: "https://github.com/your-username/portfolio",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with user authentication and payment integration.",
    technologies: ["Node.js", "Express", "MongoDB", "React"],
    liveDemo: "https://ecommerce-demo.com",
    github: "https://github.com/your-username/ecommerce-platform",
  },
  {
    title: "Task Manager App",
    description: "A task management app to organize and track daily tasks.",
    technologies: ["React", "Redux", "Firebase"],
    liveDemo: "https://task-manager.com",
    github: "https://github.com/your-username/task-manager",
  },
];

const PortfolioSection: React.FC = () => {
  const { mode } = useThemeContext(); // Access the current theme mode (dark or light)

  return (
    <Box
      id="portfolio"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 4,
        py: 6,
        background:
          mode === "dark"
            ? "linear-gradient(120deg, #232526 60%, #1976d2 100%)"
            : "linear-gradient(120deg, #e3f2fd 60%, #1976d2 100%)", // Same background as Home and About
        color: mode === "dark" ? "#ffffff" : "#333333", // Adjust text color based on theme
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h5"
        fontWeight={700}
        gutterBottom
        sx={{
          textShadow: mode === "dark" ? "0px 2px 4px rgba(0,0,0,0.6)" : "none",
        }}
      >
        Portfolio
      </Typography>

      {/* Projects Grid */}
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow:
                  mode === "dark"
                    ? "0 4px 12px rgba(0, 0, 0, 0.4)"
                    : "0 4px 12px rgba(0, 0, 0, 0.1)", // Adjust shadow based on theme
                borderRadius: 2,
                background: mode === "dark" ? "#2e2e2e" : "#ffffff", // Card background
                color: mode === "dark" ? "#ffffff" : "#333333", // Card text color
              }}
            >
              <CardContent>
                {/* Project Title */}
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {project.title}
                </Typography>

                {/* Project Description */}
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {project.description}
                </Typography>

                {/* Technologies Used */}
                <Typography
                  variant="body2"
                  sx={{
                    mt: 2,
                    fontWeight: 500,
                    color: mode === "dark" ? "#90caf9" : "#1976d2", // Adjust color for technologies
                  }}
                >
                  Technologies: {project.technologies.join(", ")}
                </Typography>
              </CardContent>

              {/* Actions */}
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href={project.liveDemo}
                  target="_blank"
                  startIcon={<LaunchIcon />}
                >
                  Live Demo
                </Button>
                <Button
                  size="small"
                  color="secondary"
                  href={project.github}
                  target="_blank"
                  startIcon={<GitHubIcon />}
                >
                  GitHub
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PortfolioSection;
