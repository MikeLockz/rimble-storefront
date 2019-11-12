import React from "react";
import { Flex, Box, Card, Heading, Text, Button } from "rimble-ui";

const TransactionFeeCard = ({ ...props }) => {
  return (
    <Card my={4}>
      <Heading mb={3}>What's a transaction fee?</Heading>
      <Text mb={3}>
        Every blockchain action requires a fee. This pays for someone in the
        network to update the blockchain. It doesn’t go to us. Be sure to save
        some ETH aside for fees.
      </Text>
      <Flex borderTop={1} borderColor="near-white" flexDirection={["column-reverse", "row"]}>
        <Box mt={3} width={[1, 1 / 2]}>
          <Button.Text width={[1, "auto"]} variant="danger">Close</Button.Text>
        </Box>
        <Box mt={3} justifyItems="flex-end" width={[1, 1 / 2]}>
          <Button.Outline mb={[3, 0]} width={[1, "auto"]} mr={3} disabled>
            Previous
          </Button.Outline>
          <Button mb={[3, 0]} width={[1, "auto"]}>Next</Button>
        </Box>
      </Flex>
    </Card>
  );
};

export default TransactionFeeCard;
