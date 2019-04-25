import * as React from "react";
import styled from "styled-components";
import { TextInputProps } from "./textInputTypes";

// ================================================================================
//  The styled components
// ================================================================================
const StyledTextInput = styled.input`
  border-radius: 4px;
  border: 1px solid
    ${(props: TextInputProps) =>
      props.hasError ? "mediumvioletred" : "mediumturquoise"};
  font-size: 14px;
  padding: 0.5em;
  width: 250px;
  transition: box-shadow 0.3s ease;
  :active,
  :focus {
    outline: none;
    box-shadow: 0 0 2px 4px lightcyan;
  }
`;

// ================================================================================
//  The main component
// ================================================================================
export const TextInput = (props: TextInputProps) => {
  return <StyledTextInput {...props} />;
};
