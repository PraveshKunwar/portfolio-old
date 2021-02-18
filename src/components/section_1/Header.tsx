import React from "react";
import LandingHeader from "../../styled-components/LandingHeader";
import Color from "../../utils/Colors";
const Header: React.FC = () => {
  return (
    <div className="#header">
      <LandingHeader h1_color={Color.slate} b_color={Color.pink_main}>
        Hi, my name is Pravesh Kunwar. <br></br>
        <b>I create things with code.</b>
      </LandingHeader>
    </div>
  );
};

export default Header;
