import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

    if (email === adminEmail && password === adminPassword) {
      const token = "secure-admin-token"; // Exemple de token sécurisé
      localStorage.setItem("adminToken", token);
      localStorage.setItem("tokenExpiry", (Date.now() + 3600000).toString()); // Expiration dans 1 heure
      navigate("/admin"); // Rediriger vers l'interface admin
    } else {
      setError("Identifiants incorrects. Veuillez réessayer.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        padding: 4,
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 4 }}>
        Connexion Administrateur
      </Typography>
      <TextField
        label="Adresse e-mail"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2, maxWidth: 400 }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Mot de passe"
        type="password"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2, maxWidth: 400 }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && (
        <Typography color="error" sx={{ marginBottom: 2 }}>
          {error}
        </Typography>
      )}
      <Button
        variant="contained"
        color="primary"
        sx={{ maxWidth: 400 }}
        onClick={handleLogin}
      >
        Se connecter
      </Button>
    </Box>
  );
};

export default Login;
