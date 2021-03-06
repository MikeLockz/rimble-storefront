import React from "react";
import { Box, Flex, Text, Icon } from "rimble-ui";

const colors = {
  positive: "155, 66%, 45%",
  negative: "8, 86%, 46%"
};

const ExampleCard = ({ variant, caption, code, ...rest }) => {
  let colorPrimary = "0,0%,0%",
    iconName = "ThumbDown",
    cardLabel = "{ missing variant }";

  if (variant === "positive") {
    colorPrimary = colors.positive;
    iconName = "Check";
    cardLabel = "Do";
  } else if (variant === "negative") {
    colorPrimary = colors.negative;
    iconName = "Close";
    cardLabel = `Don't`;
  }

  return (
    <Box
      bg={"blacks.0"}
      borderTop={`4px solid HSLA(${colorPrimary}, 1.00)`}
      height={"100%"}
      {...rest}
    >
      <Box
        border={1}
        borderColor={"blacks.3"}
        borderWidth={"0 1px 1px 1px"}
        p={4}
        height={"100%"}
      >
        <Flex
          flexDirection={"column"}
          justifyContent="space-between"
          height={"100%"}
        >
          <Box>
            <Flex alignItems={"center"} mb={4}>
              <Box
                size={"3rem"}
                bg={"white"}
                border={`8px solid HSLA(${colorPrimary}, 0.25)`}
                borderRadius={"100%"}
              >
                <Flex
                  size={"100%"}
                  border={`2px solid HSLA(${colorPrimary}, 1.00)`}
                  borderRadius={"100%"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Icon
                    name={iconName}
                    size={"20px"}
                    color={`HSLA(${colorPrimary}, 1.00)`}
                  />
                </Flex>
              </Box>
              <Text ml={3} fontSize={"18px"} fontWeight={3}>
                {cardLabel}
              </Text>
            </Flex>

            <Text fontSize={1} mb={3}>
              {caption}
            </Text>
          </Box>

          <Box mt={3} pt={3} borderTop={"1px solid #f4f4f4"}>
            {code}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default ExampleCard;
