import React from "react";
import { Heading as RimbleHeading } from "rimble-ui";

const Heading = ({ as: Component, ...props }) => <RimbleHeading mt={4} mb={3} {...props} />;

export default Heading;
