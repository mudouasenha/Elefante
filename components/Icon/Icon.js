import styled from "styled-components";

import {
  border,
  color,
  flexbox,
  layout,
  position,
  shadow,
  space,
  textStyle,
  typography,
} from "styled-components";
import { flex } from "styled-system";

const Icon = styled("svg")(
  {
    display: flex,
    boxSizing: "border-box",
    strokeWidth: "1.5px",
  },
  border,
  color,
  flexbox,
  layout,
  position,
  shadow,
  space,
  typography,
  textStyle
);

Icon.defaultProps = {
  fill: "none",
  stroke: "grey",
  viewBox: "0 0 23 23",
  width: "18px",
  height: "18px",
};

export default Icon;
