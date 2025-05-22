import React from "react";
import { Box, Typography, Paper, useTheme } from "@mui/material";
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
    <section id="skills-experience">
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
          py: { xs: 6, md: 10 },
        }}
      >
        <Paper
          elevation={10}
          sx={{
            maxWidth: 1100,
            width: "100%",
            minHeight: { xs: "90vh", md: "60vh" },
            p: { xs: 3, sm: 4, md: 4 },
            borderRadius: 6,
            background: isDark
              ? "rgba(30, 30, 40, 0.92)"
              : "rgba(255,255,255,0.98)",
            boxShadow: isDark
              ? "0 8px 32px 0 rgba(0,0,0,0.7)"
              : "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
            backdropFilter: "blur(8px)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, md: 4 },
            alignItems: "flex-start",
            justifyContent: "space-between",
            transition:
              "box-shadow 0.4s cubic-bezier(.4,0,.2,1), background 0.4s cubic-bezier(.4,0,.2,1)",
            "&:hover": {
              boxShadow: "0 12px 48px 0 #1976d2aa",
            },
          }}
        >
          {/* Left: Experience */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-end" },
              justifyContent: "center",
              pr: { xs: 0, md: 2 },
              textAlign: { xs: "center", md: "right" },
              width: "100%",
            }}
          >
            {/* Experience Heading */}
            <Typography
              variant="h4"
              fontWeight={800}
              sx={{
                color: isDark ? "#64b5f6" : "#1976d2",
                mb: 3,
                letterSpacing: 1,
                textAlign: "center", // Centered on all screens
                width: "100%",
              }}
            >
              Experience
            </Typography>
            <Paper
              elevation={16}
              sx={{
                width: { xs: "100%", md: 600 },
                maxWidth: "100%",
                borderRadius: 5,
                p: { xs: 2, md: 3 }, // Reduced padding
                background: isDark
                  ? "linear-gradient(120deg, #23272b 80%, #263238 100%)"
                  : "linear-gradient(120deg, #fafdff 80%, #e3f2fd 100%)",
                boxShadow: isDark
                  ? "0 8px 40px 0 #1976d2bb"
                  : "0 8px 40px 0 #90caf9bb",
                mb: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 2,
                position: "relative",
                overflow: "hidden",
                border: isDark ? "2px solid #37474f" : "2px solid #e3f2fd",
                transition: "transform 0.3s, box-shadow 0.3s",
                minHeight: { xs: 260, md: 220 }, // Reduced minHeight
                "&:hover": {
                  transform: "translateY(-6px) scale(1.025)",
                  boxShadow: isDark
                    ? "0 16px 56px 0 #1976d2ee"
                    : "0 16px 56px 0 #1976d2aa",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{
                    color: isDark ? "#64b5f6" : "#1976d2",
                    letterSpacing: 0.5,
                    mr: 2,
                    fontSize: 22,
                  }}
                >
                  .NET Developer Intern
                </Typography>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{
                    color: isDark ? "#b0bec5" : "#607d8b",
                    fontWeight: 600,
                    fontSize: 15,
                    letterSpacing: 0.2,
                  }}
                >
                  Imagyn Technologies
                </Typography>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{
                    ml: 2,
                    color: isDark ? "#b0bec5" : "#607d8b",
                    fontWeight: 500,
                    fontSize: 14,
                  }}
                >
                  (Mar – Jun 2025)
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  color: isDark ? "#e0e0e0" : "#333",
                  mb: 2,
                  fontSize: 16,
                  lineHeight: 1.8,
                  letterSpacing: 0.1,
                }}
              >
                .NET Core development, C# programming, and SQL Server database.
                <br />
                Developed scalable, fullstack web applications using ASP.NET
                MVC.
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.2, mb: 2 }}>
                {[".NET Core", "SQL Server", "JavaScript", "Bootstrap"].map(
                  (tech) => (
                    <Box
                      key={tech}
                      component="span"
                      sx={{
                        display: "inline-block",
                        px: 1.7,
                        py: 0.7,
                        fontSize: 14,
                        borderRadius: 2,
                        bgcolor: isDark ? "#263238" : "#e3f2fd",
                        color: isDark ? "#80cbc4" : "#1976d2",
                        fontWeight: 600,
                        letterSpacing: 0.2,
                        boxShadow: isDark
                          ? "0 1px 4px 0 #1976d2"
                          : "0 1px 4px 0 #90caf9",
                        border: isDark
                          ? "1px solid #37474f"
                          : "1px solid #bbdefb",
                        transition: "box-shadow 0.2s",
                        "&:hover": {
                          boxShadow: "0 0 12px 2px #1976d2, 0 0 2px #fff",
                          background: isDark
                            ? "rgba(30, 136, 229, 0.18)"
                            : "rgba(25, 118, 210, 0.08)",
                        },
                      }}
                    >
                      {tech}
                    </Box>
                  )
                )}
              </Box>
              {/* Company Section: Heading on top, then logo, then description */}
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mt: 2,
                  mb: 0,
                  gap: 1,
                  flex: 1,
                  minHeight: 0,
                }}
              >
                {/* Heading always on top */}
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{
                    color: isDark ? "#64b5f6" : "#1976d2",
                    letterSpacing: 0.5,
                    textAlign: "center",
                    fontSize: 18,
                    mb: 0.5,
                    width: "100%",
                    lineHeight: 1.2,
                    zIndex: 2,
                  }}
                >
                  Imagyn Technologies
                </Typography>
                {/* Full-section Logo Image */}
                <Box
                  sx={{
                    width: "100%",
                    flex: 1,
                    minHeight: 0,
                    height: "100%",
                    borderRadius: 2,
                    overflow: "hidden",
                    background: "#fff",
                    border: isDark
                      ? "1.5px solid #37474f"
                      : "1.5px solid #e3f2fd",
                    boxShadow: isDark
                      ? "0 1px 4px 0 #1976d2"
                      : "0 1px 4px 0 #90caf9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 0.5,
                  }}
                >
                  <a
                    href="https://imagyntechnologies.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ width: "100%", height: "100%", display: "block" }}
                    tabIndex={0}
                  >
                    <img
                      src="https://imagyntechnologies.com/images/imagyn-logo.png"
                      alt="Imagyn Technologies Logo"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        display: "block",
                        background: "#fff",
                      }}
                    />
                  </a>
                </Box>
              </Box>
            </Paper>
          </Box>
          {/* Right: Skills */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "flex-start", md: "flex-start" },
              justifyContent: "center",
              width: "100%",
            }}
          >
            {/* Skills Heading */}
            <Typography
              variant="h4"
              fontWeight={800}
              gutterBottom
              sx={{
                color: isDark ? "#64b5f6" : "#1976d2",
                textShadow: isDark ? "0px 2px 8px #0d47a1" : "none",
                textAlign: { xs: "left", md: "left" },
                width: "100%",
                mb: 3,
                letterSpacing: 1,
              }}
            >
              Skills & Tech Stack
            </Typography>
            {/* Stack all skill cards in a column */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "flex-start", md: "flex-start" },
                gap: 2,
                width: { xs: "100%", md: "90%" },
                mt: 2,
              }}
            >
              {skills.map((skill, idx) => (
                <Paper
                  key={skill.category}
                  elevation={2}
                  sx={{
                    position: "relative",
                    p: 0.7,
                    borderRadius: 3,
                    background: isDark ? "#23272b" : "#fff",
                    textAlign: "center",
                    width: { xs: "100%", md: 340 },
                    minHeight: 44,
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
                      mb: 0.5,
                    }}
                  >
                    {skill.icon}
                  </Box>
                  {/* Category Text */}
                  <Typography
                    variant="subtitle1"
                    fontWeight={700}
                    sx={{
                      color: isDark ? "#4caf50" : "#1976d2",
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
                      paddingLeft: 2,
                      top: idx === skills.length - 1 ? "auto" : 0,
                      bottom: idx === skills.length - 1 ? 0 : "auto",
                      left: "100%",
                      width: 200,
                      // Remove background color so only skills are visible
                      background: "none",
                      borderRadius: "12px",
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
        </Paper>
      </Box>
    </section>
  );
};

export default SkillsSection;
