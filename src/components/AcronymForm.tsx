import { Stack, Text, Box } from "@chakra-ui/react";
import React from "react";
import { FormFieldText, RadioField } from "./FormField";

interface FormProps {
  values: { [field: string]: any };
  setFieldValue(field: string, value: any, shouldValidate?: boolean): void;
}

export const AcronymForm = (props: FormProps) => {
  const { values, setFieldValue } = props;
  return (
    <Stack mx={{ base: "1rem", md: "2rem" }} spacing="0.75rem">
      <Text
        mt="1rem"
        fontSize={{ base: "md", md: "lg" }}
        fontWeight="semibold"
        textColor="black"
      >
        Acronym name
      </Text>
      <FormFieldText fieldName="name" placeHolder="CITZ"></FormFieldText>
      <Box>
        <Text
          mt="1rem"
          mb="0.75rem"
          fontSize={{ base: "md", md: "lg" }}
          fontWeight="semibold"
          textColor="black"
        >
          Acronym value
        </Text>
        <FormFieldText
          fieldName="value"
          placeHolder="Citizenship Services"
        ></FormFieldText>
      </Box>
    </Stack>
  );
};
