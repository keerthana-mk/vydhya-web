import React from "react";
import {Flex, Text, Spacer } from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react';
//import { Link } from "@chakra-ui/react";
import { Link} from "react-router-dom";

const Header =() => {
    
    return (
        <Flex
      h="10vh"
      alignItems="center"
      p="6"
      position="sticky"
      top="0"
      zIndex="sticky"
      w="full"
    >
      <Text fontSize="xl" fontWeight="bold">
        YDHYA
      </Text>

      <Spacer />
      <Link to="/login">
      <Flex alignItems="center">
          
            Login/Sign Up <Icon name="external-link" mx="2px" />
         
      </Flex> 
      </Link>
    </Flex>
    );

};
export default Header;