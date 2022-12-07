import { Box, Flex, Grid, GridItem, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useAuth } from "../../../services/auth";
import useCustomToastr from "../../../utils/useCustomToastr";
import Layout from "../../common/Layout";

const DoctorHome = () => {
  const toast = useCustomToastr();
  const { user } = useAuth();

  return (
    <Layout>
      <Stack>
        <Heading>{`Welcome ${user.user_name}`}</Heading>
        <Stack isInline py={5} gap="4">
          <Stack p="4" border="1px" borderColor="gray.300" borderRadius="5px">
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
                <Flex flexDirection="column" border="1px" borderColor="gray.300" borderRadius="5px" p="4">
                  <Text fontSize={"3xl"} fontWeight={"bold"}>
                    Appointment 1
                  </Text>
                  <Box fontSize={"sm"}>Address and time</Box>
                </Flex>
              </GridItem>
              <GridItem w="100%">
                <Flex flexDirection="column" border="1px" borderColor="gray.300" borderRadius="5px" p="4">
                  <Text fontSize={"3xl"} fontWeight={"bold"}>
                    Appointment 2
                  </Text>
                  <Box fontSize={"sm"}>Address and time</Box>
                </Flex>
              </GridItem>
            </Grid>
          </Stack>
        </Stack>
      </Stack>{" "}
    </Layout>
  );
};

export default DoctorHome;
