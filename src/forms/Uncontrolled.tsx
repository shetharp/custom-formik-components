import * as React from "react";
import { Checkbox } from "../components/Checkbox";

export const Uncontrolled = props => {
  return (
    <>
      <Checkbox label="Uncontrolled" />
      <Checkbox label="Uncontrolled and default checked" defaultChecked />
      <Checkbox label="Uncontrolled and indeterminate" indeterminate />
      <Checkbox label="Unchecked and readonly" checked={false} />
      <Checkbox label="Checked and readonly" checked />
      <Checkbox label="Indeterminate and readonly" checked indeterminate />
      <br />
      <Checkbox label="Disabled and unchecked" disabled />
      <Checkbox label="Disabled and checked" checked disabled />
      <Checkbox
        label="Disabled and indeterminate"
        checked
        indeterminate
        disabled
      />
    </>
  );
};
