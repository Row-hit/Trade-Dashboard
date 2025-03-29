import { Button } from "../../../components/ui/button";
import { Card, Center, Container, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaDiagramSuccessor } from "react-icons/fa6";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { Link } from "react-router";

const ResetDone = () => {
  return (
    <Container>
      <Center minHeight="100vh">
        <Card.Root borderRadius="2xl">
          <Card.Body w="lg">
            <Center flexDir="column">
              <IoCheckmarkDoneCircle color="green" size="50" />

              <Text as="h1" fontSize={"2xl"}>
                Password Reset Done
              </Text>
              <Text as="p" px={10} py={5} color="gray.400">
                Now you can access you account.
              </Text>
              <Link to="/signin">
                <Button variant="surface">Sign in</Button>
              </Link>
            </Center>
          </Card.Body>
        </Card.Root>
      </Center>
    </Container>
  );
};

export default ResetDone;
