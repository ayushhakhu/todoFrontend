import { Routes, Route } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../hooks/AuthContext";

const ToDoListPage = React.lazy(() =>
  import("../components/pages/ToDoListPage")
);
const LoginPage = React.lazy(() => import("../components/pages/LoginPage"));
const SignupPage = React.lazy(() => import("../components/pages/SignupPage"));

const WelcomePage = React.lazy(() => import("../components/pages/WelcomePage"));

export const AppRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Routes>
      {!isAuthenticated && <Route path="/login" element={<LoginPage />} />}
      {!isAuthenticated && <Route path="/signup" element={<SignupPage />} />}
      <Route
        path="/"
        element={!isAuthenticated ? <WelcomePage /> : <ToDoListPage />}
      />
    </Routes>
  );
};
