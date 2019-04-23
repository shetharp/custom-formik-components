import * as React from "react";
import { Formik, FormikProps, Field, Form, FieldProps } from "formik";
import { ShowFormState } from "../components/ShowFormState";
import { ConnectedCheckbox } from "../components/ConnectedCheckbox";

interface ExampleFormValues {
  check4: boolean;
  check5: boolean;
  check6: boolean;
}

export const ReadOnlyFormik = props => {
  return (
    <Formik
      initialValues={{
        check4: false,
        check5: true,
        check6: true
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
      }}
      render={(formikBag: FormikProps<ExampleFormValues>) => (
        <Form>
          <ShowFormState values={formikBag.values} />
          <Field
            name="check4"
            component={ConnectedCheckbox}
            label="4 Unchecked and readonly"
            checked={false}
            readOnly
          />
          <Field
            name="check5"
            component={ConnectedCheckbox}
            label="4 Checked and readonly"
            checked={true}
            readOnly
          />
          <Field
            name="check6"
            component={ConnectedCheckbox}
            label="5 Indeterminate and readonly"
            indeterminate
            checked={true}
            readOnly
          />
        </Form>
      )}
    />
  );
};
