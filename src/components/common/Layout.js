import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useAuth } from "../../services/auth";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const { user } = useAuth();

  return (
    <Flex flexDirection={["column", "column", "row", "row"]} w="100%" minH="100vh">
      <Box bg="primary" display={["none", "none", "block", "block"]} w={"10%"} pl={[0, 0, 0, 1]} pr={2}>
        <Sidebar />
      </Box>
      <Box display="block" bg="tertiary" w={["100%", "100%", "90%", "90%"]} p="4">
        <Flex justify="flex-end" align="center" mb="4">
          <Text>{user?.name || "Guest"}</Text>
          <Box w="0.1em" h="1em" mx="0.7em" background="primary" />
          <Text>{user?.role || "User"}</Text>
        </Flex>
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;
