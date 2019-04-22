import * as React from "react";
import { render } from "react-dom";
import { Checkbox } from "./components/Checkbox";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Custom Formik Components</h1>
      <h2>This is a simple demo.</h2>
      <p>
        <Checkbox
          checked={false}
          indeterminate={false}
          disabled={false}
          label="Unchecked"
        />
        <Checkbox
          checked={true}
          indeterminate={false}
          disabled={false}
          label="Checked"
        />
        <Checkbox
          checked={false}
          indeterminate={true}
          disabled={false}
          label="Indetermiante"
        />
      </p>
      <p>
        <Checkbox
          checked={false}
          indeterminate={false}
          disabled={true}
          label="Unchecked Disabled"
        />
        <Checkbox
          checked={true}
          indeterminate={false}
          disabled={true}
          label="Checked Disabled"
        />
        <Checkbox
          checked={false}
          indeterminate={true}
          disabled={true}
          label="Indetermiante Disabled"
        />
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
