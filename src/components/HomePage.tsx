import React from "react";
import { Acronym } from "../types";
import { Box, Divider, Input, Button, Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { MdAdd as AddIcon } from "react-icons/md";
import { useRouter } from "next/router";
import { useState } from "react";
import { AcronymComponent } from "./Acronym";

interface HomePageProps {
  acronyms: Acronym[];
  count: number;
  setAcronyms: any;
}
export const HomePage = (props: HomePageProps) => {
  const { acronyms, count, setAcronyms } = props;
  const [searchItem, setSearchItem] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const router = useRouter();

  const handleSearch = (event: any) => {
    const searchTerm = searchItem; // Get search term from input field and convert to uppercase for case-insensitive search
    if (searchTerm?.length == 0) {
      setHasSearched(false);
      router.push("/");
      return;
    }
    setHasSearched(true);

    // Get acronyms data from local storage
    const storedAcronyms = localStorage.getItem("acronyms");
    if (searchTerm?.length == 0) {
      if (storedAcronyms) {
        const parsedAcronyms = JSON.parse(storedAcronyms);
        setAcronyms(parsedAcronyms);
      }
    } else if (storedAcronyms) {
      const parsedAcronyms = JSON.parse(storedAcronyms);
      setAcronyms([]);
      const filteredAcronyms = parsedAcronyms.filter((acronym: Acronym) => {
        const acronymName = acronym.name.toUpperCase();
        if (acronymName == searchTerm) {
          setAcronyms([acronym]);
        }
      });
    }
  };

  return (
    <>
      <Header heading="Acronyms" count={count}></Header>
      <Divider />
      <Box mt="32px" ml="12px" mr="12px">
        <Input
          placeholder="Search Acronyms"
          onChange={(e) => setSearchItem(e.target.value.toUpperCase())}
        />
      </Box>

      <Flex mt="16px" w="full" justify="center">
        <Button
          m="0.5rem"
          colorScheme="blue"
          variant="solid"
          aria-label="Add Acronym"
          onClick={handleSearch}
        >
          Search
        </Button>
        <Button
          m="0.5rem"
          colorScheme="blue"
          variant="solid"
          aria-label="Add Acronym"
          rightIcon={<AddIcon />}
          onClick={() => router.push("/acronym/create")}
        >
          Add Acronym
        </Button>
      </Flex>

      {acronyms.length != 0 ? (
        acronyms?.map((acronym: Acronym) => (
          <Box key={acronym.name}>
            <AcronymComponent acronym={acronym} key={acronym.name} />
            <Divider key={acronym.name} />
          </Box>
        ))
      ) : (
        <Flex
          justify="center"
          fontWeight="medium"
          color="gray.800"
          fontSize="lg"
          m="1rem"
        >
          {!hasSearched ? null : "No acronyms found"}
        </Flex>
      )}
    </>
  );
};
