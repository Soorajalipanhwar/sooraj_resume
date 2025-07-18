import React from "react";
import {
  Box,
  Typography,
  Paper,
  useTheme,
  useMediaQuery,
  Card,
  Chip,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import BuildIcon from "@mui/icons-material/Build";
import GitHubIcon from "@mui/icons-material/GitHub";
import JavascriptIcon from "@mui/icons-material/Javascript";
import ExperienceCard from "../components/ExperienceCard";

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
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
              variant="h5"
              fontWeight={700}
              gutterBottom
              sx={{
                color: isDark ? "#fff" : "#111",
                fontFamily: "'Montserrat', 'Roboto', Arial, sans-serif",
                fontSize: { xs: 20, sm: 22 },
                letterSpacing: 0.5,
                mb: 1.5,
                textTransform: "uppercase",
                lineHeight: 1.2,
                textAlign: { xs: "center", md: "center" },
                width: "100%",
              }}
            >
              Experience
            </Typography>

            {/* ========== MODIFIED EXPERIENCE CARDS FOR MOBILE ========== */}
            {isMobile ? (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  mb: 3,
                }}
              >
                <ExperienceCard
                  company="Imagyn Technologies"
                  role=".NET Developer Intern"
                  description=".NET Core development, C# programming, and SQL Server database. Developed scalable, fullstack web applications using ASP.NET MVC."
                  logo="https://imagyntechnologies.com/images/imagyn-logo.png"
                  logoLink="https://imagyntechnologies.com/"
                  techTags={[
                    {
                      name: ".NET Core",
                      image:
                        "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg",
                      link: "https://dotnet.microsoft.com/",
                    },
                    {
                      name: "SQL Server",
                      image:
                        "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
                      link: "https://www.microsoft.com/en-us/sql-server",
                    },
                    {
                      name: "JavaScript",
                      image:
                        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
                      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                    },
                    {
                      name: "Bootstrap",
                      image:
                        "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
                      link: "https://getbootstrap.com/",
                    },
                  ]}
                  isDark={isDark}
                />
                <ExperienceCard
                  company="Synergates Business Solutions"
                  role="Jr. .NET Developer"
                  description="Working on enterprise .NET solutions, REST APIs, and business automation. Collaborating with cross-functional teams to deliver robust software for clients."
                  logo="https://synergates.com/wp-content/uploads/2023/02/Group.png"
                  logoLink="https://synergates.com/"
                  techTags={[
                    {
                      name: ".NET Core",
                      image:
                        "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg",
                      link: "https://dotnet.microsoft.com/",
                    },
                    {
                      name: "REST API",
                      image:
                        "https://upload.wikimedia.org/wikipedia/commons/c/cf/RestApi.png",
                      link: "https://restfulapi.net/",
                    },
                    {
                      name: "SQL Server",
                      image:
                        "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
                      link: "https://www.microsoft.com/en-us/sql-server",
                    },
                    {
                      name: "Azure",
                      image:
                        "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
                      link: "https://azure.microsoft.com/",
                    },
                  ]}
                  isDark={isDark}
                />
              </Box>
            ) : (
              // DESKTOP VIEW: Two experience cards stacked vertically
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column", // <-- changed from "row" to "column"
                  gap: 2,
                  mb: 3,
                  justifyContent: "center",
                  alignItems: "stretch",
                }}
              >
                {/* Imagyn Technologies */}
                <Paper
                  elevation={16}
                  sx={{
                    flex: 1,
                    minWidth: 0,
                    borderRadius: 4,
                    textAlign: "center",
                    p: 2,
                    background: isDark
                      ? "linear-gradient(120deg, #23272b 80%, #263238 100%)"
                      : "linear-gradient(120deg, #fafdff 80%, #e3f2fd 100%)",
                    boxShadow: isDark
                      ? "0 8px 40px 0 #1976d2bb"
                      : "0 8px 40px 0 #90caf9bb",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                    gap: 1,
                    position: "relative",
                    overflow: "hidden",
                    border: isDark ? "2px solid #37474f" : "2px solid #e3f2fd",
                    minHeight: 180,
                    maxWidth: "100%",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    {/* Left: Text */}
                    <Box
                      sx={{
                        flex: 1,
                        pr: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        fontWeight={700}
                        sx={{
                          color: isDark ? "#64b5f6" : "#1976d2",
                          letterSpacing: 0.5,
                          fontSize: 16,
                          mb: 1,
                        }}
                      >
                        Imagyn Technologies
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: isDark ? "#b0bec5" : "#607d8b",
                          fontWeight: 600,
                          fontSize: 14,
                          mb: 1,
                        }}
                      >
                        .NET Developer
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: isDark ? "#e0e0e0" : "#333",
                          fontSize: 14,
                          lineHeight: 1.6,
                          letterSpacing: 0.1,
                        }}
                      >
                        .NET Core development, C# programming, and SQL Server
                        database. Developed scalable, fullstack web applications
                        using ASP.NET MVC.
                      </Typography>
                    </Box>
                    {/* Right: Image */}
                    <Box
                      sx={{
                        width: "50%",
                        height: 120,
                        minWidth: 120,
                        maxWidth: 220,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#fff",
                        borderRadius: 2,
                        border: isDark
                          ? "1.5px solid #37474f"
                          : "1.5px solid #e3f2fd",
                        boxShadow: isDark
                          ? "0 1px 4px 0 #1976d2"
                          : "0 1px 4px 0 #90caf9",
                        ml: 2,
                      }}
                    >
                      <a
                        href="https://imagyntechnologies.com/"
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
                  {/* Tags row below text and image */}
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
                    {[
                      ".NET Core",
                      "SQL Server",
                      "Identity Framework",
                      "JavaScript",
                    ].map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          fontSize: "0.8rem",
                          height: 28,
                          bgcolor: isDark ? "#263238" : "#e3f2fd",
                          color: isDark ? "#80cbc4" : "#1976d2",
                          fontWeight: 600,
                          border: isDark
                            ? "1px solid #37474f"
                            : "1px solid #bbdefb",
                        }}
                      />
                    ))}
                  </Box>
                </Paper>
                {/* Synergates Business Solutions */}
                <Paper
                  elevation={16}
                  sx={{
                    flex: 1,
                    minWidth: 0,
                    borderRadius: 4,
                    textAlign: "center",
                    p: 2,
                    background: isDark
                      ? "linear-gradient(120deg, #23272b 80%, #263238 100%)"
                      : "linear-gradient(120deg, #fafdff 80%, #e3f2fd 100%)",
                    boxShadow: isDark
                      ? "0 8px 40px 0 #1976d2bb"
                      : "0 8px 40px 0 #90caf9bb",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                    gap: 1,
                    position: "relative",
                    overflow: "hidden",
                    border: isDark ? "2px solid #37474f" : "2px solid #e3f2fd",
                    minHeight: 180,
                    maxWidth: "100%",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    {/* Left: Text */}
                    <Box
                      sx={{
                        flex: 1,
                        pr: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        fontWeight={700}
                        sx={{
                          color: isDark ? "#64b5f6" : "#1976d2",
                          letterSpacing: 0.5,
                          fontSize: 16,
                          mb: 1,
                        }}
                      >
                        Synergates Business Solutions
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: isDark ? "#b0bec5" : "#607d8b",
                          fontWeight: 600,
                          fontSize: 14,
                          mb: 1,
                        }}
                      >
                        Jr. .NET Developer
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: isDark ? "#e0e0e0" : "#333",
                          fontSize: 14,
                          lineHeight: 1.6,
                          letterSpacing: 0.1,
                        }}
                      >
                        Working on enterprise .NET solutions, REST APIs, and
                        business automation. Collaborating with cross-functional
                        teams to deliver robust software for clients.
                      </Typography>
                    </Box>
                    {/* Right: Image */}
                    <Box
                      sx={{
                        width: "50%",
                        height: 120,
                        minWidth: 120,
                        maxWidth: 220,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#fff",
                        borderRadius: 2,
                        border: isDark
                          ? "1.5px solid #37474f"
                          : "1.5px solid #e3f2fd",
                        boxShadow: isDark
                          ? "0 1px 4px 0 #1976d2"
                          : "0 1px 4px 0 #90caf9",
                        ml: 2,
                      }}
                    >
                      <a
                        href="https://synergates.com/"
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
                          src="https://synergates.com/wp-content/uploads/2023/02/Group.png"
                          alt="Synergates Business Solutions Logo"
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
                  {/* Tags row below text and image */}
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
                    {[
                      ".NET Core",
                      "SQL Server",
                      "Identity Framework",
                      "PULSE",
                    ].map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          fontSize: "0.8rem",
                          height: 28,
                          bgcolor: isDark ? "#263238" : "#e3f2fd",
                          color: isDark ? "#80cbc4" : "#1976d2",
                          fontWeight: 600,
                          border: isDark
                            ? "1px solid #37474f"
                            : "1px solid #bbdefb",
                        }}
                      />
                    ))}
                  </Box>
                </Paper>
              </Box>
            )}
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
            <Typography
              variant="h5"
              fontWeight={700}
              gutterBottom
              sx={{
                color: isDark ? "#fff" : "#111",
                fontFamily: "'Montserrat', 'Roboto', Arial, sans-serif",
                fontSize: { xs: 20, sm: 22 },
                letterSpacing: 0.5,
                mb: 1.5,
                textTransform: "uppercase",
                lineHeight: 1.2,
                textAlign: { xs: "left", md: "left" },
                width: "100%",
              }}
            >
              Skills & Tech Stack
            </Typography>

            {/* Mobile Skills Cards (unchanged from your previous version) */}
            {isMobile ? (
              <Box
                sx={{
                  width: "100%",
                  display: "grid",
                  gap: 2,
                  gridTemplateColumns: "1fr",
                }}
              >
                {skills.map((skill) => (
                  <Card
                    key={skill.category}
                    elevation={0}
                    sx={{
                      borderRadius: 3,
                      background: isDark
                        ? "rgba(30, 30, 40, 0.7)"
                        : "rgba(255, 255, 255, 0.9)",
                      boxShadow: isDark
                        ? "0 4px 20px rgba(0, 0, 0, 0.25)"
                        : "0 4px 20px rgba(0, 0, 0, 0.08)",
                      border: `1px solid ${
                        isDark
                          ? "rgba(255, 255, 255, 0.1)"
                          : "rgba(0, 0, 0, 0.05)"
                      }`,
                      overflow: "hidden",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: isDark
                          ? "0 6px 24px rgba(0, 0, 0, 0.35)"
                          : "0 6px 24px rgba(0, 0, 0, 0.12)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        p: 2,
                        background: isDark
                          ? "linear-gradient(90deg, rgba(25, 118, 210, 0.15) 0%, transparent 100%)"
                          : "linear-gradient(90deg, rgba(25, 118, 210, 0.08) 0%, transparent 100%)",
                        borderBottom: `1px solid ${
                          isDark
                            ? "rgba(255, 255, 255, 0.05)"
                            : "rgba(0, 0, 0, 0.03)"
                        }`,
                      }}
                    >
                      {React.cloneElement(skill.icon, {
                        sx: {
                          fontSize: 24,
                          mr: 2,
                          color:
                            skill.category === "Frontend"
                              ? "#1976d2"
                              : skill.category === "Backend"
                              ? "#388e3c"
                              : skill.category === "Database"
                              ? "#f57c00"
                              : skill.category === "Programming Languages"
                              ? "#d32f2f"
                              : "#0288d1",
                        },
                      })}
                      <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        sx={{
                          color: isDark ? "#fff" : "#1976d2",
                          fontSize: "1rem",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {skill.category}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        p: 2,
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1.5,
                        alignItems: "center",
                      }}
                    >
                      {skill.items.map((item) => (
                        <Chip
                          key={item.name}
                          icon={
                            <Box
                              sx={{
                                display: "inline-flex",
                                fontSize: 18,
                                width: 18,
                                height: 18,
                                ml: 0.5,
                              }}
                            >
                              {item.icon}
                            </Box>
                          }
                          label={
                            <Typography
                              variant="body2"
                              sx={{
                                fontWeight: 500,
                                fontSize: "0.75rem",
                                ml: 0.5,
                              }}
                            >
                              {item.name}
                            </Typography>
                          }
                          size="medium"
                          sx={{
                            height: 32,
                            borderRadius: 2,
                            bgcolor: isDark
                              ? "rgba(255, 255, 255, 0.08)"
                              : "rgba(25, 118, 210, 0.08)",
                            border: `1px solid ${
                              isDark
                                ? "rgba(255, 255, 255, 0.1)"
                                : "rgba(25, 118, 210, 0.15)"
                            }`,
                            "& .MuiChip-icon": {
                              ml: "4px !important",
                              mr: -0.5,
                            },
                            transition: "all 0.2s",
                            "&:hover": {
                              bgcolor: isDark
                                ? "rgba(255, 255, 255, 0.15)"
                                : "rgba(25, 118, 210, 0.15)",
                              transform: "scale(1.05)",
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </Card>
                ))}
              </Box>
            ) : (
              // DESKTOP VIEW: Original skills design
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
                    <Box
                      className="drawer"
                      sx={{
                        position: "absolute",
                        paddingLeft: 2,
                        top: idx === skills.length - 1 ? "auto" : 0,
                        bottom: idx === skills.length - 1 ? 0 : "auto",
                        left: "100%",
                        width: 200,
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
            )}
          </Box>
        </Paper>
      </Box>
    </section>
  );
};

export default SkillsSection;
