import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import productsData from "../data/products";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

const AdminDashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(productsData);
  const [newProduct, setNewProduct] = useState<Product>({
    id: 0,
    name: "",
    description: "",
    price: "",
    image: "",
  });
  const [editProduct, setEditProduct] = useState<Product | null>(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);

  // Gère les changements dans les champs de texte pour ajouter ou éditer un produit
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (editProduct) {
      setEditProduct({ ...editProduct, [name]: value });
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  };

  // Ajoute un nouveau produit à la liste
  const handleAddProduct = () => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    setNewProduct({ id: 0, name: "", description: "", price: "", image: "" });
  };

  // Ouvre la modal de confirmation de suppression
  const handleOpenDeleteModal = (product: Product) => {
    setProductToDelete(product);
    setOpenDeleteModal(true);
  };

  // Ferme la modal de confirmation de suppression
  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
    setProductToDelete(null);
  };

  // Supprime un produit après confirmation
  const handleDeleteProduct = () => {
    if (productToDelete) {
      setProducts(
        products.filter((product) => product.id !== productToDelete.id),
      );
      handleCloseDeleteModal();
    }
  };

  // Ouvre le formulaire d'édition pour un produit
  const handleEditProduct = (product: Product) => {
    setEditProduct(product);
  };

  // Sauvegarde les modifications apportées à un produit
  const handleSaveEdit = () => {
    if (editProduct) {
      setProducts(
        products.map((product) =>
          product.id === editProduct.id ? editProduct : product,
        ),
      );
      setEditProduct(null);
    }
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <Typography
        variant="h4"
        sx={{ marginBottom: 4, textAlign: "center", fontWeight: "bold" }}
      >
        Interface Administrateur
      </Typography>

      <Box
        sx={{
          marginBottom: 4,
          padding: 3,
          backgroundColor: "white",
          borderRadius: 2,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: "bold" }}>
          {editProduct ? "Modifier un produit" : "Ajouter un produit"}
        </Typography>
        <TextField
          label="Nom"
          name="name"
          value={editProduct ? editProduct.name : newProduct.name}
          onChange={handleInputChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Description"
          name="description"
          value={editProduct ? editProduct.description : newProduct.description}
          onChange={handleInputChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Prix"
          name="price"
          value={editProduct ? editProduct.price : newProduct.price}
          onChange={handleInputChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Image (URL)"
          name="image"
          value={editProduct ? editProduct.image : newProduct.image}
          onChange={handleInputChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        {editProduct ? (
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveEdit}
            sx={{ width: "100%", padding: 1.5, fontSize: "1rem" }}
          >
            Sauvegarder
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddProduct}
            sx={{ width: "100%", padding: 1.5, fontSize: "1rem" }}
          >
            Ajouter
          </Button>
        )}
      </Box>

      <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: "bold" }}>
        Liste des produits
      </Typography>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid key={product.id}>
            <Card
              sx={{
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", textAlign: "center" }}
                >
                  {product.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textAlign: "center", marginY: 1 }}
                >
                  {product.description}
                </Typography>
                <Typography
                  variant="body1"
                  color="primary"
                  sx={{ textAlign: "center", fontWeight: "bold" }}
                >
                  {product.price}
                </Typography>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleOpenDeleteModal(product)}
                  sx={{ marginTop: 2, width: "100%", padding: 1 }}
                >
                  Supprimer
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleEditProduct(product)}
                  sx={{ marginTop: 2, width: "100%", padding: 1 }}
                >
                  Modifier
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal de confirmation de suppression */}
      <Dialog
        open={openDeleteModal}
        onClose={handleCloseDeleteModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Confirmer la suppression
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Êtes-vous sûr de vouloir supprimer ce produit ? Cette action est
            irréversible.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteModal} color="primary">
            Annuler
          </Button>
          <Button onClick={handleDeleteProduct} color="error" autoFocus>
            Supprimer
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AdminDashboard;
