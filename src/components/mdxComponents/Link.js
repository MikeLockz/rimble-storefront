import React from "react";
import { Link as RimbleLink, Icon, Box } from "rimble-ui";
import RimbleGatsbyLink from "../landing/RimbleGatsbyLink";
import isAbsoluteUrl from "is-absolute-url";

const Link = ({ to, href, ...props }) => {
  if (typeof href !== "undefined") {
    to = href;
  }

  return isAbsoluteUrl(to) ? (
    <RimbleLink
      href={to}
      display={"inline-flex"}
      alignItems={"center"}
      {...props}
    >
      {props.children}
      <Icon name={"OpenInNew"} size={'18px'} ml={1} mb={'1px'} />
    </RimbleLink>
  ) : (
    <RimbleGatsbyLink to={to} {...props}>
      {props.children}
    </RimbleGatsbyLink>
  );
};

export default Link;
