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
  password: string().required("Password is required"),
  confirmPassword: string()
    .oneOf([ref("password"), null], "Password must match")
    .required("Confirm password is required"),
}).required("All fields are required");

const ResetPassword = () => {
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
              Reset your Password
            </Text>
            <Text as="p" color="gray.400" my="4">
              type your new password
            </Text>
          </Stack>
          <Stack>
            <Formik
              initialValues={{
                password: "",
                confirmPassword: "",
              }}
              onSubmit={(values1) => onSubmit(values1)}
              validationSchema={signupValidationSchema}
            >
              <Form>
                <Stack>
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

                <Button
                  type="submit"
                  alignSelf="flex-center"
                  bg="gray.200"
                  w="full"
                  mt="10"
                >
                  <Link to="/reset-done">Reset Password</Link>
                </Button>
              </Form>
            </Formik>
          </Stack>
        </Box>
      </Center>
    </Container>
  );
};

export default ResetPassword;
