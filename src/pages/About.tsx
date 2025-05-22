import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  useTheme,
  Fade,
  useMediaQuery,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import SkillsSection from "./SkillsSection";

const educationData = [
  {
    icon: <SchoolIcon color="primary" fontSize="small" />,
    label: "Matriculation",
    institution: "Govt. (Boys) High School, Badah, Larkana",
    year: "2012-2017",
    details: "Science Group",
  },
  {
    icon: <SchoolIcon color="primary" fontSize="small" />,
    label: "Intermediate",
    institution: "Govt.(Boys) Higher Secondary School Badah, Larkana",
    year: "2017-2019",
    details: "Pre-Engineering",
  },
  {
    icon: <SchoolIcon color="primary" fontSize="small" />,
    label: "BS Computer Science",
    institution:
      "Quaid-E-Awam University of Engineering Science and Technology, Nawabshah",
    year: "2020-2024",
    details: "CGPA: 3.67 / 4.0",
  },
];

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
    title: "SQL - Intermediate certificate",
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

const ITEM_HEIGHT = 80;

const About: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
  }, [visibleItems]);

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
                ...(isMobile
                  ? {}
                  : {
                      "&:hover": {
                        boxShadow: "0 12px 48px 0 #1976d2aa",
                      },
                    }),
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
                    mb: isMobile ? 1 : 2,
                  }}
                >
                  <SchoolIcon
                    color="primary"
                    sx={{
                      fontSize: isMobile ? 36 : 48,
                      mb: isMobile ? 0.5 : 1,
                    }}
                  />
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    sx={{
                      color: isDark ? "#fff" : "#111",
                      fontFamily: "'Montserrat', 'Roboto', Arial, sans-serif",
                      fontSize: isMobile ? 18 : { xs: 20, sm: 22 },
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
                      left: { xs: 16, md: 20 },
                      top: 0,
                      width: 3,
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
                          minHeight: isMobile ? 70 : ITEM_HEIGHT,
                          display: "flex",
                          alignItems: "flex-start",
                          marginBottom:
                            idx === educationData.length - 1
                              ? 0
                              : isMobile
                              ? 30
                              : 20,
                        }}
                      >
                        {/* Dot */}
                        <Box
                          sx={{
                            position: "absolute",
                            left: { xs: 6, md: 8 },
                            top: isMobile ? 28 : 40,
                            width: isMobile ? 20 : 24,
                            height: isMobile ? 20 : 24,
                            borderRadius: "50%",
                            bgcolor: "#fff",
                            border: `3px solid ${theme.palette.primary.main}`,
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
                            ml: { xs: 6, md: 8 },
                            flex: 1,
                            background: isDark
                              ? "rgba(30, 30, 40, 0.92)"
                              : "rgba(255,255,255,0.98)",
                            borderRadius: 3,
                            boxShadow: isDark
                              ? "0 2px 8px 0 rgba(25, 118, 210, 0.10)"
                              : "0 2px 8px 0 rgba(33, 150, 243, 0.07)",
                            p: isMobile ? 1.5 : 2,
                            display: "flex",
                            alignItems: "center",
                            minHeight: isMobile ? 80 : 100,
                            cursor: "pointer",
                            transition:
                              "box-shadow 0.4s cubic-bezier(.4,0,.2,1), background 0.3s,",
                            ...(isMobile
                              ? {}
                              : {
                                  "&:hover": {
                                    boxShadow: "0 8px 32px 0 #1976d2aa",
                                    background: isDark
                                      ? "rgba(30, 30, 60, 0.97)"
                                      : "rgba(255, 255, 255, 0.98)",
                                  },
                                }),
                          }}
                        >
                          <Box
                            sx={{
                              textAlign: { xs: "justify", md: "left" },
                            }}
                          >
                            <Typography
                              variant="h6"
                              fontWeight={700}
                              fontSize={isMobile ? "1rem" : undefined}
                            >
                              {item.label}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              fontWeight={700}
                              gutterBottom
                              fontSize={isMobile ? "0.75rem" : undefined}
                            >
                              {item.year} — {item.institution}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              fontSize={isMobile ? "0.75rem" : undefined}
                            >
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
                  maxWidth: isMobile ? "100%" : 300,
                  mt: { xs: 2, md: 0 },
                  pl: isMobile ? 0 : undefined,
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight={700}
                  sx={{
                    color: isDark ? "#fff" : "#111",
                    fontFamily: "'Montserrat', 'Roboto', Arial, sans-serif",
                    fontSize: isMobile ? 18 : { xs: 20, sm: 22 },
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
                    pl: isMobile ? 2 : 3,
                    pr: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: isMobile ? 2 : 3,
                  }}
                >
                  {/* Timeline vertical line */}
                  <Box
                    sx={{
                      position: "absolute",
                      left: isMobile ? 13 : 18,
                      top: 0,
                      width: 2,
                      height: "100%",
                      bgcolor: theme.palette.primary.light,
                      opacity: 0.18,
                      borderRadius: 2,
                      zIndex: 0,
                    }}
                  />
                  {certificates.map((cert) => (
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
                          width: isMobile ? 14 : 18,
                          height: isMobile ? 14 : 18,
                          borderRadius: "50%",
                          bgcolor: theme.palette.primary.main,
                          border: "2px solid #fff",
                          boxShadow: 2,
                          position: "absolute",
                          left: isMobile ? -7 : -9,
                          top: isMobile ? 6 : 8,
                          zIndex: 2,
                        }}
                      />
                      {/* Time period label */}
                      <Box
                        sx={{
                          minWidth: isMobile ? 50 : 60,
                          mr: isMobile ? 1 : 1.5,
                          mt: isMobile ? 0 : 0.5,
                          textAlign: "right",
                          color: theme.palette.text.secondary,
                          fontSize: isMobile ? 11 : 12,
                          fontWeight: 500,
                          letterSpacing: 0.2,
                          userSelect: "none",
                        }}
                      >
                        <Box>{cert.timePeriod}</Box>
                        <Box
                          sx={{
                            fontSize: isMobile ? 10 : 11,
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
                        isMobile={isMobile}
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
  isMobile,
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
  isMobile: boolean;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Paper
      elevation={2}
      onClick={onClick}
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={() => !isMobile && setHovered(false)}
      sx={{
        p: isMobile ? 0.8 : 1,
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
        ...(isMobile
          ? {}
          : {
              "&:hover": {
                boxShadow: "0 4px 16px 0 #1976d2aa",
                transform: "scale(1.03)",
                background: isDark
                  ? "rgba(30, 30, 60, 0.97)"
                  : "rgba(230,245,255,0.98)",
              },
            }),
        maxWidth: isMobile ? 180 : 200,
        minHeight: isMobile ? 40 : 48,
      }}
    >
      <Box
        sx={{
          mb: isMobile ? 0 : 0.5,
          px: isMobile ? 1 : 1.5,
          py: isMobile ? 0.3 : 0.5,
          borderRadius: 1.5,
          border: `1.5px solid ${theme.palette.primary.main}`,
          background: isDark
            ? "rgba(30, 30, 60, 0.10)"
            : "rgba(25, 118, 210, 0.06)",
          color: isDark
            ? theme.palette.primary.light
            : theme.palette.primary.dark,
          fontWeight: 600,
          fontSize: isMobile ? 12 : 14,
          textAlign: "center",
          letterSpacing: 0.2,
          textTransform: "capitalize",
          transition: "border 0.2s, background 0.2s",
        }}
      >
        {cert.title}
      </Box>
      {(isMobile || hovered) && (
        <Box
          component="img"
          src={cert.image}
          alt={cert.title}
          sx={{
            width: "100%",
            maxWidth: isMobile ? 120 : 140,
            height: isMobile ? 70 : 80,
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
