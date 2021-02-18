import React from "react";
import StickyLinks from "../styled-components/StickyLinks";
import Link from "../styled-components/Link";
import Colors from "../utils/Colors";
import Socials from "../utils/Socials";

import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";

const Sticky = () => {
  return (
    <StickyLinks color={Colors.turqoise_main} className="?stick_links">
      <div>
        <Link href={Socials.github} color={Colors.turqoise_main}>
          <GitHubIcon fontSize="large" />
        </Link>
      </div>
      <div>
        <Link href={Socials.instagram} color={Colors.turqoise_main}>
          <InstagramIcon fontSize="large" />
        </Link>
      </div>
      <div>
        <Link href={Socials.youtube} color={Colors.turqoise_main}>
          <YouTubeIcon fontSize="large" />
        </Link>
      </div>
      <div>
        <Link href={Socials.twitter} color={Colors.turqoise_main}>
          <TwitterIcon fontSize="large" />
        </Link>
      </div>
    </StickyLinks>
  );
};

export default Sticky;
