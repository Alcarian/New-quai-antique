import React from "react";
import { Navigate } from "react-router-dom";

interface AdminGuardProps {
  children: React.ReactNode;
}

const AdminGuard: React.FC<AdminGuardProps> = ({ children }) => {
  const token = localStorage.getItem("adminToken");
  const tokenExpiry = localStorage.getItem("tokenExpiry");

  // Vérification de l'expiration du token
  if (!tokenExpiry || Date.now() > parseInt(tokenExpiry, 10)) {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("tokenExpiry");
    return <Navigate to="/login" replace />; // Redirige vers la page de connexion si le token a expiré
  }

  // Vérification du token (à remplacer par une vérification côté serveur dans un environnement réel)
  const isValidToken = token === "secure-admin-token"; // Exemple de token sécurisé

  if (!isValidToken) {
    return <Navigate to="/login" replace />; // Redirige vers la page de connexion si le token est invalide
  }

  return <>{children}</>; // Affiche les enfants si le token est valide
};

export default AdminGuard;
