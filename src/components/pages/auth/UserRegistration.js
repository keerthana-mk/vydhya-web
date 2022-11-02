import React from "react";
import { useAuth } from "../../../services/auth";
import { Form, Formik } from "formik";
import { InputField, PasswordField, SelectField } from "../../formik";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Box, Flex, Text, Button, Stack } from "@chakra-ui/react";

const UserRegistration = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const registrationFormSchema = Yup.object().shape({
    user_id: Yup.string().min(2, "Too Short!").required("Required"),
    user_email: Yup.string().min(2, "Too Short!").required("Required"),
    user_password: Yup.string().min(2, "Too Short!").required("Required"),
    first_name: Yup.string().min(2, "Too Short!").required("Required"),
    last_name: Yup.string().min(2, "Too Short!").required("Required"),
    user_role: Yup.string().min(2, "Too Short!").required("Required"),
  });

  // Initial Values Displayed in Registration Form
  const initialValues = {
    user_id: "",
    user_email: "",
    user_password: "",
    first_name: "",
    last_name: "",
    user_role: "",
  };

  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    // localStorage.setItem("auth", JSON.stringify({ user: { name: "Janmejay", role: "admin", id: 1 }, token: "12345" }));
    // navigate(`/login`);
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
          User Registration
        </Text>
        <Box w={"60%"} mt={10}>
          <Formik initialValues={initialValues} validationSchema={registrationFormSchema} onSubmit={onSubmit} enableReinitialize={true}>
            {(props) => (
              <Form autoComplete="off">
                <Stack mx="3" spacing={5}>
                  <InputField isInline={false} direction="column" name="user_id" label="User ID" placeholder="Enter User ID" />
                  <InputField isInline={false} direction="column" label="Email" name="user_email" isRequired />
                  <PasswordField isInline={false} direction="column" label="Password" name="user_password" isRequired />
                  <InputField isInline={false} direction="column" name="first_name" label="First Name" placeholder="Enter First Name" />
                  <InputField isInline={false} direction="column" name="last_name" label="Last Name" placeholder="Enter Last Name" />
                  <SelectField
                    name="user_role"
                    label="User Role"
                    placeholder="Select User Role"
                    options={[
                      { value: "patient", label: "Patient" },
                      { value: "doctor", label: "Doctor" },
                      { value: "admin", label: "Admin" },
                    ]}
                  />
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
