import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import Background from "../styled-components/Background";
import Colors from "../utils/Colors";

const Loading: React.FC = () => {
  useEffect(() => {
    document.body.title = "Loading...";
  }, []);
  return (
    <Background background={Colors.navy_main}>
      <div className="#loading..."></div>
    </Background>
  );
};

export default Loading;
