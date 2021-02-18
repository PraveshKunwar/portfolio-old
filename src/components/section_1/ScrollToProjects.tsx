import React from "react";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ScrollTo from "../../styled-components/ScrollTo";
import Link from "../../styled-components/Link";
import Colors from "../../utils/Colors";
import Sticky from "../Sticky";
const ScrollToProjects: React.FC = () => {
  return (
    <div>
      <ScrollTo className="?scroll_to">
        <Link color={Colors.slate} href="#projects">
          <ArrowDownwardIcon fontSize="large" />
          <br></br>
          <p>Projects</p>
        </Link>
      </ScrollTo>
      <Sticky />
    </div>
  );
};

export default ScrollToProjects;
