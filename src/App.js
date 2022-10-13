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
import { Login } from "./components/pages/auth";
import { Lost } from "./components/pages";
import { ResponseInterceptor } from "./components/utils/ResponseInterceptor";
import { useAuth } from "./services/auth";
import api from "./services/api";
import WithAdmin from "./hocs/WithAdmin";
import Main from "./components/pages/home/Main";
import Landing from "./components/pages/landingpage/Landing";
import UserRegistration from "./components/pages/auth/UserRegistration";

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
        <Route path="admin" element={<WithAdmin />}>
          <Route path="home" element={<Main />} />
        </Route>
        <Route path="*" element={<Lost />} />
      </Routes>
    </ChakraProvider>
  );
};

export default App;
