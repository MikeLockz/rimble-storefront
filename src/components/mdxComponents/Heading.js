import React from "react";
import { Heading as RimbleHeading } from "rimble-ui";

const Heading = ({ as: Component, ...props }) => <RimbleHeading my={3} {...props} />;

export default Heading;
