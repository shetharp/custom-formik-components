import * as React from "react";
import { Formik, FormikProps, Field, Form, FieldProps } from "formik";
import { ShowFormState } from "../components/ShowFormState";
import { CheckboxField } from "../components/CheckboxField";

interface ExampleFormValues {
  check7: boolean;
  check8: boolean;
  check9: boolean;
}

export const DisabledFormik = props => {
  return (
    <Formik
      initialValues={{
        check7: false,
        check8: true,
        check9: true
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
      }}
      render={(formikBag: FormikProps<ExampleFormValues>) => (
        <Form>
          <ShowFormState values={formikBag.values} />
          <Field
            name="check7"
            component={CheckboxField}
            label="7 Unchecked and disabled"
            disabled
          />
          <Field
            name="check8"
            component={CheckboxField}
            label="8 Checked and disabled"
            defaultChecked
            disabled
          />
          <Field
            name="check9"
            component={CheckboxField}
            label="9 Indeterminate and disabled"
            indeterminate
            checked
            disabled
          />
        </Form>
      )}
    />
  );
};
