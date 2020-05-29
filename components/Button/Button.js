import styled from "styled-components";
import {
  typography,
  space,
  color,
  layout,
  background,
  border,
  position,
  variant,
} from "styled-system";

export const ButtonPrimary = styled.button`
  border: none;
  background-color: #ff4081;
  color: white;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 14px; 
  min-width: 130px;
  height: 40px;
  ${typography}
  ${space}
  ${color}
  ${layout}
  ${background}
  ${border}
  ${position}
`;

export const ButtonSecondary = styled.button`
  border: 1px solid grey;
  background-color: transparent;
  color: grey; 
  border-radius: 5px;
  padding: 10px 20px;
  min-width: 130px;
  height: 40px;
  ${typography}
  ${space}
  ${color}
  ${layout}
  ${background}
  ${border}
  ${position}
`;
