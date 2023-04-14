import type { NextPage } from "next";
import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { HomePage } from "../src/components/HomePage";

const Home: NextPage = () => {
  const [acronyms, setAcronyms] = useState([]);
  const [count, setCount] = useState(0);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    // Get acronyms from local storage
    const storedAcronyms = localStorage.getItem("acronyms");
    if (storedAcronyms) {
      const parsedAcronyms = JSON.parse(storedAcronyms);

      setAcronyms(parsedAcronyms);
      setCount(parsedAcronyms.length);
    } else {
      // If no acronyms in local storage, return null
      setAcronyms([]);
      setCount(0);
    }
  }, []);
  if (count == null) {
    return <Flex>Loading...</Flex>;
  }

  return (
    <HomePage
      acronyms={acronyms}
      count={count}
      setAcronyms={setAcronyms}
      hasSearched={hasSearched}
      setHasSearched={setHasSearched}
    />
  );
};

export default Home;
