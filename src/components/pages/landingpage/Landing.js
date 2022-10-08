import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import  Header  from "./Header";
import Content  from "./Content";

const Landing = () => {

    return(
       <Flex>
        <Box>
            <Header />
            <Content />
        </Box>
       </Flex> 
    );
};
export default Landing;