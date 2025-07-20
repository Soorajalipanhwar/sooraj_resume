import React, { useState } from "react";
import {
  Box,
  Typography,
  Chip,
  Tooltip,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export interface TechTag {
  name: string;
  image: string;
  link?: string;
}

export interface ExperienceCardProps {
  company: string;
  role: string;
  description: string;
  logo: string;
  logoLink?: string;
  techTags: TechTag[];
  isDark?: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  role,
  description,
  logo,
  logoLink,
  techTags,
  isDark = false,
}) => {
  const [imgHover, setImgHover] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Paper
      elevation={16}
      sx={{
        width: "100%",
        borderRadius: 4,
        p: 2,
        background: isDark
          ? "linear-gradient(120deg, #23272b 80%, #263238 100%)"
          : "linear-gradient(120deg, #fafdff 80%, #e3f2fd 100%)",
        boxShadow: isDark ? "0 8px 40px 0 #1976d2bb" : "0 8px 40px 0 #90caf9bb",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        gap: 2,
        position: "relative",
        overflow: "hidden",
        border: isDark ? "2px solid #37474f" : "2px solid #e3f2fd",
        minHeight: 180,
        maxWidth: "100%",
        transition: "box-shadow 0.3s",
      }}
    >
      {/* Company & Role */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{
            color: isDark ? "#1976d2" : "#1976d2",
            fontSize: 22,
            letterSpacing: 0.5,
            mb: 0.5,
            textAlign: "center",
          }}
        >
          {company}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            color: isDark ? "rgba(200,200,200,0.6)" : "rgba(80,80,80,0.6)",
            fontWeight: 500,
            fontSize: 16,
            textAlign: "center",
          }}
        >
          {role}
        </Typography>
      </Box>
      {/* Description & Logo */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row", // Responsive direction
          width: "100%",
          alignItems: isMobile ? "stretch" : "center",
          gap: 2,
        }}
      >
        {/* Description */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="body2"
            sx={{
              color: isDark ? "#e0e0e0" : "#333",
              fontSize: 15,
              lineHeight: 1.7,
              textAlign: "justify",
              letterSpacing: 0.1,
            }}
          >
            {description}
          </Typography>
        </Box>
        {/* Logo */}
        <Box
          sx={{
            width: isMobile ? "100%" : "50%",
            height: 120,
            minWidth: isMobile ? "100px" : "120px",
            maxWidth: isMobile ? "100%" : "220px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#fff",
            borderRadius: 2,
            border: isDark ? "1.5px solid #37474f" : "1.5px solid #e3f2fd",
            boxShadow: isDark ? "0 1px 4px 0 #1976d2" : "0 1px 4px 0 #90caf9",
            ml: isMobile ? 0 : 2,
            mt: isMobile ? 2 : 0,
            transition: "transform 0.3s, box-shadow 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: isDark
                ? "0 4px 16px 0 #1976d2bb"
                : "0 4px 16px 0 #90caf9bb",
            },
            cursor: "pointer",
          }}
          onMouseEnter={() => setImgHover(true)}
          onMouseLeave={() => setImgHover(false)}
        >
          <a
            href={logoLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "100%",
              height: "100%",
              display: "block",
            }}
            tabIndex={0}
          >
            <img
              src={logo}
              alt={`${company} Logo`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
                background: "#fff",
                transition: "transform 0.3s",
                transform: imgHover ? "scale(1.08)" : "scale(1)",
              }}
            />
          </a>
        </Box>
      </Box>
      {/* Tech Tags */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          mt: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {techTags.map((tech) => (
          <Tooltip
            key={tech.name}
            title={
              <Box sx={{ p: 1 }}>
                <img
                  src={tech.image}
                  alt={tech.name}
                  style={{
                    width: 40,
                    height: 40,
                    objectFit: "contain",
                    marginBottom: 4,
                  }}
                />
                <Typography variant="caption">{tech.name}</Typography>
              </Box>
            }
            arrow
            placement="top"
          >
            <Chip
              label={tech.name}
              clickable={!!tech.link}
              component={tech.link ? "a" : "div"}
              href={tech.link}
              target="_blank"
              sx={{
                fontSize: "0.85rem",
                height: 28,
                bgcolor: isDark ? "#263238" : "#e3f2fd",
                color: isDark ? "#80cbc4" : "#1976d2",
                fontWeight: 600,
                border: isDark ? "1px solid #37474f" : "1px solid #bbdefb",
                transition: "box-shadow 0.2s, transform 0.2s, background 0.2s",
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
            />
          </Tooltip>
        ))}
      </Box>
    </Paper>
  );
};

export default ExperienceCard;
