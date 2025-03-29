import { Link } from "react-router";
import { Checkbox } from "../../../components/ui/checkbox";
import { object, ref, string } from "yup";
import {
  Box,
  Button,
  Container,
  Center,
  Text,
  Stack,
  HStack,
} from "@chakra-ui/react";
import { ErrorMessage, Field, Form, Formik } from "formik";

const signupValidationSchema = object({
  firstName: string().required("Name is required"),
  lastName: string().required("Last name is required"),
  email: string().required("Email is required"),
  password: string().required("Password is required"),
  confirmPassword: string()
    .oneOf([ref("password"), null], "Password must match")
    .required("Confirm password is required"),
}).required("All fields are required");

const Signup = () => {
  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 10));
  };

  return (
    <Container>
      <Center minH="100vh">
        <Box
          bg="white"
          borderRadius="2xl"
          w="fit-content"
          py="5"
          px="10"
          boxShadow="lg"
        >
          <Stack>
            <Text as="h1" fontSize={30}>
              Welcome to Crypto App{" "}
            </Text>
            <Text as="p" color="gray.400" my="4">
              Create a free account by filling data below
            </Text>
          </Stack>
          <Stack>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              onSubmit={(values1) => onSubmit(values1)}
              validationSchema={signupValidationSchema}
            >
              <Form>
                <Stack>
                  <HStack>
                    <Stack>
                      <label htmlFor="firstName" required>
                        First name
                      </label>
                      <Field
                        id="firstName"
                        name="firstName"
                        placeholder="First name..."
                      />
                      <Box color="red">
                        <ErrorMessage name="firstName" />
                      </Box>
                    </Stack>

                    <Stack>
                      <label htmlFor="lastName" required>
                        Last name
                      </label>
                      <Field
                        id="lastName"
                        name="lastName"
                        placeholder="Last name"
                      />
                      <Box color="red">
                        <ErrorMessage name="lastName" />
                      </Box>
                    </Stack>
                  </HStack>

                  <label htmlFor="email" required>
                    Email address
                  </label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                  />
                  <Box color="red">
                    <ErrorMessage name="email" />
                  </Box>

                  <label htmlFor="password" required>
                    Password
                  </label>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password "
                  />
                  <Box color="red">
                    <ErrorMessage name="password" />
                  </Box>

                  <label htmlFor="confirmPassword" required>
                    Confirm Password
                  </label>
                  <Field
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Reapeat your password "
                  />
                  <Box color="red">
                    <ErrorMessage name="confirmPassword" />
                  </Box>
                </Stack>

                <Stack my="2">
                  <Checkbox>
                    I agree to the{" "}
                    <Box as="span" color="purple.500">
                      Term & Condition
                    </Box>
                  </Checkbox>
                  <Button type="submit" alignSelf="flex-center" bg="gray.200">
                    Submit
                  </Button>
                  <Text as="p" alignSelf="center">
                    Already have a account ?{" "}
                    <Link to="/signin">
                      <Box as="span" color="purple.500" fontSize={18} ms="2">
                        Login
                      </Box>{" "}
                    </Link>
                  </Text>
                </Stack>
              </Form>
            </Formik>
          </Stack>
        </Box>
      </Center>
    </Container>
  );
};

export default Signup;
