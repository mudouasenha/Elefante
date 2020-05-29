import styled from "styled-components";
import {
  border,
  color,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
  background,
} from "styled-system";

const Box = styled("div")`
   boxSizing: border-box;
   minWidth: 0;       
   ${border}
   ${color}
   ${grid}
   ${layout}
   ${position}
   ${shadow}
   ${space}
   ${typography}
   ${background}
   
`;

Box.propTypes = {
  ...border.propTypes,
  ...color.propTypes,
  ...layout.propTypes,
  ...position.propTypes,
  ...space.propTypes,
  ...typography.propTypes,
};

export default Box;
