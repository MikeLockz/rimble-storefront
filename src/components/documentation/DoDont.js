import React, { Component } from "react";
import PropTypes from "prop-types";
import { Box, Flex } from "rimble-ui";
import ExampleCard from "./ExampleCard";

class DoDont extends Component {
  static propTypes = {
    children: PropTypes.shape({
      positive: PropTypes.shape({
        caption: PropTypes.string,
        example: PropTypes.node
      }),
      negative: PropTypes.shape({
        captions: PropTypes.string,
        example: PropTypes.node
      })
    })
  };

  render() {
    const { positive, negative } = this.props.children;

    return (
      <Flex
        mb={4}
        alignItems={"stretch"}
        flexWrap={["wrap", "nowrap"]}
        margin={[0, -2]}
      >
        <Box width={[1, 1 / 2]} my={3}>
          <ExampleCard
            variant={"positive"}
            mx={[0, 2]}
            caption={positive.caption}
            code={positive.code}
          />
        </Box>
        <Box width={[1, 1 / 2]} my={3}>
          <ExampleCard
            variant={"negative"}
            mx={[0, 2]}
            caption={negative.caption}
            code={negative.code}
          />
        </Box>
      </Flex>
    );
  }
}

export default DoDont;
