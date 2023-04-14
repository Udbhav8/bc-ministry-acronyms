import React from "react";
import {
  Flex,
  Avatar,
  Box,
  Text,
  HStack,
  Spacer,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Acronym, Role } from "../types";
import Link from "next/link";
interface AcronymComponentProps {
  acronym: Acronym;
}

export const AcronymComponent = (props: AcronymComponentProps) => {
  const { acronym } = props;

  return (
    <Flex ml={{ base: "1rem", md: "2rem" }} minH="7rem" justify="center">
      <HStack alignItems="start" spacing="0.25rem" my="auto" ml="1rem">
        <Text fontWeight="medium" fontSize="lg" textColor="gray.800">
          {acronym.name}
        </Text>
        <Spacer />
        <Text
          // lineHeight="0.75"
          fontWeight="normal"
          fontSize="md"
          textColor="gray.500"
        >
          {acronym.value}
        </Text>
      </HStack>
    </Flex>
  );
};
