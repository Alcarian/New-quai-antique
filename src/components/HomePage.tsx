import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        color: "#333",
        padding: { xs: 2, sm: 4 },
      }}
    >
      <Box
        component="header"
        sx={{
          py: { xs: 2, sm: 4 },
          backgroundColor: "#007BFF",
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", fontSize: { xs: "1.5rem", sm: "2rem" } }}
        >
          Bienvenue chez Resto Antique
        </Typography>
        <Typography
          variant="h6"
          sx={{ mt: 1, fontSize: { xs: "1rem", sm: "1.25rem" } }}
        >
          Découvrez l'élégance intemporelle de nos meubles antiques
        </Typography>
      </Box>
      <Container sx={{ flex: 1, mt: 4, textAlign: "center" }}>
        <Typography
          variant="body1"
          sx={{ mb: 4, fontSize: { xs: "1rem", sm: "1.2rem" } }}
        >
          Chez Resto Antique, nous croyons que chaque meuble raconte une
          histoire. Explorez notre collection soigneusement sélectionnée de
          lits, fauteuils, armoires et bien plus encore, tous conçus pour
          ajouter une touche de charme et d'élégance à votre intérieur.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            px: { xs: 2, sm: 4 },
            py: { xs: 1, sm: 2 },
            fontSize: { xs: "0.875rem", sm: "1rem" },
          }}
          onClick={() => navigate("/produits")}
        >
          Explorer nos produits
        </Button>
      </Container>
    </Box>
  );
};

export default HomePage;
