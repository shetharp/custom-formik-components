import * as React from "react";
import {
  Formik,
  FormikProps,
  Field,
  Form,
  FieldProps,
  ErrorMessage
} from "formik";
import { ShowFormState } from "../components/ShowFormState";
import { TextInputField } from "../components/TextInputField";
import { TextInput } from "../components/TextInput";
import * as Yup from "yup";

interface ExampleFormValues {
  firstname: string;
  email: string;
}

const SignupSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, "Too short!")
    .max(70, "Too long!")
    .required("Required."),
  email: Yup.string()
    .email("Invalid email.")
    .required("Required.")
});

export const TextInputFormik = props => {
  return (
    <Formik
      initialValues={{
        firstname: "",
        email: ""
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
      }}
      render={(formikBag: FormikProps<ExampleFormValues>) => (
        <Form>
          <ShowFormState values={formikBag.values} />
          <p>
            First Name
            <br />
            <Field name="firstname" component={TextInputField} />
          </p>
          <p>
            Email
            <br />
            <Field name="email" component={TextInputField} type="email" />
            {/* <ErrorMessage name="email" /> */}
          </p>
        </Form>
      )}
    />
  );
};
