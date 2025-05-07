import React, { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  MenuItem,
} from "@mui/material";

interface TypeFilterProps {
  onTypeChange: (type: string) => void;
}

const TypeFilter: React.FC<TypeFilterProps> = ({ onTypeChange }) => {
  const [selectedType, setSelectedType] = useState<string>("");

  const handleChange = (_event: SelectChangeEvent<string>) => {
    const { value } = _event.target;
    setSelectedType(value);
    onTypeChange(value);
  };

  return (
    <Box sx={{ marginBottom: 4, textAlign: "center" }}>
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel id="type-filter-label">Trier par type</InputLabel>
        <Select
          labelId="type-filter-label"
          value={selectedType}
          onChange={handleChange}
        >
          <MenuItem value="">Tous</MenuItem>
          <MenuItem value="Lit">Lit</MenuItem>
          <MenuItem value="Fauteuil">Fauteuil</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default TypeFilter;
