import { Flex } from "@chakra-ui/react";
import { Heading, Icon, Stack, Text } from "@chakra-ui/react";

const SupportCard = ({ leftIcon, LeftHead, LeftText, rightComponent }) => {
  return (
    <Flex
      mb="10"
      flexDir={{
        base: "column",
        md: "row",
      }}
      gap="5"
    >
      <Stack w="xs">
        <Icon size="lg">{leftIcon}</Icon>

        <Heading size="4xl">{LeftHead} </Heading>
        <Text>{LeftText}</Text>
      </Stack>
      {rightComponent}
    </Flex>
  );
};

export default SupportCard;
