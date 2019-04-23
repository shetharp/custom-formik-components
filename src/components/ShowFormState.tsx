import * as React from "react";
import styled from "styled-components";

const Monotext = styled.code`
  font-size: 16px;
  color: gray;
  font-family: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console",
    "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono",
    "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier,
    monospace;
`;

interface ShowFormStateProps {
  values: any;
}
export const ShowFormState = ({ values }: ShowFormStateProps) => {
  return (
    <p>
      <Monotext>{JSON.stringify(values, null, 2)}</Monotext>
    </p>
  );
};
