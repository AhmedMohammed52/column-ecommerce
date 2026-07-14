import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const isAuthenticated = false; // Replace with your authentication logic

  return isAuthenticated ? <Outlet /> : <Navigate to="./login" replace/>;
}
