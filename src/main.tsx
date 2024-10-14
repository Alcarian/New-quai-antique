import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./index.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@mui/material";
import quaiAntique from "./lib/theme/customTheme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={quaiAntique}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
        <SnackbarProvider>
          <App />
        </SnackbarProvider>
      </LocalizationProvider>
    </ThemeProvider>
  </StrictMode>,
);
