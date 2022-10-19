import { Box, Container, Flex, GridItem, Heading, Text, Grid, Stack } from "@chakra-ui/react";
import React from "react";
import { useAuth } from "../../../services/auth";
import Layout from "../../common/Layout";

const Main = () => {
  const { user } = useAuth();
  return (
    <Layout>
      <Stack>
        <Heading>{`Welcome ${user.name}`}</Heading>
        <Container py={5} maxW={"container.lg"}>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            }}
            gap={6}
          >
            <GridItem w="100%" colSpan={{ base: 1, sm: 2, md: 2 }}>
              <Heading as={"h4"}>Upcoming Appointments</Heading>
            </GridItem>
            <GridItem w="100%">
              <Flex flexDirection={"column"}>
                <Text fontSize={"4xl"} fontWeight={"bold"}>
                  Appointment 1
                </Text>
                <Box fontSize={"sm"}>Address and time</Box>
              </Flex>
            </GridItem>
            <GridItem w="100%">
              <Flex flexDirection={"column"}>
                <Text fontSize={"4xl"} fontWeight={"bold"}>
                  Appointment 2
                </Text>
                <Box fontSize={"sm"}>Address and time</Box>
              </Flex>
            </GridItem>
          </Grid>
        </Container>
      </Stack>
    </Layout>
  );
};

export default Main;
