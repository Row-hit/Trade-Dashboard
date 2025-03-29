import { Badge, Box, Card, HStack, Text } from "@chakra-ui/react";
import { Tag } from "../../../components/ui/tag";
import React from "react";

export const InfoCard = ({ img, title, inverted }) => {
  return (
    <Card.Root
      bg={inverted ? "#5f00d9" : "white"}
      border="none"
      borderRadius="30px 0px"
      bgImage={img}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPositionY="top center"
      backgroundBlendMode={inverted && "soft-light"}
    >
      <Card.Body>
        <Box mb="2">
          <Badge
            bg={inverted ? "white" : "#5f00d9"}
            color={inverted ? "black" : "#white"}
            px={2}
          >
            {title}
          </Badge>
        </Box>
        <Text color={inverted ? "white" : "black"}>
          Learn more about Loans – Keep your Bitcoin, access it’s value without
          selling it
        </Text>
      </Card.Body>
    </Card.Root>
  );
};
