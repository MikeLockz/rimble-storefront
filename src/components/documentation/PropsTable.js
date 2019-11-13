import React from "react";
import PropTypes from "prop-types";
import { Box, Text, Heading, Flex } from "rimble-ui";
import styled from "styled-components";

const Code = props => <Text fontSize={2} {...props} />;
const StyledPre = styled.pre`
  margin: 0;
`;

const PrettyPrintJson = React.memo(({ data }) => {
  return (
    <Flex>
      <Text fontWeight="bold" mr={2}>
        Default value:
      </Text>
      <Code>
        <StyledPre>{data}</StyledPre>
      </Code>
    </Flex>
  );
});

const PropsTable = props => {
  let { propMetaData = [], ..._props } = props;
  return (
    <Box
      bg="#f5f5f5"
      border={1}
      borderWidth={2}
      borderColor="near-white"
      borderRadius={2}
      my={4}
    >
      {propMetaData.length > 0 ? (
        <Box p={3} {..._props}>
          <Box>
            {Object.keys(propMetaData).map(key => {
              const prop = propMetaData[key];
              return (
                <Box my={3} key={key}>
                  <Flex
                    alignItems="center"
                    alignContent="center"
                    flexWrap={"wrap"}
                  >
                    <Heading.h4
                      mr={2}
                      fontFamily="monospace"
                      color="primary-dark"
                    >
                      {prop.name}{" "}
                    </Heading.h4>
                    <Text mr={2} fontFamily="monospace" color="mid-gray">
                      {prop.parentType ? prop.parentType.name : ""}
                    </Text>
                    <Text>
                      {prop.required ? (
                        <Text fontFamily="monospace" color="mid-gray">
                          (required)
                        </Text>
                      ) : (
                        <Text fontFamily="monospace" color="mid-gray">
                          (optional)
                        </Text>
                      )}
                    </Text>
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
                        })}
                        .
                      </Box>
                    )}
                  </Text>
                  <Box>
                    {prop.defaultValue && (
                      <PrettyPrintJson data={prop.defaultValue.value} />
                    )}
                  </Box>

                  {/* Add border bottom to all props except last */}
                  {propMetaData.length !== parseInt(key) + 1 && (
                    <Box
                      p={2}
                      borderBottom={1}
                      borderWidth={2}
                      borderColor="light-gray"
                    />
                  )}
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
