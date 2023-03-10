import { NextPage } from "next";
import Head from "next/head";
import {
  Box,
  Button,
  Text,
  Container,
  Flex,
  Image,
  HStack,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import * as React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import EmojiReaction from "@/components/EmojiReaction";
import JokeOfTheDay from "@/components/JokeOfTheDay";
import MessageForm from "@/components/MessageForm";

const HomeScreen: NextPage = () => {
  return (
    <>
      <Head>
        <title>Phang Hui Ying</title>
        <meta name="description" content="My blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="section" pb={{ base: "12", md: "24" }}>
        <Box
          as="nav"
          bg="bg-surface"
          boxShadow={useColorModeValue("sm", "sm-dark")}
        >
          <Container py={{ base: "4", lg: "5" }}>
            <HStack spacing="10" justify="space-between">
              <Text as="kbd">Hui Ying</Text>
            </HStack>
          </Container>
        </Box>
        <Box p={10}>
          <Flex justify="center">
            <VStack>
              <Image
                borderRadius="full"
                boxSize="200px"
                src="./huiying.jpg"
                alt="Hui Ying"
              />
              <Text pt={5} as="b" color="pink.500" fontSize="2xl">
                Phang Hui Ying
              </Text>
              <Text fontSize="md" as="b">
                Welcome to my blog, check out my socials below! 😛
              </Text>
              <HStack pt={5} spacing={5}>
                <a
                  href="https://www.linkedin.com/in/phang-hui-ying-ba3567a6/"
                  target="_blank"
                  role={"linkedin"}
                >
                  <BsLinkedin size="1.25em" className="icon" />
                </a>
                <a
                  href="https://github.com/phanghuiying"
                  target="_blank"
                  role={"github"}
                >
                  <BsGithub size="1.25em" className="icon" />
                </a>
              </HStack>
              <HStack pt={8}>
                <EmojiReaction />
                <JokeOfTheDay />
                <MessageForm />
              </HStack>
            </VStack>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default HomeScreen;
