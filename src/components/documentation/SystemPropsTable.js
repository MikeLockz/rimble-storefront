import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Table, Box, Text, Heading, Flex } from "rimble-ui";


const SystemPropsTable = props => {
  let { propMetaData = [], ..._props } = props;
  return (
    <Box>
    <Heading.h4 mb={2}>System props</Heading.h4>
    <Text mb={3}>This component also uses the following Styled-system props.</Text>
    <Box>
      <CommonSystemProps />
      <TypographySystemProps />
      <BorderSystemProps />
      <LayoutSystemProps />
      <PositionSystemProps />
      <FLEXBOXSystemProps />
    </Box>
    </Box>
);
};
export default SystemPropsTable;


const CommonSystemProps = props => {
  let { propMetaData = [], ..._props } = props;
  return (
    <Box bg="#f5f5f5" border={1} borderWidth={2} borderColor="near-white" borderRadius={2} my={3} p={3}>
      <Text fontWeight="bold">Common</Text>
      <Text fontFamily="monospace">
        <ul>
          <li>color</li>
          <li>space</li>
        </ul>
      </Text>
    </Box>

);
};


const TypographySystemProps = props => {
  let { propMetaData = [], ..._props } = props;
  return (
    <Box bg="#f5f5f5" border={1} borderWidth={2} borderColor="near-white" borderRadius={2} my={3} p={3}>
      <Text fontWeight="bold">Typography</Text>
      <Text fontFamily="monospace">
        <ul>
          <li>fontFamily</li>
          <li>fontSize</li>
          <li>fontStyle</li>
          <li>fontWeight</li>
          <li>lineHeight</li>
          <li>textAlign</li>
        </ul>
      </Text>
    </Box>
);
};

const BorderSystemProps = props => {
  let { propMetaData = [], ..._props } = props;
  return (
    <Box bg="#f5f5f5" border={1} borderWidth={2} borderColor="near-white" borderRadius={2} my={3} p={3}>
      <Text fontWeight="bold">Border</Text>
      <Text fontFamily="monospace">
        <ul>
          <li>borders</li>
          <li>borderColor</li>
          <li>boxShadow</li>
          <li>borderRadius</li>
        </ul>
      </Text>
    </Box>
);
};

const LayoutSystemProps = props => {
  let { propMetaData = [], ..._props } = props;
  return (
    <Box bg="#f5f5f5" border={1} borderWidth={2} borderColor="near-white" borderRadius={2} my={3} p={3}>
      <Text fontWeight="bold">Layout</Text>
      <Text fontFamily="monospace">
        <ul>
          <li>display</li>
          <li>size</li>
          <li>width</li>
          <li>height</li>
          <li>minWidth</li>
          <li>minHeight</li>
          <li>maxWidth</li>
          <li>maxHeight</li>
          <li>overflow</li>
          <li>verticalAlign</li>
        </ul>
      </Text>
    </Box>
);
};


const PositionSystemProps = props => {
  let { propMetaData = [], ..._props } = props;
  return (
    <Box bg="#f5f5f5" border={1} borderWidth={2} borderColor="near-white" borderRadius={2} my={3} p={3}>
      <Text fontWeight="bold">Position</Text>
      <Text fontFamily="monospace">
        <ul>
          <li>position</li>
          <li>zIndex</li>
          <li>top</li>
          <li>right</li>
          <li>bottom</li>
          <li>left</li>
        </ul>
      </Text>
    </Box>
);
};

const FLEXBOXSystemProps = props => {
  let { propMetaData = [], ..._props } = props;
  return (
    <Box bg="#f5f5f5" border={1} borderWidth={2} borderColor="near-white" borderRadius={2} my={3} p={3}>
      <Text fontWeight="bold">FLEXBOX</Text>
      <Text fontFamily="monospace">
        <ul>
          <li>flexBasis</li>
          <li>flexDirection</li>
          <li>flexWrap</li>
          <li>alignContent</li>
          <li>alignItems</li>
          <li>justifyContent</li>
          <li>justifyItems</li>
          <li>flex</li>
          <li>justifySelf</li>
          <li>alignSelf</li>
          <li>order</li>
        </ul>
      </Text>
    </Box>
);
};
