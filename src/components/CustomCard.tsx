import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
import { Card, CardContent } from "@mui/material";
// import { useTheme } from "@/components/theme-provider";
import { useTheme } from "@mui/material/styles";
import "@/components/portfolio/Portfolio.css";

interface CustomCardProps {
  title: string;
  description: string;
  imageUrl: string;
  github?: string;
  liveDemo?: string;
  technologies: string[];
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  description,
  imageUrl,
  github,
  liveDemo,
  technologies,
}) => {
  const {
    palette: { mode },
  } = useTheme(); // ✅ Correct

  return (
    <Card className="portfolio-card shadow-md">
      <div
        className="position-relative overflow-hidden"
        style={{ borderRadius: "12px" }}
      >
        {/* Image */}
        <img
          src={imageUrl}
          alt={title}
          className="card-img"
          style={{ width: "100%", height: "250px", objectFit: "cover" }}
        />

        {/* Overlay content */}
        <div
          className="portfolio-hover-overlay d-flex flex-column text-white"
          style={{
            zIndex: 2,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            padding: "20px 16px",
            transition: "all 0.3s ease",
          }}
        >
          <h5
            style={{
              color: mode === "dark" ? "#ffc107" : "#1976d2",
              fontWeight: 700,
              fontSize: "1.1rem",
            }}
          >
            {title}
          </h5>

          <p
            style={{
              fontSize: "0.85rem",
              color: "#e0e0e0",
              marginBottom: 4,
            }}
          >
            {description.length > 60
              ? description.slice(0, 60) + "..."
              : description}
          </p>

          <p
            className="tech mt-auto"
            style={{
              fontSize: "0.75rem",
              color: mode === "dark" ? "#adb5bd" : "#dcdcdc",
            }}
          >
            <strong>Tech:</strong> {technologies.join(", ")}
          </p>

          <div className="links-wrapper mt-2">
            {liveDemo && (
              <a
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm custom-transparent-btn"
                style={{ color: "#fff" }}
              >
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm custom-transparent-btn"
                style={{ color: "#ffc107" }}
              >
                <i className="bi bi-github"></i>
              </a>
            )}
          </div>
        </div>
      </div>

      <CardContent>{/* Add content below image if needed */}</CardContent>

      {/* Responsive styles for mobile-only changes */}
      <style>
        {`
        @media (max-width: 768px) {
          .portfolio-hover-overlay {
            opacity: 1 !important;
            background: rgba(0, 0, 0, 0.6) !important;
            pointer-events: auto !important;
            padding: 12px !important;
          }

          .portfolio-card:hover,
          .portfolio-card:focus-within {
            transform: none !important;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
            cursor: default !important;
          }

          .portfolio-card:hover .card-img,
          .portfolio-card:focus-within .card-img {
            transform: none !important;
          }

          .portfolio-hover-overlay h5 {
            font-size: 1rem;
            margin-bottom: 4px;
          }

          .portfolio-hover-overlay p {
            font-size: 0.75rem;
            margin-bottom: 4px;
          }

          .portfolio-hover-overlay .tech {
            font-size: 0.7rem;
            margin-top: auto;
          }

          .portfolio-hover-overlay .links-wrapper {
            display: flex;
            justify-content: space-between;
            width: 100%;
            padding-top: 8px;
          }

          .portfolio-hover-overlay .btn {
            font-size: 0.7rem;
            padding: 4px 8px;
          }
        }
      `}
      </style>
    </Card>
  );
};

export default CustomCard;
