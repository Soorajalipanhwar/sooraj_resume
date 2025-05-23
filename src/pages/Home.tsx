import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  IconButton,
  useTheme,
  Card,
  useMediaQuery,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadIcon from "@mui/icons-material/Download";

const imageUrl = "./profile.png";
const cvUrl = "./Soorajs-CV.pdf";

const TITLES = ["{Software Developer", "<Web Developer", "Software Engineer"];

const Typewriter: React.FC = () => {
  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);
  const [blink, setBlink] = React.useState(true);

  const isWebDev = TITLES[index].replace(/[<>{}]/g, "") === "Web Developer";
  const isSoftDev =
    TITLES[index].replace(/[<>{}]/g, "") === "Software Developer";

  React.useEffect(() => {
    if (subIndex === TITLES[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % TITLES.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => (deleting ? prev - 1 : prev + 1));
      },
      deleting ? 40 : 100
    );

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  React.useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  const typedText = TITLES[index].substring(0, subIndex).replace(/[<>{}]/g, "");

  return (
    <span>
      {/* Opening Brackets */}
      {isWebDev && subIndex > 0 && (
        <span style={{ color: "orange" }}>&lt;</span>
      )}
      {isSoftDev && subIndex > 0 && (
        <span style={{ color: "#00bfa6" }}>&#123;</span> // {
      )}

      {/* Typed Text */}
      {typedText}

      {/* Closing Brackets */}
      {isWebDev && subIndex > typedText.length && (
        <>
          <span style={{ color: "orange" }}>/</span>
          <span style={{ color: "orange" }}>&gt;</span>
        </>
      )}
      {isSoftDev && subIndex > typedText.length && (
        <span style={{ color: "#00bfa6" }}>&#125;</span> // }
      )}

      {/* Cursor */}
      <span style={{ opacity: blink ? 1 : 0 }}>|</span>
    </span>
  );
};

