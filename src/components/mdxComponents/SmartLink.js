import React from "react";
import { Link as RimbleLink, Icon } from "rimble-ui";
import RimbleGatsbyLink from "../landing/RimbleGatsbyLink";
import isAbsoluteUrl from "is-absolute-url";

const SmartLink = ({ to, href, children, ...rest }) => {
  if (typeof href !== "undefined") {
    to = href;
  }

  return isAbsoluteUrl(to) ? (
    <RimbleLink
      href={to}
      target={"_blank"}
      display={"inline-flex"}
      alignItems={"center"}
      {...rest}
    >
      {children}
      <Icon name={"OpenInNew"} size={"18px"} ml={1} mb={"1px"} />
    </RimbleLink>
  ) : (
    <RimbleGatsbyLink to={to} {...rest}>
      {children}
    </RimbleGatsbyLink>
  );
};

export default SmartLink;
