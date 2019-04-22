import * as React from "react";
import styled, { css } from "styled-components";
import { CheckboxProps } from "./checkboxTypes";

// ================================================================================
//  The styled components
// ================================================================================
const CheckboxWrapper = styled.span`
  display: flex;
  margin-bottom: 8px;
  opacity: ${(props: CheckboxProps) => (props.disabled ? "0.3" : "1")};
`;

const StyledCheckbox = styled.span`
  cursor: default;
  display: inline-block;
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  transition: all 100ms;
  border: 1px solid
    ${(props: CheckboxProps) => (props.disabled ? "gray" : "lightgray")};
  background: ${(props: CheckboxProps) =>
    props.disabled ? "lightgray" : "white"};
  ${(props: CheckboxProps) => {
    if (props.checked || props.indeterminate) {
      return css`
        border: 1px solid mediumturquoise;
        background: mediumturquoise;
      `;
    }
  }}
`;

const CheckboxLabel = styled.span`
  margin-left: 4px;
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  font-size: 0.8em;
  color: white;
`;

// ================================================================================
//  Helper functions
// ================================================================================
const renderIcon = (isChecked: boolean, isIndeterminate: boolean) => {
  if (isIndeterminate) {
    return <Icon>&ndash;</Icon>;
  }
  if (isChecked) {
    return <Icon>&#10003;</Icon>;
  }
  return <Icon />;
};

// ================================================================================
//  The main component
// ================================================================================
export const Checkbox = ({ label, ...props }: CheckboxProps) => {
  return (
    <CheckboxWrapper {...props}>
      <StyledCheckbox {...props}>
        {renderIcon(props.checked, props.indeterminate)}
      </StyledCheckbox>
      <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxWrapper>
  );
};
