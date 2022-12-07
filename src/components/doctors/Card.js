import { Box, Button, Center, List, ListItem, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const Card = (props) => {
  const { doctor } = props;
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
            {doctor.name || "-"}
          </Text>
          <Stack direction={"row"} align={"center"} justify={"center"}>
            <Text fontSize={"6xl"} fontWeight={800}>
              {doctor.experience}
            </Text>
            <Text color={"gray.500"}>years of experience</Text>
          </Stack>
        </Stack>
        <Box bg={useColorModeValue("gray.50", "gray.900")} p={6}>
          <List spacing={3}>
            <ListItem>Email: {doctor.contact_email}</ListItem>
            <ListItem>Phone: {doctor.contact_phone}</ListItem>
            <ListItem>Gender: {doctor.gender}</ListItem>
            <ListItem>Hospital Name: {doctor.hospital_name}</ListItem>
            <ListItem>Hospital address: {doctor.hospital_address}</ListItem>
            <ListItem>Specialty: {doctor.speciality}</ListItem>
            <ListItem>Covid Supported: {doctor.is_hosp_covid_supported ? "Yes" : "No"}</ListItem>
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

export default Card;
