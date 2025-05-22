import React from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";
import { useThemeContext } from "../contexts/ThemeContext";

const ContactSection: React.FC = () => {
  const { mode } = useThemeContext(); // Access the current theme mode (dark or light)

  // Define a variable for the border radius
  const inputBorderRadius = 4; // Change this value to adjust the border radius

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Simulate form submission (replace this with your actual email service)
    alert(`Thank you, ${name}! Your message has been sent.`);
  };

  return (
    <Box
      id="contact"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 4,
        py: 6,
        background: "none", // Remove background for transparency
        color: mode === "dark" ? "#ffffff" : "#333333",
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h4"
        fontWeight={700}
        gutterBottom
        sx={{
          textShadow: mode === "dark" ? "0px 2px 4px rgba(0,0,0,0.6)" : "none",
          mb: 2,
        }}
      >
        Get in Touch
      </Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          maxWidth: "600px",
          mb: 4,
          color: mode === "dark" ? "#b0bec5" : "#455a64",
        }}
      >
        Have a question or want to work together? Fill out the form below, and
        I’ll get back to you as soon as possible!
      </Typography>

      {/* Contact Form */}
      <Paper
        elevation={5}
        sx={{
          width: "100%",
          maxWidth: "700px",
          background: mode === "dark" ? "#1e1e2f" : "#ffffff", // Form background
          borderRadius: 8, // Rounded corners for the form container
          p: 5,
          boxShadow:
            mode === "dark"
              ? "0 8px 30px rgba(0, 0, 0, 0.7)"
              : "0 8px 30px rgba(0, 0, 0, 0.2)", // Adjust shadow based on theme
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4, // Space between fields
          }}
        >
          {/* Name and Email Fields */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" }, // Stack on mobile, side-by-side on larger screens
              gap: 3,
            }}
          >
            <TextField
              fullWidth
              label="Your Name"
              name="name"
              variant="outlined"
              required
              InputProps={{
                style: {
                  color: mode === "dark" ? "#ffffff" : "#333333",
                },
              }}
              InputLabelProps={{
                style: {
                  color: mode === "dark" ? "#90caf9" : "#1976d2",
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: inputBorderRadius, // Use the variable for border radius
                  "& fieldset": {
                    borderColor: mode === "dark" ? "#90caf9" : "#1976d2",
                  },
                  "&:hover fieldset": {
                    borderColor: mode === "dark" ? "#ffffff" : "#333333",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: mode === "dark" ? "#90caf9" : "#1976d2",
                  },
                },
              }}
            />
            <TextField
              fullWidth
              label="Your Email"
              name="email"
              type="email"
              variant="outlined"
              required
              InputProps={{
                style: {
                  color: mode === "dark" ? "#ffffff" : "#333333",
                },
              }}
              InputLabelProps={{
                style: {
                  color: mode === "dark" ? "#90caf9" : "#1976d2",
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: inputBorderRadius, // Use the variable for border radius
                  "& fieldset": {
                    borderColor: mode === "dark" ? "#90caf9" : "#1976d2",
                  },
                  "&:hover fieldset": {
                    borderColor: mode === "dark" ? "#ffffff" : "#333333",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: mode === "dark" ? "#90caf9" : "#1976d2",
                  },
                },
              }}
            />
          </Box>

          {/* Message Field */}
          <TextField
            fullWidth
            label="Your Message"
            name="message"
            multiline
            rows={5}
            variant="outlined"
            required
            InputProps={{
              style: {
                color: mode === "dark" ? "#ffffff" : "#333333",
              },
            }}
            InputLabelProps={{
              style: {
                color: mode === "dark" ? "#90caf9" : "#1976d2",
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: inputBorderRadius, // Use the variable for border radius
                "& fieldset": {
                  borderColor: mode === "dark" ? "#90caf9" : "#1976d2",
                },
                "&:hover fieldset": {
                  borderColor: mode === "dark" ? "#ffffff" : "#333333",
                },
                "&.Mui-focused fieldset": {
                  borderColor: mode === "dark" ? "#90caf9" : "#1976d2",
                },
              },
            }}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              fontWeight: 700,
              background: "linear-gradient(90deg, #1976d2, #42a5f5)", // Gradient button
              color: "#ffffff",
              borderRadius: 8, // Rounded corners for the button
              boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                background: "linear-gradient(90deg, #1565c0, #1e88e5)", // Hover effect
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            Send Message
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ContactSection;
