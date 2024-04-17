// Complete the Index page component for Johan Sannemo's book about winning algorithm competitions
import { Box, Button, Container, Heading, Input, Text, VStack, Textarea, useToast } from "@chakra-ui/react";
import { FaBook, FaCode, FaPlay } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const toast = useToast();

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const executeCode = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(code);
      setOutput(JSON.stringify(result));
    } catch (error) {
      toast({
        title: "Error executing code",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      setOutput("");
    }
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading mb={2}>Johan Sannemo's Book on Winning Algorithm Competitions</Heading>
          <Text fontSize="lg">Learn the secrets to success in algorithm competitions with this comprehensive guide.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading size="md" mb={2}>
            <FaBook /> Book Overview
          </Heading>
          <Text>This book provides an in-depth look at the techniques and strategies that have helped Johan Sannemo and many others excel in the world of algorithm competitions. From basic data structures, efficient algorithms, to complex problem solving, this book covers all you need to start or enhance your competitive programming journey.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading size="md" mb={2}>
            <FaCode /> Try Your Code
          </Heading>
          <Textarea placeholder="Enter your JavaScript code here..." value={code} onChange={handleCodeChange} size="sm" />
          <Button leftIcon={<FaPlay />} colorScheme="teal" mt={2} onClick={executeCode}>
            Execute
          </Button>
          {output && (
            <Text mt={2} p={2} bg="gray.100" borderRadius="md">
              Output: {output}
            </Text>
          )}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
