import * as React from "react";
import styled from "styled-components";
import { CheckboxProps } from "./checkboxTypes";

// ================================================================================
//  The styled components
// ================================================================================

/** The <label> element used to wrap the native checkbox.
 * Clicking the label will automatically toggle the native checkbox.
 */
const LabelWrapper = styled.label`
  cursor: ${(props: CheckboxProps) =>
    props.disabled ? "not-allowed" : "default"};
  opacity: ${(props: CheckboxProps) => (props.disabled ? 0.3 : 1)};
  margin-bottom: 8px;
  display: flex;
  /* display: inline-block; */
`;

/** The wrapper component containing the native checkbox and styled checkbox */
const CheckboxWrapper = styled.span`
  display: inline-block;
  position: relative;
  width: 16px;
  height: 16px;
  /* Prevent text selection within the checkbox area */
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
`;

/** The native HTML <input type="checkbox" /> element.
 * The styled checkbox depends on the native checkbox's :checked CSS selector
 * Hide checkbox visually but remain accessible to screen readers.
 * Source: https://polished.js.org/docs/#hidevisually
 */
const NativeCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

/** The styled checkbox depends on the native checkbox's :checked CSS selector
 * The styled checkbox must be a sibling element of the native checkbox
 */
const StyledCheckbox = styled.span`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 1px solid lightgray;
  background: white;

  ${NativeCheckbox}:disabled ~ & {
    border-color: gray;
    background: lightgray;
  }

  ${NativeCheckbox}:checked ~ & {
    border-color: mediumturquoise;
    background: mediumturquoise;
  }
`;

const StyledIcon = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  font-size: 0.8em;
  color: white;
  visibility: hidden;
  opacity: 0;

  ${NativeCheckbox}:checked ~ ${StyledCheckbox} & {
    visibility: visible;
    opacity: 1;
  }
`;

const CheckboxLabel = styled.span`
  margin-left: 8px;
`;

// ================================================================================
//  Helper Components
// ================================================================================

export const Icon = ({ isIndeterminate }) => {
  return isIndeterminate ? (
    <StyledIcon>&ndash;</StyledIcon>
  ) : (
    <StyledIcon>&#10003;</StyledIcon>
  );
};

// ================================================================================
//  The main component
// ================================================================================
export const Checkbox = ({ label, ...props }: CheckboxProps) => {
  return (
    <LabelWrapper {...props}>
      <CheckboxWrapper {...props}>
        <NativeCheckbox {...props} />
        <StyledCheckbox {...props}>
          <Icon isIndeterminate={props.indeterminate} />
        </StyledCheckbox>
      </CheckboxWrapper>
      <CheckboxLabel>{label}</CheckboxLabel>
    </LabelWrapper>
  );
};
