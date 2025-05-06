import React, { useRef, useEffect, useState } from "react";
import { Box, Typography, Paper, useTheme, Avatar, Fade } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import SkillsSection from "./SkillsSection";

const educationData = [
  {
    icon: <SchoolIcon color="primary" fontSize="small" />, // School icon
    label: "Matriculation",
    institution: "Govt. High School, Nawabshah",
    year: "2016-2018",
    details: "Science Group, A+ Grade",
    timelineImage:
      "https://raw.githubusercontent.com/Soorajalipanhwar/My-Website/main/assets/4.jpg", // Timeline image
    hoverImage:
      "https://raw.githubusercontent.com/Soorajalipanhwar/My-Website/main/assets/new.png", // Hover image
  },
  {
    icon: <SchoolIcon color="primary" fontSize="small" />, // College icon
    label: "Intermediate",
    institution: "Govt. Degree College, Nawabshah",
    year: "2018-2020",
    details: "Pre-Engineering, A+ Grade",
    timelineImage:
      "https://raw.githubusercontent.com/Soorajalipanhwar/My-Website/main/assets/intermediate-icon.jpg", // Timeline image
    hoverImage:
      "https://raw.githubusercontent.com/Soorajalipanhwar/My-Website/main/assets/intermediate.jpg", // Hover image
  },
  {
    icon: <SchoolIcon color="primary" fontSize="small" />, // University icon
    label: "BS Computer Science",
    institution:
      "Quaid-E-Awam University of Engineering Science and Technology, Nawabshah",
    year: "2020-2024",
    details: "CGPA: 3.67 / 4.0",
    timelineImage:
      "https://raw.githubusercontent.com/Soorajalipanhwar/My-Website/main/assets/bs-icon.jpg", // Timeline image
    hoverImage:
      "https://raw.githubusercontent.com/Soorajalipanhwar/My-Website/main/assets/bs-computer-science.jpg", // Hover image
  },
];

const ITEM_HEIGHT = 100;

