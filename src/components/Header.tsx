import { Flex, VStack, Spacer, IconButton, Text } from "@chakra-ui/react";
import React from "react";
export const Header = (props: {
  count?: number;
  heading: string;
  description?: string;
}) => {
  const { count, heading, description } = props;
  return (
    <Flex minH="7rem"  w="full" my="auto">
      <VStack alignItems="center" my = 'auto' w='full' ml={{ base: "1rem", md: "2rem" }}>
        <Text fontWeight="medium" textColor="gray.700" fontSize="2xl">
          {" "}
          {heading}
        </Text>
        <Text
          lineHeight="1"
          fontWeight="medium"
          fontSize="md"
          textColor="gray.500"
        >
          {count !== undefined ? `You have ${count} acronums` : description}
        </Text>
      </VStack>

    </Flex>
  );
};
