import { Box, Container, Flex, GridItem, Heading, Text, Grid, Stack } from "@chakra-ui/react";
import React from "react";
import { useAuth } from "../../../services/auth";
import Layout from "../../common/Layout";

const InsurerMain = () => {
  const { user } = useAuth();
  return (
    <Layout>
      <Stack>
        <Heading>{`Welcome ${user.user_name}`}</Heading>
        <Container py={5} maxW={"container.lg"}>
          <Heading as={"h4"}>Upcoming Claims</Heading>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            }}
            gap={6}
            mt={5}
          >
            <GridItem w="100%">
              <Flex flexDirection={"column"} p="10" borderRadius={10}>
                <Text fontSize={"4xl"} fontWeight={"bold"}>
                  Claim 1
                </Text>
                <Box fontSize={"sm"}>$1000</Box>
                <Box fontSize={"sm"}>Address and time</Box>
              </Flex>
            </GridItem>
            <GridItem w="100%">
              <Flex flexDirection={"column"} p="10" borderRadius={10}>
                <Text fontSize={"4xl"} fontWeight={"bold"}>
                  Claim 2
                </Text>
                <Box fontSize={"sm"}>$1000</Box>
                <Box fontSize={"sm"}>Address and time</Box>
              </Flex>
            </GridItem>
          </Grid>
        </Container>
      </Stack>
    </Layout>
  );
};

export default InsurerMain;
