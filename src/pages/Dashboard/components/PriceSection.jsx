import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { GoPlusCircle } from "react-icons/go";
import { FiMinusCircle } from "react-icons/fi";

const PriceSection = () => {
  const dayArr = ["7:15 PM", "12:55 AM", "6:35 AM", "12:15 PM", "5:55 PM"];
  const weekArr = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const monthArr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <Stack gap="4" direction="row" wrap="wrap">
      <Card.Root
        width="auto"
        h="300px"
        bg="white"
        border="none"
        color="#535d66"
      >
        <Card.Body gap="2">
          <Flex justify="space-between" gapX="8">
            <Stack>
              <Text fontSize="sm">Current Price</Text>

              <HStack fontSize="xl" fontWeight="medium">
                ₹26,500.42
                <HStack fontSize="sm" gapX="0.5" color="green">
                  <FaArrowTrendUp /> 0.04%
                </HStack>
              </HStack>
            </Stack>
            <Box>
              <HStack>
                <Button>
                  <GoPlusCircle />
                  Buy
                </Button>
                <Button>
                  <FiMinusCircle />
                  Sell
                </Button>
              </HStack>
            </Box>
          </Flex>
          <Box>
            <Tabs.Root defaultValue="day" variant="plain">
              <Flex justify="end">
                <Tabs.List bg="gray.300" rounded="2xl">
                  <Tabs.Trigger bg="transparent" value="hour">
                    1H
                  </Tabs.Trigger>
                  <Tabs.Trigger bg="transparent" value="day">
                    1D
                  </Tabs.Trigger>
                  <Tabs.Trigger bg="transparent" value="week">
                    1W
                  </Tabs.Trigger>
                  <Tabs.Trigger bg="transparent" value="month">
                    1M
                  </Tabs.Trigger>
                  <Tabs.Indicator rounded="2xl" bg="green.600" />
                </Tabs.List>
              </Flex>
              <Tabs.Content value="day">
                <Box>
                  <Image w="100%" src="/Graph.png" mt="5" />
                  <HStack justify="space-between">
                    {dayArr.map((time) => {
                      return (
                        <Text key={time} fontSize="xs" color="gray.600">
                          {time}
                        </Text>
                      );
                    })}
                  </HStack>
                </Box>
              </Tabs.Content>
              <Tabs.Content value="week">
                <Box>
                  <Image w="100%" src="/Graph.png" mt="5" />
                  <HStack justify="space-between">
                    {weekArr.map((time) => {
                      return (
                        <Text key={time} fontSize="xs" color="gray.600">
                          {time}
                        </Text>
                      );
                    })}
                  </HStack>
                </Box>
              </Tabs.Content>
              <Tabs.Content value="month">
                <Box>
                  <Image w="100%" src="/Graph.png" mt="5" />
                  <HStack justify="space-between">
                    {monthArr.map((time) => {
                      return (
                        <Text key={time} fontSize="xs" color="gray.600">
                          {time}
                        </Text>
                      );
                    })}
                  </HStack>
                </Box>
              </Tabs.Content>
            </Tabs.Root>
          </Box>
        </Card.Body>
      </Card.Root>
    </Stack>
  );
};
export default PriceSection;
