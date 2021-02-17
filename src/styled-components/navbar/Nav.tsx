import styled from "styled-components";
import { NavTypes } from "../../interfaces/NavTypes";
import Colors from "../../utils/Colors";

const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  > div {
    font-family: "Inter";
    text-align: center;
    margin: 30px;
    margin-top: 1rem;
    color: ${(props: NavTypes) =>
      props.color ? props.color : Colors.turqoise_main};
  }
`;

export default Nav;
