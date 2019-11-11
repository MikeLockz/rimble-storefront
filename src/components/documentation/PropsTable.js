import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Table, Box, Text, Heading, Flex } from "rimble-ui";

const StyledTable = styled(Table)`
  & {
    display: block;
    width: 100%;
    overflow: auto;
    border-width: 0;
  }

  th,
  td {
    border: solid;
    border-width: 1px;
    border-color: inherit;
    padding: 0 1.5rem;
  }
`;

const Code = props => <Text fontSize={2} {...props} />;

const PrettyPrintJson = React.memo(({ data }) => {
  return (
      <Box>
      <Text fontWeight="bold">Default value:</Text>
        <Code>{data}</Code>
      </Box>
  );
});

const PropsTable = props => {
  let { propMetaData = [], ..._props } = props;
  return (
    <Box bg="#f5f5f5" border={1} borderWidth={2} borderColor="near-white" borderRadius={2} my={4}>
      {propMetaData.length > 0 ? (
        <Box p={3} {..._props}>
          <Box>
            {Object.keys(propMetaData).map(key => {
              const prop = propMetaData[key];
              return (
                <Box my={3} borderBottom={1} borderWidth={2} borderColor="light-gray" key={key}>
                <Flex alignItems="center" alignContent="center" flexWrap={'wrap'} alignItems={"stretch"}>
                  <Heading.h4 mr={2} fontFamily="monospace" color="primary-dark">{prop.name} </Heading.h4>
                  <Text mr={2} fontFamily="monospace"  color="mid-gray">{prop.parentType ? prop.parentType.name : ""}</Text>
                  <Text>{prop.required ? <Text fontFamily="monospace" color="mid-gray">(required)</Text> : <Text fontFamily="monospace" color="mid-gray">(optional)</Text>}</Text>
                </Flex>
                <Text italic mb={2}>
                  {prop.docblock ? prop.docblock : ""}
                  {prop.parentType && prop.parentType.name === "enum" && (
                    <Box>
                      <Text.span fontSize={2}>Allowed values: </Text.span>
                      {Object.keys(prop.type.value).map(key => {
                        const value = prop.type.value[key];
                        return (
                          <Text.span key={key} fontSize={2}>
                            {value.value}{" "}
                          </Text.span>
                        );
                      })}.
                    </Box>
                  )}
                </Text>
                  <Box mb={2} p={2}>{prop.defaultValue ? (
                      <Text><PrettyPrintJson data={prop.defaultValue.value} /></Text>
                  ) : (
                    <Text></Text>
                    //want to set it so that nothing shows if there is no default value
                  )}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      ) : (
        <Text>No props defined for this component.</Text>
      )}
    </Box>
  );
};

PropsTable.propTypes = {
  /** Props from gatsby-transformer-react-docgen  */
  propMetaData: PropTypes.array
};
PropsTable.defaultProps = {
  propMetaData: []
};

export default PropsTable;
