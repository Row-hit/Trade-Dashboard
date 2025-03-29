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
import { useMutation } from "@tanstack/react-query";
import SigninUser from "../../../api/Query/userQuery";

const signinValidationSchema = object({
  email: string().required("Email is required"),
  password: string().required("Password is required"),
}).required("All fields are required");

const Signin = () => {
  const { mutate, isLoading, error, isError } = useMutation({
    mutationKey: ["signin"],
    mutationFn: SigninUser,
  });

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 10));
    mutate(values);
  };
  if (isError) return <Box>{error.message}</Box>;
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
            <Text as="h1" fontSize={30} mb="5">
              Welcome to Crypto App{" "}
            </Text>
          </Stack>
          <Stack>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={(values1) => onSubmit(values1)}
              validationSchema={signinValidationSchema}
            >
              <Form>
                <Stack>
                  <Stack>
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
                    <Box
                      mt="-12px"
                      as="span"
                      color="purple.500"
                      fontSize="13px"
                      alignSelf="flex-end"
                    >
                      <Link to="/forgot-password">Forgot Password</Link>
                    </Box>
                  </Stack>

                  <Stack my="2">
                    <Checkbox>Remember me</Checkbox>

                    <Button type="submit" alignSelf="flex-center" bg="gray.200">
                      Submit
                    </Button>

                    <Text as="p" alignSelf="center">
                      Don't have a account ?{" "}
                      <Link to="/signup">
                        <Box as="span" color="purple.500" fontSize={18} ms="2">
                          Sign up
                        </Box>{" "}
                      </Link>
                    </Text>
                  </Stack>
                </Stack>
              </Form>
            </Formik>
          </Stack>
        </Box>
      </Center>
    </Container>
  );
};

export default Signin;
