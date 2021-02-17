import styled from "styled-components";

import { BackgroundTypes } from "../interfaces/BackgroundTypes";

const Background = styled.div`
  background-color: ${(props: BackgroundTypes) =>
    props.background ? props.background : "#1a202c"};
`;

export default Background;
