import React from "react";

// CSS Imports
import "./App.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "react-datepicker/dist/react-datepicker.css";
import customTheme from "./styles/theme";

//Other Imports
import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { Login, UserRegistration, ResetCredentials } from "./components/pages/auth";
import { Lost } from "./components/pages";
import { ResponseInterceptor } from "./components/utils/ResponseInterceptor";
import { useAuth } from "./services/auth";
import api from "./services/api";
import WithCustomer from "./hocs/WithCustomer";
import WithInsurer from "./hocs/WithInsurer";
import Main from "./components/pages/home/Main";
import Landing from "./components/pages/landingpage/Landing";
import { ViewDoctors } from "./components/pages/home";
import Profile from "./components/pages/home/Profile";
import InsurerMain from "./components/pages/insurer/InsurerMain";
import ViewPlans from "./components/pages/insurer/ViewPlans";

const App = () => {
  const { token } = useAuth();
  api.setHeader(token);

  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <ResponseInterceptor />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<UserRegistration />} />
        <Route path="reset-credentials" element={<ResetCredentials />} />
        <Route path="customer" element={<WithCustomer />}>
          <Route path="home" element={<Main />} />
          <Route path="doctors" element={<ViewDoctors />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="insurer" element={<WithInsurer />}>
          <Route path="home" element={<InsurerMain />} />
          <Route path="insurances" element={<ViewPlans />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<Lost />} />
      </Routes>
    </ChakraProvider>
  );
};

export default App;
