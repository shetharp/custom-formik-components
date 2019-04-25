import * as React from "react";
import { Checkbox } from "./Checkbox";

// ================================================================================
//  The main component
// ================================================================================
export const CheckboxField = ({ field, form, ...props }) => {
  return <Checkbox {...field} {...props} />;
};
