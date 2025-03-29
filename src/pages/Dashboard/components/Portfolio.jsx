import { Button, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { GoInfo } from "react-icons/go";
import { Tag } from "../../../components/ui/tag";
import { PiHandDepositLight } from "react-icons/pi";
import { BiMoneyWithdraw } from "react-icons/bi";

const Portfolio = () => {
  return (
    <HStack
      bg="#fff"
      p="6"
      borderRadius="lg"
      justify="space-between"
      flexDir={{
        base: "column",
        lg: "row",
      }}
      align={{
        base: "flex-start",
        md: "center",
      }}
    >
      <HStack
        gapX="10"
        flexDir={{
          base: "column",
          md: "row",
        }}
      >
        <Stack>
          <HStack>
            <Text fontSize="xs">Total Portfolio value</Text>

            <GoInfo />
          </HStack>
          <Text color="#535d66" fontSize="xl" fontWeight="medium">
            ₹ 112,324.27
          </Text>
        </Stack>
        <Stack>
          <Text fontSize="xs">Wallet Balance</Text>
          <HStack color="#535d66" gapX="8">
            <HStack fontSize="xl" fontWeight="medium">
              205.4253321{" "}
              <Tag bg="gray.200" shadow="none" color="gray.600">
                BTC
              </Tag>
            </HStack>

            <HStack fontSize="xl" fontWeight="medium">
              ₹1300
              <Tag bg="gray.200" color="gray.600" shadow="none">
                INR
              </Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>
      <HStack>
        <Button>
          <PiHandDepositLight />
          Deposite
        </Button>
        <Button>
          <BiMoneyWithdraw />
          Withdraw
        </Button>
      </HStack>
    </HStack>
  );
};

export default Portfolio;
