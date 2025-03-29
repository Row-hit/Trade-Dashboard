import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "../components/ui/drawer";
import { IconButton } from "@chakra-ui/react";
import { FaBarsStaggered } from "react-icons/fa6";
import Sidenav from "./Sidenav";

const SideDrawer = ({ isOpen, onClose, onOpen }) => {
  return (
    <DrawerRoot placement={"left"}>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <IconButton
          display={{
            base: "block",
            lg: "none",
          }}
        >
          <FaBarsStaggered />
        </IconButton>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerBody color="#fff">
          <Sidenav />
        </DrawerBody>

        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};

export default SideDrawer;
