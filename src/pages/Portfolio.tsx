import React, { useEffect, useRef, useState } from "react";
import { useThemeContext } from "../contexts/ThemeContext"; // Your theme context

const projects = [
  {
    title: "OCR Text Recognition",
    description:
      "An OCR-based text recognition app that extracts text from images.",
    technologies: ["Python", "OpenCV", "Tesseract"],
    github: "https://github.com/Soorajalipanhwar/My-Simple-Urdu-OCR-App",
    imageUrl: "./OCR.jpeg",
  },
  {
    title: "GameStore Web API",
    description:
      "This is a micro-services based ASP.NET Core web API. Created using EF Core and Dockerized SQL Server.",
    technologies: ["React", "Bootstrap", "Material UI", "axios api"],
    github:
      "https://github.com/Soorajalipanhwar/GameStore_ASP.NET_Core_Web_API",
    imageUrl: "./GameCatelogUI.png",
  },
  {
    title: "GameStore UI",
    description:
      "This is the React based UI of GameStoreAPI that I developed using ASP.NET Core.",
    technologies: [".NET", "ASP.NET Core", "Entity Framwork", "SQL Server"],
    github:
      "https://github.com/Soorajalipanhwar/GameStore_ASP.NET_Core_Web_API",
    imageUrl: "./GameStoreAPI.png",
  },
  {
    title: "Restaurant Management System",
    description:
      "This is a C# project for restaurant management System with MS SQL Database.",
    technologies: [".NET", "WinForms", "SQL Server"],
    github: "https://github.com/Soorajalipanhwar/Restaurant-Management-System",
    imageUrl: "./RMS.jpeg",
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
      "https://github.com/Soorajalipanhwar/Sentiment-Analysis-App-With-Python-Flask/blob/main/page%20view.jpg?raw=true",
  },
  {
    title: "Simple Text Editor Application",
    description:
      "This is a simple Text Editor with basic text editing and file handling functionalities.",
    technologies: [".NET", "WinForms", "SQL Server"],
    github: "https://github.com/Soorajalipanhwar/TextEditor",
    imageUrl: "./texteditor.png",
  },
  {
    title: "A simple dino game in python",
    description:
      "This is a fun game project in python. It is a basic implementation of google's dino game",
    technologies: ["Python", "Flask", "PyGame"],
    github: "https://github.com/Soorajalipanhwar/dino_game",
    imageUrl:
      "https://github.com/Soorajalipanhwar/dino_game/blob/main/dino%20game.png?raw=true",
  },
];

