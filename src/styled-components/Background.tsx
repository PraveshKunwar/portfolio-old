import styled from "styled-components";

import { BackgroundTypes } from "../interfaces/BackgroundTypes";

const Background = styled.div`
  background-color: ${(props: BackgroundTypes) =>
    props.background ? props.background : "#0a192f"};
`;

export default Background;
