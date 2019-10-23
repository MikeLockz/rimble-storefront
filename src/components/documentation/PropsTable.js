import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Table, Box, Text } from "rimble-ui";

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

const Code = props => <Text as="pre" fontSize={1} {...props} />;

const PrettyPrintJson = React.memo(({ data }) => {
  return (
    <Box>
      <Code>{data}</Code>
    </Box>
  );
});

const PropsTable = props => {
  let { propMetaData = [], ..._props } = props;
  return (
    <Box>
      {propMetaData.length > 0 ? (
        <StyledTable {..._props}>
          <thead>
            <tr>
              <th>Prop Name</th>
              <th>Type</th>
              <th>Is Required</th>
              <th>Default Value</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(propMetaData).map(key => {
              const prop = propMetaData[key];
              return (
                <tr key={key}>
                  <td>{prop.name}</td>
                  <td>{prop.parentType ? prop.parentType.name : ""}</td>
                  {prop.required ? <td>required</td> : <td>optional</td>}
                  {prop.defaultValue ? (
                    <td>
                      <PrettyPrintJson data={prop.defaultValue.value} />
                    </td>
                  ) : (
                    <td>none</td>
                  )}
                  <td>
                    {prop.docblock ? prop.docblock : ""}
                    {prop.parentType && prop.parentType.name === "enum" && (
                      <Box>
                        <Text.span fontSize={1}>Allowed values: </Text.span>
                        {Object.keys(prop.type.value).map(key => {
                          const value = prop.type.value[key];
                          return (
                            <Text.span key={key} fontSize={1}>
                              {value.value},{" "}
                            </Text.span>
                          );
                        })}
                      </Box>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </StyledTable>
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
