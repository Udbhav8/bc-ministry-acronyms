import { Stack, Flex, Divider, Button, Center } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import router from "next/router";
import React from "react";
import { AcronymForm } from "../components/AcronymForm";
import { Header } from "../components/Header";
export const AcronymCreate = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const fetching = isSubmitting;

  return (
    <Stack as="section" w="100%">
      <Header
        heading="Add an acronym"
        description="Set acronym name and value."
      ></Header>
      <Divider />

      <Stack>
        <Formik
          initialValues={{
            name: "",
            value: "",
          }}
          onSubmit={async (values) => {
            setIsSubmitting(true);

            const acronymData = {
              name: values.name,
              value: values.value,
            };
            console.log(acronymData);
            let existingAcronyms = [];
            // Retrieve existing acronyms from localStorage
            const acronyms = localStorage.getItem("acronyms");
            if (acronyms != null) {
              existingAcronyms = JSON.parse(acronyms);
            }

            // Add new acronym to the list of existing acronyms
            existingAcronyms.push(acronymData);

            // Save updated acronyms list to localStorage
            localStorage.setItem("acronyms", JSON.stringify(existingAcronyms));

            // Perform any additional logic or validation as needed

            // Redirect to home page
            router.push("/");

            setIsSubmitting(false);
          }}
        >
          {({ values, setFieldValue, errors, touched }) => {
            return (
              <Form>
                <AcronymForm values={values} setFieldValue={setFieldValue} />

                <Flex justifyContent="space-between" m="2rem">
                  <Center>
                    <Button
                      colorScheme="blue"
                      variant="solid"
                      isLoading={fetching}
                      onClick={() => router.push("/")}
                    >
                      Cancel
                    </Button>
                  </Center>
                  <Center>
                    <Button
                      colorScheme="blue"
                      variant="solid"
                      isLoading={fetching}
                      type="submit"
                    >
                      Save
                    </Button>
                  </Center>
                </Flex>
              </Form>
            );
          }}
        </Formik>
      </Stack>
    </Stack>
  );
};
