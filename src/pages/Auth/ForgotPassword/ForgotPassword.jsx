import { Field } from "../../../components/ui/field";
import { Button } from "../../../components/ui/button";
import { Card, Center, Container, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { BsBack } from "react-icons/bs";
import { FaDiagramSuccessor } from "react-icons/fa6";
import { IoMdArrowBack } from "react-icons/io";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { Link } from "react-router";

const ForgotPassword = () => {
  return (
    <Container>
      <Center minHeight="100vh">
        <Card.Root borderRadius="2xl">
          <Card.Body w="lg">
            <Link to="/signin">
              <IoMdArrowBack size="30" />
            </Link>

            <Text as="h1" mt="5" alignSelf={"center"} fontSize={"2xl"}>
              Forgot Password
            </Text>
            <Text as="p" px={10} py={5} color="gray.400">
              Enter your email address for which account you want to reset your
              password.
            </Text>
            <Field name="email">
              <Input name="email" type="email" placeholder="name@email.com" />
            </Field>
            <Link to="/reset-password">
              <Button variant="surface" w="full" mt="10">
                Reset Password
              </Button>
            </Link>
          </Card.Body>
        </Card.Root>
      </Center>
    </Container>
  );
};

export default ForgotPassword;
