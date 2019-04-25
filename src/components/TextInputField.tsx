import * as React from "react";
import styled from "styled-components";
import { ErrorMessage } from "formik";
import { TextInput } from "./TextInput";

// ================================================================================
//  The styled components
// ================================================================================
const StyledErrorMessage = styled.span`
  font-size: 0.8em;
  color: mediumvioletred;
  margin-left: 8px;
`;

// ================================================================================
//  The main component
// ================================================================================
export const TextInputField = ({ field, form, ...props }) => {
  const hasError = form.touched[field.name] && form.errors[field.name];
  return (
    <>
      <TextInput hasError={hasError} {...field} {...props} />
      <StyledErrorMessage>
        <ErrorMessage name={field.name} />
      </StyledErrorMessage>
    </>
  );
};
