import { Flex, Grid, Heading, Input, Stack, Button } from "@chakra-ui/react";
import React from "react";
import Layout from "../../common/Layout";
import { Card } from "../../doctors";

const ViewDoctors = () => {
  return (
    <Layout>
      <Stack>
        <Heading>Doctors</Heading>
        <Flex p={6}>
          <Input placeholder="Search doctors" background={"white"} />{" "}
          <Button colorScheme="blue" ml="4">
            Search
          </Button>
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

export default ViewDoctors;
