import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoute = ({ access, redirectPath }) => {
  if (access) return <Navigate to={redirectPath} replace />;
  return <Outlet />;
};
