import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { LiaUsersCogSolid } from "react-icons/lia";
import SideDrawer from "./SideDrawer";
import { Link } from "react-router";

const TopNav = ({ title, onOpen }) => {
  return (
    <Box px="4" bg="#fff">
      <HStack maxW="55rem" h="16" justify="space-between" mx="auto">
        <SideDrawer />
        <Heading fontSize="28px">{title}</Heading>
        <MenuRoot position="relative">
          <MenuTrigger asChild fontSize={"32px"}>
            <LiaUsersCogSolid />
          </MenuTrigger>
          <MenuContent
            position="absolute"
            top={"60px"}
            right={{
              base: "0",
              lg: "60px",
            }}
          >
            <Link to="/signup">
              <MenuItem
                _hover={{
                  bg: "#738988",
                  color: "#fff",
                }}
                mb="10px"
              >
                Sign in
              </MenuItem>
            </Link>
            <Link to="/support">
              <MenuItem
                _hover={{
                  bg: "#738988",
                  color: "#fff",
                }}
              >
                Support
              </MenuItem>
            </Link>
          </MenuContent>
        </MenuRoot>
      </HStack>
    </Box>
  );
};

export default TopNav;
