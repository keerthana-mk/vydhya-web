import { Box, Button, Center, CheckboxIcon, Image, List, ListIcon, ListItem, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const InsurerCard = () => {
  return (
    <Center py={6}>
      <Box maxW={"330px"} w={"full"} bg={useColorModeValue("white", "gray.800")} boxShadow={"2xl"} rounded={"md"} overflow={"hidden"}>
        <Stack textAlign={"center"} p={6} color={useColorModeValue("gray.800", "white")} align={"center"}>
          <Text
            fontSize={"xl"}
            fontWeight={500}
            bg={useColorModeValue("green.50", "green.900")}
            p={2}
            px={3}
            color={"green.500"}
            rounded={"full"}
          >
            Plan
          </Text>
          <Stack direction={"row"} align={"center"} justify={"center"}>
            <Text fontSize={"3xl"}>$</Text>
            <Text fontSize={"6xl"} fontWeight={800}>
              79
            </Text>
            <Text color={"gray.500"}>/session</Text>
          </Stack>
        </Stack>
        <Box bg={useColorModeValue("gray.50", "gray.900")} p={6}>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={CheckboxIcon} color="green.400" />
              5.000 views
            </ListItem>
            <ListItem>
              <ListIcon as={CheckboxIcon} color="green.400" />
              Specialization 1, Specialization 2, Specialization 3, Specialization 4
            </ListItem>
            <ListItem>
              <ListIcon as={CheckboxIcon} color="green.400" />
              Location
            </ListItem>
            <ListItem>
              <ListIcon as={CheckboxIcon} color="green.400" />
              All features
            </ListItem>
          </List>

          <Button
            mt={10}
            w={"full"}
            bg={"green.400"}
            color={"white"}
            rounded={"xl"}
            boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
            _hover={{
              bg: "green.500",
            }}
            _focus={{
              bg: "green.500",
            }}
          >
            Book an appointment
          </Button>
        </Box>
      </Box>
    </Center>
  );
};

export default InsurerCard;