const Home: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const [visible, setVisible] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [hovered, setHovered] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
    setTimeout(() => setTextVisible(true), 600);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setParallax({ x, y });
  };

  const handleMouseLeave = () => {
    setParallax({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <section id="home">
      <Box
        sx={{
          minHeight: "100vh",
          maxHeight: { xs: "100vh", md: "auto" },
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: { xs: "hidden", md: "visible" },
          px: { xs: 1, md: 2 },
          py: { xs: 1, md: 0 },
          pt: { xs: 3, md: 10 },
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(40px)",
          transition:
            "opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)",
        }}
      >
        {/* Diagonal split overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            pointerEvents: "none",
            background: `linear-gradient(120deg, transparent 60%, ${
              isDark ? "#1976d2" : "#1976d2"
            } 100%)`,
            opacity: 0.15,
          }}
        />
        <Stack
          direction={isMobile ? "column" : "row"}
          spacing={isMobile ? 3 : 8} // Reduced spacing for mobile
          alignItems="center"
          justifyContent="center"
          sx={{ width: "100%", zIndex: 1 }}
        >
          {/* Image Card */}
          <Card
            ref={cardRef}
            elevation={10}
            onMouseMove={isMobile ? undefined : handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={handleMouseLeave}
            sx={{
              width: { xs: 280, md: 340 }, // smaller width on mobile
              height: { xs: 400, md: 420 }, // smaller height on mobile
              borderRadius: 4,
              overflow: "hidden",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              boxShadow: hovered
                ? `0 16px 48px 0 ${theme.palette.primary.main}55`
                : isDark
                ? "0 8px 32px 0 rgba(0,0,0,0.7)"
                : "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
              background: isDark
                ? "rgba(30, 30, 40, 0.95)"
                : "rgba(255,255,255,0.95)",
              transition:
                "box-shadow 0.4s cubic-bezier(.4,0,.2,1), transform 0.4s cubic-bezier(.4,0,.2,1)",
              mt: isMobile ? 1 : 6,
              cursor: "pointer",
              transform: hovered
                ? `scale(1.06) rotateX(${
                    parallax.y
                  }deg) rotateY(${-parallax.x}deg)`
                : "scale(1)",
              filter: hovered
                ? "brightness(1.08) saturate(1.2) drop-shadow(0 4px 24px #1976d2aa)"
                : "none",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                background: isDark
                  ? "linear-gradient(120deg, #232526 60%, #1976d2 100%)"
                  : "linear-gradient(120deg, #e3f2fd 60%, #1976d2 100%)",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <img
                src={imageUrl}
                alt="Sooraj Ali Panhwar"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                  display: "block",
                  transition: "filter 0.4s cubic-bezier(.4,0,.2,1)",
                }}
              />
            </Box>
          </Card>

          {/* Text Content */}
          <Box
            sx={{
              maxWidth: { xs: "90%", md: 500 },
              textAlign: isMobile ? "center" : "left",
              color: isDark ? "#e3f2fd" : "#232526",
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? "none" : "translateY(40px)",
              transition:
                "opacity 0.8s 0.2s cubic-bezier(.4,0,.2,1), transform 0.8s 0.2s cubic-bezier(.4,0,.2,1)",
              px: { xs: 1, md: 0 }, // Reduce padding on mobile
            }}
          >
            <Typography
              variant="h2"
              fontWeight={800}
              sx={{
                mb: 0.8,
                color: theme.palette.primary.main,
                letterSpacing: 1,
                fontSize: { xs: "1.8rem", md: "3rem" }, // Smaller on mobile
                lineHeight: 1.1,
              }}
            >
              Sooraj Ali Panhwar
            </Typography>
            <Typography
              variant="h5"
              fontWeight={600}
              sx={{
                mb: 1.5,
                color: isDark ? "#e3f2fd" : "#1976d2",
                minHeight: "2rem",
                fontSize: { xs: "1rem", md: "1.25rem" },
              }}
            >
              <Typewriter />
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 2,
                color: isDark ? "#e3f2fd" : "#263238",
                fontSize: { xs: "0.9rem", md: "1.15rem" },
                lineHeight: 1.3,
              }}
            >
              I am a passionate developer focused on building impactful,
              user-friendly applications and always eager to learn new
              technologies.
            </Typography>
            <Stack
              direction="row"
              spacing={1.5}
              justifyContent={isMobile ? "center" : "flex-start"}
              sx={{ flexWrap: "wrap", gap: { xs: 1, md: 2 } }}
            >
              <IconButton
                aria-label="GitHub"
                href="https://github.com/soorajalipanhwar"
                target="_blank"
                rel="noopener noreferrer"
                size="large"
                sx={{
                  color: theme.palette.primary.main,
                  border: `1.5px solid ${theme.palette.primary.main}`,
                  "&:hover": {
                    backgroundColor: theme.palette.primary.main,
                    color: "#fff",
                  },
                  width: { xs: 44, md: 50 },
                  height: { xs: 44, md: 50 },
                }}
              >
                <GitHubIcon fontSize="inherit" />
              </IconButton>

              <IconButton
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/sooraj-ali-panhwar/"
                target="_blank"
                rel="noopener noreferrer"
                size="large"
                sx={{
                  color: theme.palette.primary.main,
                  border: `1.5px solid ${theme.palette.primary.main}`,
                  "&:hover": {
                    backgroundColor: theme.palette.primary.main,
                    color: "#fff",
                  },
                  width: { xs: 44, md: 50 },
                  height: { xs: 44, md: 50 },
                }}
              >
                <LinkedInIcon fontSize="inherit" />
              </IconButton>

              <Button
                variant="outlined"
                href={cvUrl}
                target="_blank"
                sx={{
                  color: theme.palette.primary.main,
                  borderColor: theme.palette.primary.main,
                  textTransform: "none",
                  fontWeight: "bold",
                  px: { xs: 2, md: 3 },
                  fontSize: { xs: "0.85rem", md: "1rem" },
                  height: { xs: 40, md: 48 },
                  "&:hover": {
                    backgroundColor: theme.palette.primary.main,
                    color: "#fff",
                    borderColor: theme.palette.primary.main,
                  },
                }}
                startIcon={<DownloadIcon />}
              >
                Download CV
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </section>
  );
};

export default Home;
