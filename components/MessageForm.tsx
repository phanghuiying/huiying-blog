import {
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  VStack,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { ReactElement, useEffect, useState } from "react";

const MessageForm = (): ReactElement => {
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isInitialState, setIsInitialState] = useState<boolean>(true);
  const [isNameValid, setIsNameValid] = useState<boolean>(false);
  const [isMessageValid, setIsMessageValid] = useState<boolean>(false);

  const isFormSubmitButtonEnabled = isNameValid && isMessageValid;

  const toast = useToast();

  const handleSubmit = () => {
    toast({
      title: "Form Submitted.",
      description: "We've submit the message to Hui Ying for you.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    setName("");
    setMessage("");
  };

  return (
    <>
      <VStack pl={5}>
        <Text fontSize="lg" as="b">
          Post me a message! 😄
        </Text>
        <FormControl isInvalid={!isInitialState && !isNameValid}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => {
              setIsInitialState(false);
              setName(e.target.value);
              if (e.target.value === "") {
                setIsNameValid(false);
              } else {
                setIsNameValid(true);
              }
            }}
          />
          <FormErrorMessage role="alert">Name is required.</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!isInitialState && !isMessageValid}>
          <FormLabel>Message</FormLabel>
          <Textarea
            // type="string"
            value={message}
            onChange={(e) => {
              setIsInitialState(false);
              setMessage(e.target.value);
              if (e.target.value === "") {
                setIsMessageValid(false);
              } else {
                setIsMessageValid(true);
              }
            }}
          />
          <FormErrorMessage role="alert">
            Message cannot be empty.
          </FormErrorMessage>
        </FormControl>
        <Button
          mt={4}
          colorScheme="pink"
          type="submit"
          isDisabled={!isFormSubmitButtonEnabled}
          onClick={handleSubmit}
          role="button"
        >
          Submit
        </Button>
      </VStack>
    </>
  );
};

export default MessageForm;
