import { Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { useAuth } from "../../../services/auth";
import Layout from "../../common/Layout";

const Main = () => {
  const { user } = useAuth();

  return (
    <Layout>
      <Stack>
        <Heading>{`Welcome ${user.user_name}`}</Heading>
        <iframe
          id="iframe1"
          src="https://ourworldindata.org/grapher/total-cases-covid-19?tab=map"
          width="100%"
          height="600px"
          loading="lazy"
        ></iframe>
        <iframe
          src="https://ourworldindata.org/grapher/full-list-cumulative-total-tests-per-thousand"
          width="100%"
          height="600px"
          loading="lazy"
        ></iframe>
      </Stack>
    </Layout>
  );
};

export default Main;
