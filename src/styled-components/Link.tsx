import styled from "styled-components";
import { LinkTypes } from "../interfaces/LinkTypes";
const Link = styled.a`
  color: ${(props: LinkTypes) => (props.color ? props.color : false)};
  font-family: "Inter", "Roboto", "Oswald";
  text-decoration: none;

  &:active {
    color: ${(props: LinkTypes) => (props.color ? props.color : false)};
  }
  &:visited {
    color: ${(props: LinkTypes) => (props.color ? props.color : false)};
  }
  &:hover {
    color: ${(props: LinkTypes) => (props.color ? props.color : false)};
  }
`;

export default Link;
