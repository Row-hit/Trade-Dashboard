import { Button } from "../../../components/ui/button";
import { Card, Center, Container, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaDiagramSuccessor } from "react-icons/fa6";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { Link } from "react-router";

const SentSuccess = () => {
  return (
    <Container>
      <Center minHeight="100vh">
        <Card.Root borderRadius="2xl">
          <Card.Body w="lg">
            <Center flexDir="column">
              <IoCheckmarkDoneCircle color="green" size="50" />

              <Text as="h1" fontSize={"2xl"}>
                Succesfully Sent
              </Text>
              <Text as="p" px={10} py={5} color="gray.400">
                We have sent instructions on how to reset your password to
                <b> "jenny.wilson@gmail.com." </b> Please follow the
                instructions from the email.
              </Text>
              <Link to="/signin">
                <Button variant="surface">Back to main</Button>
              </Link>
            </Center>
          </Card.Body>
        </Card.Root>
      </Center>
    </Container>
  );
};

export default SentSuccess;
