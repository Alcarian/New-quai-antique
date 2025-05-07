import React from "react";
import { Box, Typography, Container } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ py: 3, mt: 4, backgroundColor: "#f5f5f5" }}>
      <Container>
        <Typography variant="body1">
          Resto Antique - Contactez-nous :
          <a
            href="mailto:contact@restoantique.com"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            contact@restoantique.com
          </a>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          © 2025 Resto Antique. Tous droits réservés.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
