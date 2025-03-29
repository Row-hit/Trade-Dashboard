import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import React, { Children } from "react";
import Sidenav from "./Sidenav";
import TopNav from "./TopNav";

const DashboardLayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Flex h="100vh" overflow="hidden">
        <Box
          display={{
            base: "none",
            lg: "flex",
          }}
        >
          <Sidenav />
        </Box>
        <Box flexGrow="1">
          <TopNav title={title} onOpen={onOpen} />
          <Container
            overflowX="hidden"
            overflowY="auto"
            h="calc(100vh - 64px)"
            mt="6"
            maxW="55rem"
            px="4"
          >
            {children}
          </Container>
        </Box>
      </Flex>
    </>
  );
};

export default DashboardLayout;
