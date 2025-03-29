import { Button } from "../../../components/ui/button";
import { Card, Center, Container, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { MdMail } from "react-icons/md";
import { Link } from "react-router";

const RegisterEmailVerify = () => {
  return (
    <Container>
      <Center minHeight="100vh">
        <Card.Root borderRadius="2xl">
          <Card.Body w="lg">
            <Center flexDir="column">
              <MdMail color="purple" size="50" />

              <Text as="h1" fontSize={"2xl"}>
                Email Verification
              </Text>
              <Text as="p" px={10} py={5}>
                We have sent you an email verification to
                <b> "jenny*******@gmail.com." </b> If you didn’t receive it,
                click the button below.
              </Text>
              <Link to="/Register-Email-Verify">
                <Button variant="surface">Re-Send Email</Button>
              </Link>
            </Center>
          </Card.Body>
        </Card.Root>
      </Center>
    </Container>
  );
};

export default RegisterEmailVerify;