const About: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const [visible, setVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState(
    Array(educationData.length).fill(false)
  );
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    educationData.forEach((_, idx) => {
      if (!itemRefs.current[idx]) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !visibleItems[idx]) {
            setVisibleItems((prev) => {
              const updated = [...prev];
              updated[idx] = true;
              return updated;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.6 }
      );
      observer.observe(itemRefs.current[idx]!);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
    // eslint-disable-next-line
  }, [visibleItems]);

  return (
    <>
      <section id="about">
        <Box
          sx={{
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: 2,
            py: { xs: 6, md: 10 },
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(40px)",
            transition:
              "opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)",
          }}
        >
          <Fade in={visible} timeout={1000}>
            <Paper
              elevation={10}
              sx={{
                maxWidth: 1100,
                width: "100%",
                minHeight: { xs: "90vh", md: "60vh" }, // Fixed height for mobile view
                p: { xs: 3, sm: 4, md: 4 }, // Increased padding for mobile
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
                gap: { xs: 3, md: 4 }, // Increased gap for mobile
                alignItems: "flex-start",
                justifyContent: "space-between",
                transition:
                  "box-shadow 0.4s cubic-bezier(.4,0,.2,1), background 0.4s cubic-bezier(.4,0,.2,1)",
                "&:hover": {
                  boxShadow: "0 12px 48px 0 #1976d2aa",
                },
              }}
            >
              {/* Left Column: Timeline */}
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "center", md: "flex-start" },
                  justifyContent: "center",
                  pr: { xs: 0, md: 2 },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {/* School Icon Above the Timeline */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <SchoolIcon
                    color="primary"
                    sx={{
                      fontSize: 48,
                      mb: 1,
                    }}
                  />
                  <Typography
                    variant="h4"
                    fontWeight={800}
                    sx={{
                      color: theme.palette.primary.main,
                      letterSpacing: 1,
                    }}
                  >
                    My Education
                  </Typography>
                </Box>

                {/* Timeline */}
                <Box
                  component="ul"
                  sx={{
                    listStyle: "none",
                    p: 0,
                    m: 0,
                    position: "relative",
                    width: "100%",
                  }}
                >
                  {/* Vertical line */}
                  <Box
                    sx={{
                      position: "absolute",
                      left: { xs: 20, md: 20 },
                      top: 0,
                      width: 4,
                      height: `calc(100% - 40px)`,
                      bgcolor: theme.palette.primary.light,
                      opacity: 0.2,
                      zIndex: 0,
                    }}
                  />
                  {educationData.map((item, idx) => (
                    <Fade in={visibleItems[idx]} timeout={700} key={item.label}>
                      <li
                        ref={(el) => {
                          itemRefs.current[idx] = el; // Assign the element to the ref array
                        }}
                        style={{
                          position: "relative",
                          minHeight:
                            typeof ITEM_HEIGHT === "number"
                              ? ITEM_HEIGHT
                              : undefined,
                          display: "flex",
                          alignItems: "flex-start",
                          marginBottom:
                            idx === educationData.length - 1
                              ? 0
                              : window.innerWidth < 900
                              ? 40
                              : 20,
                        }}
                        onMouseEnter={() => setHoveredImage(item.hoverImage)} // Set hover image
                        onMouseLeave={() => setHoveredImage(null)} // Clear hover image
                      >
                        {/* Dot */}
                        <Box
                          sx={{
                            position: "absolute",
                            left: { xs: 8, md: 8 },
                            top: 40,
                            width: 24,
                            height: 24,
                            borderRadius: "50%",
                            bgcolor: "#fff",
                            border: `4px solid ${theme.palette.primary.main}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 2,
                            boxShadow: 2,
                          }}
                        >
                          {item.icon}
                        </Box>
                        {/* Card Content */}
                        <Box
                          sx={{
                            ml: { xs: 8, md: 8 },
                            flex: 1,
                            background: isDark
                              ? "rgba(30, 30, 40, 0.92)"
                              : "rgba(255,255,255,0.98)",
                            borderRadius: 3,
                            boxShadow: isDark
                              ? "0 2px 8px 0 rgba(25, 118, 210, 0.10)"
                              : "0 2px 8px 0 rgba(33, 150, 243, 0.07)",
                            p: 2,
                            display: "flex",
                            alignItems: "center",
                            minHeight: 100,
                            transition:
                              "box-shadow 0.4s cubic-bezier(.4,0,.2,1)",
                            "&:hover": {
                              boxShadow: "0 8px 32px 0 #1976d2aa",
                            },
                          }}
                        >
                          <Avatar
                            src={item.timelineImage}
                            alt={item.label}
                            sx={{
                              width: 72,
                              height: 72,
                              mr: 2,
                              border: `2px solid ${theme.palette.primary.main}`,
                              boxShadow: 1,
                              background: "#fff",
                            }}
                            variant="rounded"
                          />
                          <Box
                            sx={{
                              textAlign: { xs: "justify", md: "left" }, // Justify text on mobile
                            }}
                          >
                            <Typography variant="h6" fontWeight={700}>
                              {item.label}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              fontWeight={700}
                              gutterBottom
                            >
                              {item.year} — {item.institution}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {item.details}
                            </Typography>
                          </Box>
                        </Box>
                      </li>
                    </Fade>
                  ))}
                </Box>
              </Box>

              {/* Right Column: Hovered Image */}
              <Box
                sx={{
                  flex: 1,
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {hoveredImage && (
                  <Box
                    component="img"
                    src={hoveredImage}
                    alt="Hovered Education"
                    sx={{
                      maxWidth: "100%",
                      maxHeight: "300px",
                      borderRadius: 4,
                      boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                    }}
                  />
                )}
              </Box>
            </Paper>
          </Fade>
        </Box>
      </section>
      <SkillsSection />
    </>
  );
};

export default About;
