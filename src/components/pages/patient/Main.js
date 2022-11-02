import { Box, Flex, GridItem, Heading, Text, Grid, Stack } from "@chakra-ui/react";
import React from "react";
import { useAuth } from "../../../services/auth";
import Layout from "../../common/Layout";

const Main = () => {
  const { user } = useAuth();
  return (
    <Layout>
      <Stack>
        <Heading>{`Welcome ${user.username}`}</Heading>
        <Stack isInline py={5} gap="4">
          <Stack background="white" p="4" border="1px" borderColor="gray.300" borderRadius="5px">
            <Heading as={"h4"}>Upcoming Appointments</Heading>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              }}
              gap={6}
              m="4"
            >
              <GridItem w="100%">
                <Flex flexDirection="column" background="white" border="1px" borderColor="gray.300" borderRadius="5px" p="4">
                  <Text fontSize={"3xl"} fontWeight={"bold"}>
                    Appointment 1
                  </Text>
                  <Box fontSize={"sm"}>Address and time</Box>
                </Flex>
              </GridItem>
              <GridItem w="100%">
              <Flex flexDirection="column" background="white" border="1px" borderColor="gray.300" borderRadius="5px" p="4">
                  <Text fontSize={"3xl"} fontWeight={"bold"}>
                    Appointment 2
                  </Text>
                  <Box fontSize={"sm"}>Address and time</Box>
                </Flex>
              </GridItem>
            </Grid>
          </Stack>
          <Stack background="white" p="4" border="1px" borderColor="gray.300" borderRadius="5px">
            <Heading as={"h4"}>Customer details</Heading>
            <Text fontSize={"3xl"} fontWeight={"bold"}>
              Height: 180cms
            </Text>
            <Text fontSize={"3xl"} fontWeight={"bold"}>
              Weight: 80kgs
            </Text>
            <Text fontSize={"3xl"} fontWeight={"bold"}>
              Age: 32yrs
            </Text>
            <Text fontSize={"3xl"} fontWeight={"bold"}>
              Gender: female
            </Text>
            <Text fontSize={"3xl"} fontWeight={"bold"}>
              Blood Type: AB-
            </Text>
            <Text fontSize={"3xl"} fontWeight={"bold"}>
              Allergies: a1, a2
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Layout>
  );
};

export default Main;
