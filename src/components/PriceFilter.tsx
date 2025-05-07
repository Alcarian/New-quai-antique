import React, { useState } from "react";
import { Box, Slider, Typography } from "@mui/material";

interface PriceFilterProps {
  onPriceChange: (min: number, max: number) => void;
}

const PriceFilter: React.FC<PriceFilterProps> = ({ onPriceChange }) => {
  const [priceRange, setPriceRange] = useState<number[]>([0, 2000]);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setPriceRange(newValue);
      onPriceChange(newValue[0], newValue[1]);
    }
  };

  return (
    <Box
      sx={{ marginBottom: 4, padding: { xs: 1, sm: 2 }, textAlign: "center" }}
    >
      <Typography variant="h6" gutterBottom>
        Filtrer par prix
      </Typography>
      <Slider
        value={priceRange}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0}
        max={2000}
        step={50}
        sx={{ width: "30%", marginX: "auto" }}
      />
      <Typography variant="body2" sx={{ marginTop: 2 }}>
        Prix : {priceRange[0]}€ - {priceRange[1]}€
      </Typography>
    </Box>
  );
};

export default PriceFilter;
