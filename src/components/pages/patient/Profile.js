import { Button, Stack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import Layout from "../../common/Layout";
import { InputField } from "../../formik";
import * as Yup from "yup";
import { useAuth } from "../../../services/auth";

const Profile = () => {
  const { user } = useAuth();

  const profileFormSchema = Yup.object().shape({
    email: Yup.string().min(2, "Too Short!").required("Required"),
    password: Yup.string().min(2, "Too Short!").required("Required"),
  });

  const initialValues = {
    name: user.username,
    email: user.email,
    password: "",
  };
  return (
    <Layout>
      <Stack>
        <Formik initialValues={initialValues} validationSchema={profileFormSchema} onSubmit={() => {}} enableReinitialize={true}>
          {(props) => (
            <Form autoComplete="off">
              <Stack mx="3" spacing={5}>
                <InputField isInline={false} direction="column" label="Name" name="name" isRequired />
                <InputField isInline={false} direction="column" label="Address" name="address" isRequired />
                <InputField isInline={false} direction="column" label="Phone Number" name="number" isRequired />
                <InputField isInline={false} direction="column" label="Color Scheme" name="number" isRequired />
                {/* submit button */}
                <Button colorScheme="green" type="submit" isLoading={props.isSubmitting}>
                  Save
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Stack>
    </Layout>
  );
};

export default Profile;
