import { Button, Grid, Heading } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { COVID_QUESTIONNAIRE } from "../../../constants/apiRoutes";
import api from "../../../services/api";
import { useAuth } from "../../../services/auth";
import { formattedErrorMessage } from "../../../utils/formattedErrorMessage";
import useCustomToastr from "../../../utils/useCustomToastr";
import { Layout } from "../../common";
import { InputField, NumberField, SelectField } from "../../formik";

const CovidQuestionnaire = (props) => {
  const toast = useCustomToastr();
  const { user } = useAuth();
  const [questionnaire, setQuestionnaire] = React.useState(null);

  const questionnaireSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    age: Yup.number().required("Required"),
    has_cold: Yup.number().required("Required"),
    has_fever: Yup.number().required("Required"),
    has_cough: Yup.number().required("Required"),
    has_weakness: Yup.number().required("Required"),
    has_sour_throat: Yup.number().required("Required"),
    has_body_pains: Yup.number().required("Required"),
    covid_test: Yup.number().required("Required"),
    other_symptoms: Yup.string(),
  });

  const initialValues = {
    name: "",
    email: "",
    age: "",
    has_cold: 1,
    has_fever: 1,
    has_cough: 1,
    has_weakness: 1,
    has_sour_throat: 1,
    has_body_pains: 1,
    other_symptoms: "",
    covid_test: 0,
    ...questionnaire?.message,
  };

  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    const data = {
      updated_at: new Date().toISOString(),
      user_id: user.user_id,
      ...values,
    };
    api
      .post(COVID_QUESTIONNAIRE, data)
      .then((response) => {
        toast.showSuccess("Success! Questionnaire submitted!");
        setSubmitting(false);
      })
      .catch((error) => {
        const e = formattedErrorMessage(error);
        toast.showError(e);
        setSubmitting(false);
      });
  };

  React.useEffect(() => {
    api
      .get("/get_covid_details")
      .then((response) => {
        const { data } = response;
        setQuestionnaire(data);
      })
      .catch((error) => {
        const e = formattedErrorMessage(error);
        toast.showError(e);
      });
  }, []);

  return (
    <Layout>
      {questionnaire?.message?.user_id === user.user_id && <Heading mb="5">You have already submitted the questionnaire</Heading>}

      <Formik initialValues={initialValues} validationSchema={questionnaireSchema} onSubmit={onSubmit} enableReinitialize={true}>
        {(props) => (
          <Form autoComplete="off">
            <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} gap={6} mb="5">
              <InputField isInline={false} direction="column" label="Name" name="name" isRequired />
              <InputField isInline={false} direction="column" label="Email" name="email" isRequired />
              <NumberField {...props} label="Age" name="age" isRequired />
              <SelectField
                {...props}
                name="has_cold"
                label="Has Cold?"
                placeholder="Select"
                isRequired
                options={[
                  { value: 1, label: "Yes" },
                  { value: 0, label: "No" },
                ]}
              />
              <SelectField
                {...props}
                name="has_fever"
                label="Has Fever?"
                placeholder="Select"
                isRequired
                options={[
                  { value: 1, label: "Yes" },
                  { value: 0, label: "No" },
                ]}
              />
              <SelectField
                {...props}
                name="has_cough"
                label="Has Cough?"
                placeholder="Select"
                isRequired
                options={[
                  { value: 1, label: "Yes" },
                  { value: 0, label: "No" },
                ]}
              />
              <SelectField
                {...props}
                name="has_weakness"
                label="Has Weakness?"
                placeholder="Select"
                isRequired
                options={[
                  { value: 1, label: "Yes" },
                  { value: 0, label: "No" },
                ]}
              />
              <SelectField
                {...props}
                name="has_sour_throat"
                label="Has Sour Throat?"
                placeholder="Select"
                isRequired
                options={[
                  { value: 1, label: "Yes" },
                  { value: 0, label: "No" },
                ]}
              />
              <SelectField
                {...props}
                name="has_body_pains"
                label="Has Body Pains?"
                placeholder="Select"
                isRequired
                options={[
                  { value: 1, label: "Yes" },
                  { value: 0, label: "No" },
                ]}
              />
              <SelectField
                {...props}
                name="covid_test"
                label="Covid Test"
                placeholder="Select"
                isRequired
                options={[
                  { value: 1, label: "Yes" },
                  { value: 0, label: "No" },
                ]}
              />
              <InputField isInline={false} direction="column" label="Other Symptoms" name="other_symptoms" />
              {/* submit button */}
              <Button
                colorScheme="green"
                type="submit"
                isLoading={props.isSubmitting}
                disabled={questionnaire?.message?.user_id === user.user_id}
              >
                Save
              </Button>
            </Grid>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default CovidQuestionnaire;
