import { Button, Flex, Grid, Heading, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Layout from "../../common/Layout";
import { Card } from "../../patient";

const ManagePlans = () => {
  return (
    <Layout>
      <Stack>
        <Heading>Plans</Heading>
        <Stack isInline py={5} gap="4" background="white" p="4" border="1px" borderColor="gray.300" borderRadius="5px">
          <Heading as={"h3"}>Current Plan:</Heading>
          <Text fontSize={"3xl"} fontWeight={"bold"}>
            Plan 1
          </Text>
          <Text fontSize={"3xl"} fontWeight={"bold"}>
            Premium: $100
          </Text>
        </Stack>
        <Flex p={6}>
          <Input placeholder="Search for plans" background={"white"} />
          <Button colorScheme="blue" ml="4">Search</Button>
        </Flex>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {[...Array(10)].map((x, i) => (
            <Card key={i} />
          ))}
        </Grid>
      </Stack>
    </Layout>
  );
};

export default ManagePlans;
