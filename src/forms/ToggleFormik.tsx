import * as React from "react";
import { Formik, FormikProps, Field, Form, FieldProps } from "formik";
import { ShowFormState } from "../components/ShowFormState";
import { CheckboxField } from "../components/CheckboxField";

interface ExampleFormValues {
  check1: boolean;
  check2: boolean;
  check3: boolean;
}

export const ToggleFormik = props => {
  return (
    <Formik
      initialValues={{
        check1: false,
        check2: true,
        check3: false
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
      }}
      render={(formikBag: FormikProps<ExampleFormValues>) => (
        <Form>
          <ShowFormState values={formikBag.values} />
          <Field
            name="check1"
            component={CheckboxField}
            label="1 Default behavior"
          />
          <Field
            name="check2"
            component={CheckboxField}
            label="2 Checked by default"
            defaultChecked
          />
          <Field
            name="check3"
            component={CheckboxField}
            label="3 Has indeterminate state"
            indeterminate
          />
        </Form>
      )}
    />
  );
};
