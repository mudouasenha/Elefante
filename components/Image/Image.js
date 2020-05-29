import styled from "styled-components";
import { height, borderRadius } from "styled-system";

import Box from "../Box/Box";

export const Image = styled(Box)``;

Image.propTypes = {
  ...height.propTypes,
  ...borderRadius.propTypes,
};

Image.defaultProps = {
  as: "img",
};
