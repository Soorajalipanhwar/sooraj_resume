import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import { useThemeContext } from "../contexts/ThemeContext";

const ContactSection: React.FC = () => {
  const { mode } = useThemeContext();
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxdoN8cJz73T3qaps78jTcmNvI8iXLerIaDHZswDh8xtotPNnlN1KFNiKGOOx02w6hg0w/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setSnackbarMessage("Message sent successfully!");
        setSnackbarSeverity("success");
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error!", error);
      setSnackbarMessage("Failed to send message. Please try again later.");
      setSnackbarSeverity("error");
    } finally {
      setLoading(false);
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
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
        px: { xs: 2, sm: 4 },
        py: { xs: 4, sm: 6 },
        background: "none",
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
          fontSize: { xs: "1.8rem", sm: "2.125rem" },
          textAlign: "center",
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
          px: { xs: 2, sm: 0 },
          fontSize: { xs: 14, sm: 16 },
        }}
      >
        Have a question or want to work together? Fill out the form below, and
        I'll get back to you as soon as possible!
      </Typography>

      {/* Contact Form */}
      <Paper
        elevation={5}
        sx={{
          width: "100%",
          maxWidth: "700px",
          background: mode === "dark" ? "#1e1e2f" : "#ffffff",
          borderRadius: { xs: 6, sm: 8 },
          p: { xs: 3, sm: 5 },
          boxShadow:
            mode === "dark"
              ? "0 8px 30px rgba(0, 0, 0, 0.7)"
              : "0 8px 30px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Box
          component="form"
          name="submit-to-google-sheet"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 3, sm: 4 },
          }}
        >
          {/* Name and Email Fields */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 2, sm: 3 },
            }}
          >
            <TextField
              fullWidth
              label="Your Name"
              name="name"
              variant="outlined"
              required
              InputProps={{
                sx: {
                  color: mode === "dark" ? "#ffffff" : "#333333",
                  fontSize: { xs: 14, sm: 16 },
                },
              }}
              InputLabelProps={{
                sx: {
                  color: mode === "dark" ? "#90caf9" : "#1976d2",
                  fontSize: { xs: 14, sm: 16 },
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 4,
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
                sx: {
                  color: mode === "dark" ? "#ffffff" : "#333333",
                  fontSize: { xs: 14, sm: 16 },
                },
              }}
              InputLabelProps={{
                sx: {
                  color: mode === "dark" ? "#90caf9" : "#1976d2",
                  fontSize: { xs: 14, sm: 16 },
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 4,
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
              sx: {
                color: mode === "dark" ? "#ffffff" : "#333333",
                fontSize: { xs: 14, sm: 16 },
              },
            }}
            InputLabelProps={{
              sx: {
                color: mode === "dark" ? "#90caf9" : "#1976d2",
                fontSize: { xs: 14, sm: 16 },
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 4,
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
            disabled={loading}
            sx={{
              fontWeight: 700,
              background: "linear-gradient(90deg, #1976d2, #42a5f5)",
              color: "#ffffff",
              borderRadius: 8,
              boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
              height: "48px",
              fontSize: { xs: 14, sm: 16 },
              "&:hover": {
                background: "linear-gradient(90deg, #1565c0, #1e88e5)",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
              },
              "&.Mui-disabled": {
                background: "linear-gradient(90deg, #1976d2, #42a5f5)",
                opacity: 0.7,
              },
            }}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Send Message"
            )}
          </Button>
        </Box>
      </Paper>

      {/* Success/Error Notification */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactSection;
