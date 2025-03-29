import { Avatar } from "../../../components/ui/avatar";
import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  HStack,
  Icon,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaBitcoin } from "react-icons/fa";

const Transaction = () => {
  const transactions = [
    {
      id: "1",
      icon: <AiFillDollarCircle />,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "2",
      icon: <FaBitcoin />,
      text: "BTC Sell",
      amount: "- 12.48513391 BTC",
      timestamp: "2022-05-27 12:32 PM",
    },
    {
      id: "3",
      icon: <AiFillDollarCircle />,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
  ];
  return (
    <Card.Root
      width="auto"
      h="300px"
      bg="white"
      border="none"
      color="#535d66"
      overflow="hidden"
    >
      <Card.Header>Recent Transactions</Card.Header>
      <Card.Body>
        <Stack>
          {transactions.map((trans) => {
            return (
              <Flex gapX="5" mb="6px" align="center" key={trans.id}>
                <Grid
                  placeItems="center"
                  bg="gray.300"
                  w="12"
                  h="10"
                  borderRadius="full"
                >
                  {trans.icon}
                </Grid>
                <Flex
                  w="full"
                  justifyContent="space-between"
                  borderBottomWidth="1px"
                  borderColor="gray.200"
                  fontSize="sm"
                >
                  <Stack gap="0">
                    <Text fontWeight="medium">{trans.text}</Text>
                    <Text fontSize="xs">{trans.timestamp}</Text>
                  </Stack>
                  <Stack>
                    <Text fontWeight="medium">{trans.amount}</Text>
                  </Stack>
                </Flex>
              </Flex>
            );
          })}
        </Stack>
      </Card.Body>
      <Card.Footer>
        <Button w="full" bg="gray.100" color="black">
          View All
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default Transaction;
