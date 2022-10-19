import React from "react";
import { Box, Divider, Flex } from "@chakra-ui/react";
import adminMenu from "../../constants/adminMenu";
import insurerMenu from "../../constants/insurerMenu";
import { Link } from "react-router-dom";
import { useAuth, useLogout } from "../../services/auth";
import { BiLogOut } from "react-icons/bi";

function Sidebar() {
  const logout = useLogout();
  const { user } = useAuth();
  console.log("🚀 -> file: Sidebar.js -> line 12 -> user", user)

  const menuSelector = {
    customer: adminMenu,
    insurer: insurerMenu,
  };

  const menu = menuSelector[user?.role];

  const isActive = (link) => {
    const currentPath = window.location.pathname;
    return currentPath.includes(link);
  };

  const Entry = ({ onClick, children, link }) => (
    <Box
      p={3}
      my={2}
      fontSize={15}
      textAlign="center"
      backgroundColor={isActive(link) ? "secondary" : "transparent"}
      color="white"
      cursor="pointer"
      _hover={{ bg: "secondary" }}
      borderRadius={4}
      onClick={() => onClick && onClick()}
    >
      <Flex align="center" gap={2}>
        {children}
      </Flex>
    </Box>
  );

  return (
    <>
      {menu.map((m) => (
        <React.Fragment key={m.link}>
          <Link to={m.link}>
            <Entry link={m.link}>
              {m.icon}
              {m.name}
            </Entry>
          </Link>
        </React.Fragment>
      ))}
      <Box position="absolute" bottom="0" w="9%">
        <Divider />
        <Entry onClick={() => logout()}>
          <BiLogOut />
          Logout
        </Entry>
      </Box>
    </>
  );
}

export default Sidebar;
