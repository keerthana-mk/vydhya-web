import {Box, Button, Flex, Img, Spacer, Text, useMediaQuery,} from '@chakra-ui/react';
import React from 'react';

// import WelcomeImage from "";

  const Content = () => {
    const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
    return (
      <Flex
        alignItems="center"
        w="full"
        px={isLargerThanLG ? '16' : '6'}
        py="16"
        minHeight="90vh"
        justifyContent="space-between"
        flexDirection={isLargerThanLG ? 'row' : 'column'}
      >
        <Box mr={isLargerThanLG ? '6' : '0'} w={isLargerThanLG ? '60%' : 'full'}>
          <Text
            fontSize={isLargerThanLG ? '5xl' : '4xl'}
            fontWeight="bold"
            mb="4"
          >
            {' '}
            YDHYA - Building a bridge between your wellbeing and you.
          </Text>
  
          <Text mb="6" fontSize={isLargerThanLG ? 'lg' : 'base'} opacity={0.7}>
            To provide everyone, everywhere with accessible healthcare and affordable incurance.
          </Text>
  
          <Button
            w="200px"
            colorScheme="blue"
            variant="solid"
            h="50px"
            size={isLargerThanLG ? 'xlg' : 'md'}
            mb={isLargerThanLG ? '0' : '10'}
            onClick={(e) => {
              e.preventDefault();
              window.location.href='./login';
              }}
          >
            Get Started!
          </Button>
        </Box>
        <Spacer />
        <Flex
          w={isLargerThanLG ? '50%' : 'full'}
          alignItems="center"
          justifyContent="center"
        >
          <Img src="https://www.usnews.com/dims4/USNEWS/26da18f/2147483647/crop/7003x4671%2B0%2B492/resize/970x647/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F4b%2Fd0%2F5cb792df497397035c3fd88bef73%2F211102hckhnplans-stock.jpg" alt="Chakra UI" />
        </Flex>
      </Flex>
    );
  };
  export default Content;