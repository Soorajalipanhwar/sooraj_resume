import React from "react";
import { Box, Typography, Grid, Card, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { useThemeContext } from "../contexts/ThemeContext"; // Import your theme context

// Project Data
const projects = [
  {
    title: "OCR Text Recognition",
    description:
      "An OCR-based text recognition app that extracts text from images.",
    technologies: ["Python", "OpenCV", "Tesseract"],
    liveDemo: "https://soorajalipanhwar.github.io/My-Website/",
    github: "https://github.com/Soorajalipanhwar/OCR-Text-Recognition",
    imageUrl: "https://soorajalipanhwar.github.io/My-Website/assets/OCR.jpeg",
  },
  {
    title: "GameStore Web API",
    description:
      "This is a micrso-services based ASP.NET Core web API. created using EF Core and Dockerized SQl Server",
    technologies: ["React", "Bootstrap", "Material UI", "axios api"],
    github:
      "https://github.com/Soorajalipanhwar/GameStore_ASP.NET_Core_Web_API",
    imageUrl:
      "https://soorajalipanhwar.github.io/My-Website/assets/GameCatelogUI.png",
  },
  {
    title: "GameStore UI",
    description:
      "This is the React based UI of GameStoreAPI that I developed using ASP.NET Core.I have used React, TypeScript, Bootstrap and Material UI to develop the Game Catelog.",
    technologies: [".NET", "ASP.NET Core", "Entity Framwork", "SQL Server"],
    github:
      "https://github.com/Soorajalipanhwar/GameStore_ASP.NET_Core_Web_API",
    imageUrl:
      "https://soorajalipanhwar.github.io/My-Website/assets/GameStoreAPI.png",
  },
  {
    title: "Restaurant Management System",
    description:
      "This is a C# project for restaurant management System with MS SQL Database.",
    technologies: [".NET", "WinForms", "SQL Server"],
    github: "https://github.com/Soorajalipanhwar/Restaurant-Management-System",
    imageUrl: "https://soorajalipanhwar.github.io/My-Website/assets/RMS.jpeg",
  },
  {
    title: "Sentiment Analysis With Python and Flask",
    description:
      "My web app that performs the sentiment analysis on given text using python libraries",
    technologies: ["Python", "Flask", "ML"],
    liveDemo:
      "https://huggingface.co/spaces/SoorajAliPanhwar/Simple-Sentiment-Analysis-App",
    github:
      "https://github.com/Soorajalipanhwar/Sentiment-Analysis-App-With-Python-Flask",
    imageUrl:
      "https://soorajalipanhwar.github.io/My-Website/assets/page%20view.jpg",
  },
  {
    title: "Simple Text Editor Application",
    description:
      "This is a simple Text Editor with basic text editing and file handling functionalities. Visit My RMS repo on Github",
    technologies: [".NET", "WinForms", "SQL Server"],
    github: "https://github.com/Soorajalipanhwar/TextEditor",
    imageUrl:
      "https://soorajalipanhwar.github.io/My-Website/assets/texteditor.png",
  },
  {
    title: "A simple dino game in python",
    description:
      "This is a fun game project in python. It is a basic implementation of google's dino game",
    technologies: [".NET", "WinForms", "SQL Server"],
    github: "https://github.com/Soorajalipanhwar/dino_game",
    imageUrl:
      "https://soorajalipanhwar.github.io/My-Website/assets/dino%20game.png",
  },
];

// Reusable CustomCard Component
interface CustomCardProps {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  imageUrl?: string;
  liveDemo?: string; // Optional, only for OCR project
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  description,
  technologies,
  github,
  imageUrl,
  liveDemo,
}) => {
  const { mode } = useThemeContext(); // Access the current theme mode (dark or light)

  return (
    <Card
      sx={{
        position: "relative", // For positioning the hover layer
        height: "300px", // Adjust card height
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)", // Shadow for the card
        borderRadius: 2,
        background: "transparent", // Transparent background
        overflow: "hidden",
        cursor: "pointer", // Change cursor to pointer
        transition: "transform 0.3s ease, box-shadow 0.3s ease", // Hover effect
        "&:hover": {
          transform: "translateY(-8px)", // Lift the card on hover
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.6)", // Stronger shadow on hover
        },
      }}
    >
      {/* Image */}
      {imageUrl && (
        <Box
          component="img"
          src={imageUrl}
          alt={title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      )}

      {/* Hover Layer */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.7)", // Semi-transparent black background
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          opacity: 0, // Initially hidden
          transition: "opacity 0.3s ease", // Smooth fade-in effect
          "&:hover": {
            opacity: 1, // Show on hover
          },
        }}
      >
        {/* Title */}
        <Typography variant="h6" fontWeight={600} gutterBottom>
          {title}
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          color="inherit"
          gutterBottom
          sx={{
            textAlign: "center",
            px: 2, // Add padding for better alignment
          }}
        >
          {description}
        </Typography>

        {/* Technologies */}
        <Typography
          variant="body2"
          sx={{
            mt: 1,
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          Technologies: {technologies.join(", ")}
        </Typography>

        {/* Actions */}
        <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
          {liveDemo && (
            <Button
              size="small"
              color="primary"
              href={liveDemo}
              target="_blank"
              startIcon={<LaunchIcon />}
            >
              Live Demo
            </Button>
          )}
          {github && (
            <Button
              size="small"
              color="secondary"
              href={github}
              target="_blank"
              startIcon={<GitHubIcon />}
            >
              GitHub
            </Button>
          )}
        </Box>
      </Box>
    </Card>
  );
};

// Portfolio Section
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
        background: "transparent", // Transparent background
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

      {/* Cards in Grid Layout */}
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CustomCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PortfolioSection;
