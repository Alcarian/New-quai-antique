import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import productsData from "../data/products";
import Filter from "./Filter";
import PriceFilter from "./PriceFilter";
import TypeFilter from "./TypeFilter";

const ProductsPage: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const navigate = useNavigate();

  // Cette fonction gère le changement de filtre de recherche par nom.
  // Elle met à jour les produits filtrés en fonction de la requête de recherche entrée par l'utilisateur.
  const handleFilter = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = productsData.filter((product) =>
      product.name.toLowerCase().includes(lowerCaseQuery),
    );
    setFilteredProducts(filtered);
  };

  // Cette fonction gère le changement de la fourchette de prix.
  // Elle met à jour les produits filtrés en fonction de la plage de prix sélectionnée par l'utilisateur.
  const handlePriceChange = (min: number, max: number) => {
    const filtered = productsData.filter((product) => {
      const price = parseInt(product.price.replace("€", ""), 10);
      return price >= min && price <= max;
    });
    setFilteredProducts(filtered);
  };

  // Cette fonction gère le changement de type de produit (Lit ou Fauteuil).
  // Elle met à jour les produits filtrés en fonction du type sélectionné par l'utilisateur.
  const handleTypeChange = (type: string) => {
    const filtered = productsData.filter((product) =>
      type === ""
        ? true
        : product.name.toLowerCase().includes(type.toLowerCase()),
    );
    setFilteredProducts(filtered);
  };

  // Effet déclenché lors du premier rendu pour trier les produits par prix,  du plus petit au plus grand..
  useEffect(() => {
    const sorted = [...filteredProducts].sort((a, b) => {
      const priceA = parseInt(a.price.replace("€", ""), 10);
      const priceB = parseInt(b.price.replace("€", ""), 10);
      return priceA - priceB;
    });
    setFilteredProducts(sorted);
  }, []);

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        sx={{ marginBottom: 2 }}
        onClick={() => navigate("/")}
      >
        Retour à l'accueil
      </Button>
      <Filter onFilter={handleFilter} />
      <PriceFilter onPriceChange={handlePriceChange} />
      <TypeFilter onTypeChange={handleTypeChange} />
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        sx={{ padding: { xs: 2, sm: 4 } }}
      >
        {filteredProducts.map((product) => (
          <Grid
            key={product.id}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                maxWidth: 345,
                width: "100%",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: { xs: "1rem", sm: "1.25rem" },
                  }}
                >
                  {product.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    textAlign: "center",
                    marginY: 1,
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                  }}
                >
                  {product.description}
                </Typography>
                <Typography
                  variant="body1"
                  color="primary"
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: { xs: "1rem", sm: "1.25rem" },
                  }}
                >
                  {product.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductsPage;
