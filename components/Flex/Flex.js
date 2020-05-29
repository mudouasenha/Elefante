import styled from "styled-components";
import { flexbox, variant, border } from "styled-system";

import Box from "../Box/Box";

export const Flex = styled(Box)`
  display: flex;
  box-sizing: border-box;
  ${border}
  ${flexbox}
`;
