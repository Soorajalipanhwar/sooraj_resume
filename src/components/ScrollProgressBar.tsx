import React, { useEffect, useState } from "react";

const ScrollProgressBar: React.FC = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScroll(scrolled);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "5px",
        zIndex: 2000,
        background: "rgba(0,0,0,0.05)",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${scroll}%`,
          background:
            "linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)",
          transition: "width 0.2s ease-out",
        }}
      />
    </div>
  );
};

export default ScrollProgressBar;