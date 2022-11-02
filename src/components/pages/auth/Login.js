import React from "react";
import { Box, Flex, Text, Button, Stack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { InputField, PasswordField } from "../../formik";
import * as Yup from "yup";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../../services/auth";
import api from "../../../services/api";
import { LOGIN } from "../../../constants/apiRoutes";
import useCustomToastr from "../../../utils/useCustomToastr";
import { formattedErrorMessage } from "../../../utils/formattedErrorMessage";
import { LOGIN_STUB } from "../../../constants/APIRESPONSES";

const Login = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const toast = useCustomToastr();

  const loginFormSchema = Yup.object().shape({
    user_id: Yup.string().min(2, "Too Short!").required("Required"),
    user_password: Yup.string().min(2, "Too Short!").required("Required"),
  });

  const initialValues = {
    user_id: "",
    user_password: "",
  };

  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    if (!LOGIN_STUB[values.user_id]) {
      setSubmitting(false);
      return toast.showError({ description: "Invalid credentials" });
    }
    const { role, username, token } = LOGIN_STUB[values.user_id];
    // api
    //   .post(LOGIN, values)
    //   .then((response) => {
    //     const { token, userId, username, role } = response.data;
    //     localStorage.setItem("auth", JSON.stringify({ user: { userId, role, username }, token }));
    //     navigate(`/${role}/home`);
    //   })
    //   .catch((error) => {
    //     const e = formattedErrorMessage(error);
    //     toast.showError(e);
    //     setSubmitting(false);
    //   });
    localStorage.setItem("auth", JSON.stringify({ user: { username, role }, token }));
    navigate(`/${role}/home`);
    setSubmitting(false);
  };

  return user?.role ? (
    <Navigate to={`/${user.role}/home`} replace />
  ) : (
    <Flex bg="white" pos="fixed" top="0" left="0" right="0" bottom="0" zIndex={2}>
      <Link to="/">
        <Text fontSize="xl" fontWeight="bold" cursor="pointer" p="6">
          YDHYA
        </Text>
      </Link>
      <Flex
        w={"50%"}
        // eslint-disable-next-line no-undef
        backgroundImage={`url(${require("../../../assets/WelcomeImage.png")})`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
        d={{ sm: "none", lg: "flex" }}
        m="10"
      ></Flex>
      <Flex w={{ base: "100%", lg: "50%" }} direction="column" align="center" justify="center">
        <Text fontSize="2xl" fontWeight="600" textAlign="left">
          Dashboard Login!
        </Text>
        <Box w={"60%"} mt={10}>
          <Formik initialValues={initialValues} validationSchema={loginFormSchema} onSubmit={onSubmit} enableReinitialize={true}>
            {(props) => (
              <Form autoComplete="off">
                <Stack mx="3" spacing={5}>
                  <InputField isInline={false} direction="column" label="Email" name="user_id" isRequired />
                  <PasswordField isInline={false} direction="column" label="Password" name="user_password" isRequired />
                  {/* submit button */}
                  <Button colorScheme="green" type="submit" isLoading={props.isSubmitting}>
                    Login
                  </Button>
                  <Link to="/reset-credentials">
                    <Text fontSize="sm">Reset Credentials?</Text>
                  </Link>
                  <Link to="/register">
                    <Text fontSize="sm">New User?</Text>
                  </Link>
                </Stack>
              </Form>
            )}
          </Formik>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Login;
