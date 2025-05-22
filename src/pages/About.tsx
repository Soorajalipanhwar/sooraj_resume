import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  useTheme,
  Avatar,
  Fade,
  Link,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import SkillsSection from "./SkillsSection";

const educationData = [
  {
    icon: <SchoolIcon color="primary" fontSize="small" />, // School icon
    label: "Matriculation",
    institution: "Govt. (Boys) High School, Badah, Larkana",
    year: "2012-2017",
    details: "Science Group",
  },
  {
    icon: <SchoolIcon color="primary" fontSize="small" />, // College icon
    label: "Intermediate",
    institution: "Govt.(Boys) Higher Secondary School Badah, Larkana",
    year: "2017-2019",
    details: "Pre-Engineering",
  },
  {
    icon: <SchoolIcon color="primary" fontSize="small" />, // University icon
    label: "BS Computer Science",
    institution:
      "Quaid-E-Awam University of Engineering Science and Technology, Nawabshah",
    year: "2020-2024",
    details: "CGPA: 3.67 / 4.0",
  },
];

// Update your certificates array to include timePeriod and duration
const certificates = [
  {
    title: "Google Professional IT Support",
    image: "https://soorajalipanhwar.github.io/My-Website/assets/google IT.png",
    link: "https://coursera.org/share/311bc49596a4c39df7b840240cb7f2b8",
    timePeriod: "2023",
    duration: "6 months",
  },
  {
    title: "Data Science with Python",
    image: "https://soorajalipanhwar.github.io/My-Website/assets/data.png",
    link: "https://verifybootcamp.netlify.app/certificate/4320159590089",
    timePeriod: "2023",
    duration: "3 months",
  },
  {
    title: "SQL - Intermediate",
    image: "https://soorajalipanhwar.github.io/My-Website/assets/SQL.jpg",
    link: "https://www.sololearn.com/en/certificates/CC-O4DKUYQ1",
    timePeriod: "2025",
    duration: "1 month",
  },
  {
    title: "Problem Solving (HackerRank)",
    image:
      "https://soorajalipanhwar.github.io/My-Website/assets/problem%20solving.png",
    link: "https://www.hackerrank.com/certificates/92d76f476bc9",
    timePeriod: "2025",
    duration: "2 weeks",
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

  // Certificate click handler
  const handleCertClick = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

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
                    variant="h5"
                    fontWeight={700}
                    sx={{
                      color: isDark ? "#fff" : "#111",
                      fontFamily: "'Montserrat', 'Roboto', Arial, sans-serif",
                      fontSize: { xs: 20, sm: 22 },
                      letterSpacing: 0.5,
                      mb: 1,
                      textTransform: "uppercase",
                      lineHeight: 1.2,
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
                          itemRefs.current[idx] = el;
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
                            cursor: "pointer",
                            transition:
                              "box-shadow 0.4s cubic-bezier(.4,0,.2,1), background 0.3s,",
                            "&:hover": {
                              boxShadow: "0 8px 32px 0 #1976d2aa",
                              background: isDark
                                ? "rgba(30, 30, 60, 0.97)"
                                : "rgba(255, 255, 255, 0.98)",
                            },
                          }}
                        >
                          <Box
                            sx={{
                              textAlign: { xs: "justify", md: "left" },
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

              {/* Right Column: Certificates Timeline */}
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: 2,
                  minWidth: 220,
                  maxWidth: 300,
                  mt: { xs: 2, md: 0 },
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight={700}
                  sx={{
                    color: isDark ? "#fff" : "#111",
                    fontFamily: "'Montserrat', 'Roboto', Arial, sans-serif",
                    fontSize: { xs: 20, sm: 22 },
                    letterSpacing: 0.5,
                    mb: 1,
                    textTransform: "uppercase",
                    lineHeight: 1.2,
                  }}
                >
                  Certificates
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    position: "relative",
                    pl: 3,
                    pr: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                  }}
                >
                  {/* Timeline vertical line */}
                  <Box
                    sx={{
                      position: "absolute",
                      left: 18,
                      top: 0,
                      width: 3,
                      height: "100%",
                      bgcolor: theme.palette.primary.light,
                      opacity: 0.18,
                      borderRadius: 2,
                      zIndex: 0,
                    }}
                  />
                  {certificates.map((cert, idx) => (
                    <Box
                      key={cert.title}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      {/* Timeline Dot */}
                      <Box
                        sx={{
                          width: 18,
                          height: 18,
                          borderRadius: "50%",
                          bgcolor: theme.palette.primary.main,
                          border: "2.5px solid #fff",
                          boxShadow: 2,
                          position: "absolute",
                          left: -9,
                          top: 8,
                          zIndex: 2,
                        }}
                      />
                      {/* Time period label */}
                      <Box
                        sx={{
                          minWidth: 60,
                          mr: 1.5,
                          mt: 0.5,
                          textAlign: "right",
                          color: theme.palette.text.secondary,
                          fontSize: 12,
                          fontWeight: 500,
                          letterSpacing: 0.2,
                          userSelect: "none",
                        }}
                      >
                        <Box>{cert.timePeriod}</Box>
                        <Box
                          sx={{
                            fontSize: 11,
                            color: theme.palette.primary.main,
                          }}
                        >
                          {cert.duration}
                        </Box>
                      </Box>
                      {/* Certificate Card */}
                      <CertificateCard
                        cert={cert}
                        isDark={isDark}
                        theme={theme}
                        onClick={() => handleCertClick(cert.link)}
                      />
                    </Box>
                  ))}
                </Box>
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

const CertificateCard = ({
  cert,
  isDark,
  theme,
  onClick,
}: {
  cert: {
    title: string;
    image: string;
    link: string;
    timePeriod?: string;
    duration?: string;
  };
  isDark: boolean;
  theme: any;
  onClick: () => void;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Paper
      elevation={2}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        p: 1,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0.5,
        background: isDark
          ? "rgba(30, 30, 40, 0.92)"
          : "rgba(255,255,255,0.98)",
        boxShadow: isDark
          ? "0 1px 4px 0 rgba(25, 118, 210, 0.10)"
          : "0 1px 4px 0 rgba(33, 150, 243, 0.07)",
        transition: "box-shadow 0.3s, transform 0.3s",
        cursor: "pointer",
        "&:hover": {
          boxShadow: "0 4px 16px 0 #1976d2aa",
          transform: "scale(1.03)",
          background: isDark
            ? "rgba(30, 30, 60, 0.97)"
            : "rgba(230,245,255,0.98)",
        },
        maxWidth: 200,
        minHeight: 48,
      }}
    >
      <Box
        sx={{
          mb: 0.5,
          px: 1.5,
          py: 0.5,
          borderRadius: 1.5,
          border: `1.5px solid ${theme.palette.primary.main}`,
          background: isDark
            ? "rgba(30, 30, 60, 0.10)"
            : "rgba(25, 118, 210, 0.06)",
          color: isDark
            ? theme.palette.primary.light
            : theme.palette.primary.dark,
          fontWeight: 600,
          fontSize: 14,
          textAlign: "center",
          letterSpacing: 0.2,
          textTransform: "capitalize",
          transition: "border 0.2s, background 0.2s",
        }}
      >
        {cert.title}
      </Box>
      {hovered && (
        <Box
          component="img"
          src={cert.image}
          alt={cert.title}
          sx={{
            width: "100%",
            maxWidth: 140,
            height: 80,
            objectFit: "contain",
            borderRadius: 1,
            border: `1.5px solid ${theme.palette.primary.main}`,
            background: "#fff",
            boxShadow: 1,
            transition: "box-shadow 0.3s, transform 0.3s",
            mt: 0.5,
          }}
        />
      )}
    </Paper>
  );
};
