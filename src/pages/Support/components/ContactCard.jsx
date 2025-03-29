import { Field } from "../../../components/ui/field";
import {
  Box,
  Card,
  HStack,
  Stack,
  Button,
  Fieldset,
  Input,
} from "@chakra-ui/react";
import { Checkbox } from "../../../components/ui/checkbox";

const ContactCard = () => {
  return (
    <Card.Root
      flex={1}
      fontSize="2xs"
      borderRadius="30px 0px 60px 60px"
      overflow="hidden"
      size={{
        base: "xl",
        lg: "xs",
      }}
      px="10"
      py="5"
    >
      <Card.Header fontSize="xs" pb="5">
        You will receive response within 24 hours of time of submit.
      </Card.Header>
      <Card.Body size="xs">
        <Fieldset.Root>
          <Stack>
            <Fieldset.Legend fontSize="3xl">Contact details</Fieldset.Legend>
            <Fieldset.HelperText>
              Please provide your contact details below.
            </Fieldset.HelperText>
          </Stack>

          <Fieldset.Content>
            <HStack>
              <Field label="Name">
                <Input name="name" placeholder="James" />
              </Field>
              <Field label="Surname">
                <Input name="surname" placeholder="Arthur" />
              </Field>
            </HStack>

            <Field label="Email address">
              <Input name="email" type="email" placeholder="abcd123@xyz.com" />
            </Field>

            <Field label="Message">
              <Input type="textarea" h="20" placeholder="type here..." />
            </Field>
          </Fieldset.Content>

          <Checkbox>
            I agree with {"   "}
            <Box as="span" color="purple.500">
              Term & Condition
            </Box>
          </Checkbox>
          <Stack>
            <Button
              type="submit"
              alignSelf="flex-center"
              bg="gray.300"
              borderRadius="xl"
            >
              Send a massage
            </Button>
            <Button
              type="submit"
              alignSelf="flex-center"
              bg="orange.300"
              borderRadius="xl"
            >
              Book a meeting
            </Button>
          </Stack>
        </Fieldset.Root>
      </Card.Body>
    </Card.Root>
  );
};

export default ContactCard;
