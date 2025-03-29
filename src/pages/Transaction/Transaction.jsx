import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import {
  Badge,
  Button,
  Card,
  Flex,
  HStack,
  Input,
  Tag,
} from "@chakra-ui/react";
import { BsDownload } from "react-icons/bs";
import { Tabs } from "@chakra-ui/react";
import TransactionTable from "./components/TransactionTable";
import { InputGroup } from "../../components/ui/input-group";
import { BiSearch } from "react-icons/bi";

const Transaction = () => {
  const tabs = [
    { name: "All", count: "349" },
    { name: "Deposite", count: "114" },
    { name: "Withdraw", count: "213" },
    { name: "Trade", count: "49" },
  ];
  return (
    <DashboardLayout title={"Transaction"}>
      <Flex justify="flex-end" mb="5">
        <Button bg="#5f00d9" color="white">
          <BsDownload />
          Export CSV
        </Button>
      </Flex>
      <Card.Root bg="white" color="black" border={"none"}>
        <Card.Body>
          <Tabs.Root defaultValue="All">
            <Tabs.List display="flex" justifyContent="space-between">
              <HStack>
                {tabs.map((tab) => {
                  return (
                    <Tabs.Trigger value={tab.name} key={tab.name}>
                      {tab.name}
                      <Badge bg="gray.200" color="gray.500">
                        {tab.count}
                      </Badge>
                    </Tabs.Trigger>
                  );
                })}
                <Tabs.Indicator bg="gray.100" rounded=" 20px 20px 0px 0px" />
              </HStack>
              <InputGroup startElement={<BiSearch />}>
                <Input placeholder="Search ID or destination" />
              </InputGroup>
            </Tabs.List>
            <Tabs.Content value="All">
              <TransactionTable />
            </Tabs.Content>
            <Tabs.Content value="Deposite">
              DEWosit DEoiop;lsdkfpksdjfopikgs
            </Tabs.Content>
            <Tabs.Content value="Withdraw">Withresarlselftwsg</Tabs.Content>
            <Tabs.Content value="Trade">TERAderkfsdgkjdfgkljfsd</Tabs.Content>
          </Tabs.Root>
        </Card.Body>
      </Card.Root>
    </DashboardLayout>
  );
};

export default Transaction;
