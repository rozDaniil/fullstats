import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ResetPassword } from "./pages/ResetPassword";
import { ProtectedRoute } from "./routes/ProtectedRoute";

function App() {
  const { isAuth } = useSelector(({ authSlice }) => authSlice);
  return (
    <Routes>
      <Route index element={<Home isLogged={isAuth} />} />
      <Route element={<ProtectedRoute redirectPath="/" access={isAuth} />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="reset" element={<ResetPassword />} />
      </Route>
    </Routes>
  );
}

export default App;
