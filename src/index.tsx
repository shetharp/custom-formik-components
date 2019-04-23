import * as React from "react";
import { render } from "react-dom";
import { ToggleFormik } from "./forms/ToggleFormik";
import { DisabledFormik } from "./forms/DisabledFormik";
import { Uncontrolled } from "./forms/Uncontrolled";

import "./styles.css";

interface ExampleFormValues {
  check1: boolean;
  check2: boolean;
  check3: boolean;
  check4: boolean;
  check5: boolean;
  check6: boolean;
  check7: boolean;
  check8: boolean;
}

function App() {
  return (
    <div className="App">
      <h1>Custom Input Components</h1>
      <br />

      <h2>These checkboxes are connected to Formik.</h2>
      <h3>These checkboxes can be toggled.</h3>
      <ToggleFormik />
      <h3>These checkboxes are disabled.</h3>
      <DisabledFormik />

      <br />
      <br />
      <h2>These checkboxes are not connected to Formik.</h2>
      <h3>
        These checkboxes are not controlled components.
        <br />
        You can use Formik or have another app component handle their state
        management.
      </h3>
      <Uncontrolled />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
