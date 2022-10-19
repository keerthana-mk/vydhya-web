import React from "react";
import { Outlet } from "react-router-dom";
import { redirectToLogin, useAuth } from "../services/auth";
import api from "../services/api";

function WithCustomer() {
  const { user = null, token } = useAuth();
  api.setHeader(token);
  return user && user.role === "customer" ? <Outlet /> : redirectToLogin();
}

export default WithCustomer;
