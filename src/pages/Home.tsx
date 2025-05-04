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

const imageUrl = "https://soorajalipanhwar.github.io/My-Website/assets/new.png";
const cvUrl =
  "https://soorajalipanhwar.github.io/My-Website/assets/Sooraj's%20CV.pdf";

const TITLES = [
  "Software Developer",
  "Web Developer",
  "Programmer",
  "Software Engineer",
];

const Typewriter: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
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

  useEffect(() => {
    const blinkTimeout = setInterval(() => {
      setBlink((v) => !v);
    }, 500);
    return () => clearInterval(blinkTimeout);
  }, []);

  return (
    <span>
      {TITLES[index].substring(0, subIndex)}
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
    setTimeout(() => setTextVisible(true), 600); // Text content animates in after card
  }, []);

  // Parallax effect on mouse move
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
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          px: 2,
          py: { xs: 4, md: 0 },
          pt: { xs: 8, md: 10 },
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
          spacing={isMobile ? 6 : 8} // Increased spacing for mobile
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
              width: { xs: 430, md: 340 }, // Increased width for mobile
              height: { xs: 630, md: 420 }, // Increased height for mobile
              borderRadius: 6,
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
              mt: isMobile ? 2 : 6, // Adjusted margin for mobile
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
              maxWidth: { xs: "90%", md: 500 }, // Increased max width for mobile
              textAlign: isMobile ? "center" : "left",
              color: isDark ? "#e3f2fd" : "#232526",
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? "none" : "translateY(40px)",
              transition:
                "opacity 0.8s 0.2s cubic-bezier(.4,0,.2,1), transform 0.8s 0.2s cubic-bezier(.4,0,.2,1)",
            }}
          >
            <Typography
              variant="h2"
              fontWeight={800}
              sx={{
                mb: 1,
                color: theme.palette.primary.main,
                letterSpacing: 1,
                fontSize: { xs: "2.5rem", md: "3rem" }, // Increased font size for mobile
              }}
            >
              Sooraj Ali Panhwar
            </Typography>
            <Typography
              variant="h5"
              fontWeight={600}
              sx={{
                mb: 2,
                color: isDark ? "#e3f2fd" : "#1976d2",
                minHeight: "2.5rem",
              }}
            >
              <Typewriter />
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                color: isDark ? "#e3f2fd" : "#263238",
                fontSize: { xs: "1.15rem", md: "1.15rem" }, // Slightly larger font size for mobile
              }}
            >
              I am a passionate developer focused on building impactful,
              user-friendly applications and always eager to learn new
              technologies.
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              justifyContent={isMobile ? "center" : "flex-start"}
            >
              <Button
                variant="contained"
                color="primary"
                href={cvUrl}
                target="_blank"
                startIcon={<DownloadIcon />}
                sx={{
                  fontWeight: 700,
                  boxShadow: "0 2px 8px 0 rgba(25, 118, 210, 0.10)",
                  transition:
                    "box-shadow 0.3s cubic-bezier(.4,0,.2,1), transform 0.3s cubic-bezier(.4,0,.2,1)",
                  "&:hover": {
                    boxShadow: "0 4px 16px 0 #1976d2aa",
                    transform: "scale(1.07)",
                  },
                }}
              >
                Download CV
              </Button>
              <IconButton
                color="primary"
                href="https://github.com/soorajalipanhwar"
                target="_blank"
                aria-label="GitHub"
                sx={{
                  transition: "transform 0.3s cubic-bezier(.4,0,.2,1)",
                  "&:hover": { transform: "scale(1.2) rotate(-8deg)" },
                }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                color="primary"
                href="https://linkedin.com/in/sooraj-ali-panhwar"
                target="_blank"
                aria-label="LinkedIn"
                sx={{
                  transition: "transform 0.3s cubic-bezier(.4,0,.2,1)",
                  "&:hover": { transform: "scale(1.2) rotate(8deg)" },
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </section>
  );
};

export default Home;
