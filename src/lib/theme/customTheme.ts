import { frFR as coreFrFR } from "@mui/material/locale";
import { createTheme } from "@mui/material";
import { frFR } from "@mui/x-data-grid/locales";
import { frFR as pickersFrFR } from "@mui/x-date-pickers/locales";
import defaultTheme from "./defaultTheme";

const quaiAntique = createTheme(defaultTheme, frFR, pickersFrFR, coreFrFR);

export default quaiAntique;
