import { Box, Flex, GridItem, Heading, Text, Grid, Stack } from "@chakra-ui/react";
import React from "react";
import { PROFILE } from "../../../constants/apiRoutes";
import api from "../../../services/api";
import { useAuth } from "../../../services/auth";
import { formattedErrorMessage } from "../../../utils/formattedErrorMessage";
import useCustomToastr from "../../../utils/useCustomToastr";
import { CustomSpinner } from "../../common";
import Layout from "../../common/Layout";

const Main = () => {
  const { user } = useAuth();
  const [userProfile, setUserProfile] = React.useState({});
  const toast = useCustomToastr();
  const [loading, setLoading] = React.useState(false);

  const fetchProfile = () => {
    api
      .get(
        PROFILE +
          "?" +
          new URLSearchParams({
            user_id: user?.user_id,
            user_role: user?.user_role,
          })
      )
      .then((response) => {
        setUserProfile(response.data[user?.user_role]);
        if (user?.user_role == "insurer") localStorage.setItem("insurer_id", response.data[user?.user_role].insurer_id);
        setLoading(false);
      })
      .catch((error) => {
        const e = formattedErrorMessage(error);
        toast.showError(e);
        setLoading(false);
      });
  };

  React.useEffect(() => {
    setLoading(true);
    fetchProfile();
  }, []);

  return (
    <Layout>
      <Stack>
        <Heading>{`Welcome ${user.user_name}`}</Heading>
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
            {loading ? (
              <CustomSpinner />
            ) : (
              <>
                <Heading as={"h4"}>My details</Heading>
                <Text fontSize={"3xl"} fontWeight={"bold"}>
                  Height: {userProfile.height}
                </Text>
                <Text fontSize={"3xl"} fontWeight={"bold"}>
                  Weight: {userProfile.weight}
                </Text>
                <Text fontSize={"3xl"} fontWeight={"bold"}>
                  DOB: {userProfile.dob}
                </Text>
                <Text fontSize={"3xl"} fontWeight={"bold"}>
                  Gender: {userProfile.gender}
                </Text>
                <Text fontSize={"3xl"} fontWeight={"bold"}>
                  Allergies: {userProfile?.allergies?.join(", ")}
                </Text>
              </>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Layout>
  );
};

export default Main;
