import styled from "styled-components";
import { NavTypes } from "../../interfaces/NavTypes";
import Colors from "../../utils/Colors";

const NavLink = styled.a`
  transition: transform 0.3s ease-in-out;
  text-decoration: none;
  color: ${(props: NavTypes) => (props.color ? props.color : Colors.pink_main)};
  font-family: "Inter";
  &:active {
    color: ${(props: NavTypes) =>
      props.color ? props.color : Colors.pink_main};
  }
  &:visited {
    color: ${(props: NavTypes) =>
      props.color ? props.color : Colors.pink_main};
  }
  &:hover {
    transform: scaleY(1.03);
  }
`;

export default NavLink;
