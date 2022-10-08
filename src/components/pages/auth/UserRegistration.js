import React from "react";
import { useAuth } from "../../../services/auth";
import { Form, Formik } from "formik";
import { InputField, PasswordField } from "../../formik";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Box, Flex, Text, Button, Stack } from "@chakra-ui/react";

const UserRegistration = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const registrationFormSchema = Yup.object().shape({
    email: Yup.string().min(2, "Too Short!").required("Required"),
    password: Yup.string().min(2, "Too Short!").required("Required"),
  });

  // Initial Values Displayed in Registration Form
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    localStorage.setItem("auth", JSON.stringify({ user: { name: "Janmejay", role: "admin", id: 1 }, token: "12345" }));
    navigate(`/login`);
    setSubmitting(false);
  };

  return user?.role ? (
    <Navigate to={`/${user.role}/home`} replace />
  ) : (
    <Flex bg="white" pos="fixed" top="0" left="0" right="0" bottom="0" zIndex={2}>
      <Flex
        w={"70%"}
        // eslint-disable-next-line no-undef
        backgroundImage={`url(${require("../../../assets/home.png")})`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        d={{ sm: "none", lg: "flex" }}
        backgroundSize="cover"
        p="10"
      ></Flex>
      <Flex w={{ base: "100%", lg: "50%" }} direction="column" align="center" justify="center">
        <Text fontSize="2xl" fontWeight="600" textAlign="left">
          User Registration
        </Text>
        <Box w={"60%"} mt={10}>
          <Formik initialValues={initialValues} validationSchema={registrationFormSchema} onSubmit={onSubmit} enableReinitialize={true}>
            {(props) => (
              <Form autoComplete="off">
                <Stack mx="3" spacing={5}>
                  <InputField isInline={false} direction="column" label="Email" name="email" isRequired />
                  <PasswordField isInline={false} direction="column" label="Password" name="password" isRequired />
                  {/* submit button */}
                  <Button colorScheme="green" type="submit" isLoading={props.isSubmitting}>
                    Register
                  </Button>
                  <Link to="/login">
                    <Text fontSize="sm">Back to Login</Text>
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

export default UserRegistration;
