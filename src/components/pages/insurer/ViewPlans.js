import { Flex, Grid, Heading, Input, Stack } from "@chakra-ui/react";
import React from "react";
import Layout from "../../common/Layout";
import InsurerCard from "../../insurer/Card";

const ViewPlans = () => {
  return (
    <Layout>
      <Stack>
        <Heading>Plans</Heading>
        <Flex p={6}>
          <Input placeholder="Search plans" background={"white"} />
        </Flex>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {[...Array(10)].map((x, i) => (
            <InsurerCard key={i} />
          ))}
        </Grid>
      </Stack>
    </Layout>
  );
};

export default ViewPlans;
