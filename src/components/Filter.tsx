import React, { useState } from "react";
import { TextField, Box } from "@mui/material";

interface FilterProps {
  onFilter: (query: string) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilter }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    onFilter(value);
  };

  return (
    <Box
      sx={{
        marginBottom: 4,
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#f8f9fa",
        padding: { xs: 1, sm: 2 },
        borderRadius: 2,
        width: "100%",
        maxWidth: "600px",
        marginX: "auto",
      }}
    >
      <TextField
        label="Rechercher un produit"
        variant="outlined"
        value={query}
        onChange={handleInputChange}
        sx={{ width: "50%" }}
      />
    </Box>
  );
};

export default Filter;
