import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";
import { Product } from "../components/AdminDashboard";

interface EditProductModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
  onSave: (updatedProduct: Product) => void;
}

const EditProductModal: React.FC<EditProductModalProps> = ({
  product,
  open,
  onClose,
  onSave,
}) => {
  const [updatedProduct, setUpdatedProduct] = useState<Product | null>(product);

  React.useEffect(() => {
    setUpdatedProduct(product);
  }, [product]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (updatedProduct) {
      const { name, value } = e.target;
      setUpdatedProduct({ ...updatedProduct, [name]: value });
    }
  };

  const handleSave = () => {
    if (updatedProduct) {
      onSave(updatedProduct);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Modifier le produit</DialogTitle>
      <DialogContent>
        <TextField
          label="Nom"
          name="name"
          value={updatedProduct?.name || ""}
          onChange={handleInputChange}
          fullWidth
          sx={{ marginBottom: 2, marginTop: 2 }}
        />
        <TextField
          label="Description"
          name="description"
          value={updatedProduct?.description || ""}
          onChange={handleInputChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Prix"
          name="price"
          value={updatedProduct?.price || ""}
          onChange={handleInputChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Image (URL)"
          name="image"
          value={updatedProduct?.image || ""}
          onChange={handleInputChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Annuler
        </Button>
        <Button onClick={handleSave} color="primary" variant="contained">
          Sauvegarder
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditProductModal;
