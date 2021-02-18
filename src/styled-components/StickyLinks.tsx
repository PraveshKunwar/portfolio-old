import styled from "styled-components";
import { StickyTypes } from "../interfaces/StickyTypes";
const StickyLinks = styled.div`
  display: flex;
  flex-direction: column;
  position: -webkit-sticky;
  position: sticky;
  color: ${(props: StickyTypes) => (props.color ? props.color : false)};
  > div {
    margin: ${(props: StickyTypes) => (props.margin ? props.margin : "30")};
    width: ${(props: StickyTypes) => (props.width ? props.width : "")};
    height: ${(props: StickyTypes) => (props.height ? props.height : "32px")};
    padding: 30px;
  }
`;

export default StickyLinks;
