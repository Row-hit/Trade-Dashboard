import React from "react";
import {
  Box,
  Heading,
  HStack,
  Icon,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";
import { Link, useLocation } from "react-router";

const Sidenav = () => {
  const location = useLocation();
  const isActive = (link) => {
    return location.pathname === link;
  };
  const navLinks = [
    {
      icon: <MdOutlineDashboardCustomize />,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: <TbArrowsDoubleNeSw />,
      text: "transaction",
      link: "/transaction",
    },
  ];

  return (
    <Stack
      bg="#fff"
      boxShadow="md"
      w="16rem"
      h="100vh"
      justifyContent="space-between"
    >
      <Box>
        <Heading fontSize="28px" pt="50px" pb="20px" textAlign="center">
          Row-Hit Coder
        </Heading>
        <Box mx="3" mt="6">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack
                py="3"
                px="4"
                cursor="pointer"
                bg={isActive(nav.link) && "#d9d9eb"}
                color={isActive(nav.link) ? "#000" : "#797e82"}
                _hover={{
                  bg: "#f3f3f7",
                  color: "#171717",
                }}
                borderRadius="0px 20px"
              >
                <Icon>{nav.icon}</Icon>
                <Text fontSize="14px" fontWeight="medium">
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>
      <Box mb="4" mx="4">
        <Link to="/support">
          <HStack
            py="3"
            px="4"
            bg={isActive("/support") && "#d9d9eb"}
            color={isActive("/support") ? "#000" : "#797e82"}
            _hover={{
              bg: "#f3f3f7",
              color: "#171717",
            }}
            borderRadius="0px 20px"
          >
            <Icon>
              <MdOutlineSupportAgent />
            </Icon>
            <Text fontSize="14px">Support</Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav;
