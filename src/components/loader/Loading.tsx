import React from "react";
import { Spinner } from "react-bootstrap";
import Welcome from "../../styled-components/Welcome";
import SpinnerCenter from "../../styled-components/SpinnerCenter";

const Loading: React.FC = () => {
  return (
    <div className="#loading...">
      <SpinnerCenter>
        <Spinner
          animation="border"
          role="status"
          id="spinner"
          variant="primary"
        ></Spinner>
      </SpinnerCenter>
      <Welcome>Loading...</Welcome>
    </div>
  );
};

export default Loading;