const CustomCard = ({
  title,
  description,
  technologies,
  github,
  imageUrl,
  liveDemo,
  mode,
  index,
}: any) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`col-12 col-sm-6 col-md-4 mb-4 d-flex align-items-stretch portfolio-card-appear`}
      style={{
        willChange: "opacity, transform",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition:
          "opacity 0.6s cubic-bezier(.4,0,.2,1), transform 0.6s cubic-bezier(.4,0,.2,1)",
        transitionDelay: visible ? `${index * 80}ms` : "0ms",
      }}
    >
      <div
        className={`card shadow-sm border-0 position-relative w-100 portfolio-card d-flex flex-column`}
        style={{
          height: 240,
          background: mode === "dark" ? "#23272b" : "#fff",
          color: mode === "dark" ? "#fff" : "#23272b",
          overflow: "hidden",
          transition: "box-shadow 0.3s, transform 0.3s",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          padding: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="position-relative w-100 h-100 d-flex flex-column"
          style={{ height: "100%", width: "100%" }}
        >
          <img
            src={imageUrl}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              transition: "transform 0.3s",
              display: "block",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
            }}
            className="card-img"
          />
          <div
            className="portfolio-hover-overlay d-flex flex-column justify-content-between align-items-center text-center px-3"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 2,
              padding: "20px 16px 16px 16px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>
              <h5
                className="mb-2"
                style={{
                  color: mode === "dark" ? "#ffc107" : "#1976d2",
                  fontWeight: 700,
                  letterSpacing: "0.5px",
                }}
              >
                {title}
              </h5>
              <p
                className="mb-2"
                style={{
                  fontSize: 15,
                  color: "#b6c7d6", // Softer, lighter blue-gray
                  fontWeight: 500,
                }}
              >
                {description}
              </p>
              <p
                className="mb-3"
                style={{
                  fontSize: 13,
                  color: mode === "dark" ? "#adb5bd" : "#6c757d",
                }}
              >
                <strong>Technologies:</strong> {technologies.join(", ")}
              </p>
            </div>
            <div className="w-100 d-flex justify-content-center gap-2 mt-3">
              {liveDemo && (
                <a
                  href={liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm me-2 custom-transparent-btn"
                  style={{
                    color: mode === "dark" ? "#fff" : "#1976d2",
                    border: "none",
                    boxShadow: "none",
                    background: "transparent",
                    transition: "background 0.2s",
                    padding: "6px 18px",
                  }}
                >
                  <i className="bi bi-box-arrow-up-right"></i> Live Demo
                </a>
              )}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm custom-transparent-btn"
                  style={{
                    color: "#ffc107",
                    border: "none",
                    boxShadow: "none",
                    background: "transparent",
                    transition: "background 0.2s",
                    padding: "6px 18px",
                  }}
                >
                  <i
                    className="bi bi-github"
                    style={{ marginRight: 6, marginBottom: 2 }}
                  ></i>
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
        <style>
          {`
          .portfolio-card {
            position: relative;
          }
          .portfolio-hover-overlay {
            background: rgba(0,0,0,0.7);
            color: #fff;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s;
          }
          .portfolio-card:hover .portfolio-hover-overlay,
          .portfolio-card:focus-within .portfolio-hover-overlay {
            opacity: 1;
            pointer-events: auto;
          }
          .portfolio-card .card-img {
            transition: transform 0.3s;
          }
          .portfolio-card:hover .card-img,
          .portfolio-card:focus-within .card-img {
            transform: scale(1.07);
          }
          .portfolio-card:hover,
          .portfolio-card:focus-within {
            box-shadow: 0 8px 24px rgba(0,0,0,0.25) !important;
            transform: translateY(-6px) scale(1.03);
            cursor: pointer;
          }
          .custom-transparent-btn:hover, .custom-transparent-btn:focus {
            background: rgba(25, 118, 210, 0.05) !important;
          }
          .custom-transparent-btn:active {
            background: rgba(25, 118, 210, 0.08) !important;
          }
          .btn.custom-transparent-btn {
            background: transparent !important;
          }
            @media (max-width: 768px) {
  .portfolio-hover-overlay {
    opacity: 1 !important;
    pointer-events: auto !important;
    background: rgba(0, 0, 0, 0.65) !important; /* Slightly more transparent for clearer image */
    padding: 12px 8px !important;
    max-width: 100%;
  }

  .portfolio-card .card-img {
    transform: none !important;
    filter: brightness(1.05) contrast(1.1); /* Makes the image crisper */
  }

  .portfolio-card {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15) !important;
    transform: none !important;
    border-radius: 8px;
  }

  .portfolio-card:hover,
  .portfolio-card:focus-within {
    transform: none !important;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15) !important;
    cursor: default;
  }

  .portfolio-hover-overlay h5 {
    font-size: 13px !important;
    margin-bottom: 6px !important;
  }

  .portfolio-hover-overlay p {
    font-size: 12px !important;
    margin-bottom: 6px !important;
    line-height: 1.4;
  }

  .portfolio-hover-overlay .btn {
    font-size: 12px !important;
    padding: 4px 10px !important;
    margin-top: 6px;
  }
}

        `}
        </style>
      </div>
    </div>
  );
};

const PortfolioSection: React.FC = () => {
  const { mode } = useThemeContext();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fade in the whole section on mount
    if (sectionRef.current) {
      sectionRef.current.style.opacity = "0";
      sectionRef.current.style.transform = "translateY(40px)";
      setTimeout(() => {
        if (sectionRef.current) {
          sectionRef.current.style.transition =
            "opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)";
          sectionRef.current.style.opacity = "1";
          sectionRef.current.style.transform = "translateY(0)";
        }
      }, 100);
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      id="portfolio"
      className="container-fluid d-flex justify-content-center align-items-start"
      style={{
        minHeight: "100vh",
        background: "transparent",
        color: mode === "dark" ? "#fff" : "#23272b",
        paddingLeft: "5vw",
        paddingRight: "5vw",
        paddingTop: "80px",
        paddingBottom: "40px",
        maxWidth: "1200px",
        margin: "0 auto",
        willChange: "opacity, transform",
      }}
    >
      <div style={{ width: "100%" }}>
        <div className="text-center mb-5" style={{ paddingTop: "16px" }}>
          <h2
            style={{
              fontWeight: 700,
              textShadow:
                mode === "dark" ? "0px 2px 4px rgba(0,0,0,0.6)" : "none",
            }}
          >
            Portfolio
          </h2>
        </div>
        <div className="row">
          {projects.map((project, idx) => (
            <CustomCard key={idx} {...project} mode={mode} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
