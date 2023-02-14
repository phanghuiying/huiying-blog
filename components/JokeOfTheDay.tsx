import {
  VStack,
  Box,
  Text,
  Button,
  HStack,
  Spinner,
  Flex,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { useState } from "react";

const JokeOfTheDay: NextPage = () => {
  const [jokeSetUp, setJokeSetUp] = useState<string>("");
  const [jokePunchline, setJokePunchline] = useState<string>("");
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const getJoke = async (jokeType: string) => {
    setIsFetching(true);
    const joke = await fetch(
      `https://official-joke-api.appspot.com/jokes/${jokeType}`
    ).then((response) => response.json());
    if (jokeType == "programming/random") {
      setJokeSetUp(joke[0]["setup"]);
      setJokePunchline(joke[0]["punchline"]);
      setIsFetching(false);
      return;
    }
    setJokeSetUp(joke["setup"]);
    setJokePunchline(joke["punchline"]);
    setIsFetching(false);
    return;
  };

  return (
    <VStack pl={5} pr={5}>
      <Text fontSize="lg" as="b">
        Select your joke type 😂
      </Text>
      <HStack>
        <Button
          onClick={() => {
            getJoke("random");
          }}
        >
          Random
        </Button>
        <Button
          onClick={() => {
            getJoke("programming/random");
          }}
        >
          Programming
        </Button>
      </HStack>
      {!isFetching ? (
        <Box pt={2}>
          <Flex justify="center">
            <VStack>
              <Text fontSize="sm" as="b">
                {jokeSetUp}
              </Text>
              <Text fontSize="sm">{jokePunchline}</Text>
            </VStack>
          </Flex>
        </Box>
      ) : (
        <Spinner />
      )}
    </VStack>
  );
};

export default JokeOfTheDay;
