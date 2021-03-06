import React from 'react';
import {
  Flex,
  Box,
  Button,
  Heading,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/core';
import { Link } from 'gatsby';

const HeroButton = ({ buttonText }) => (
  <Button
    variantColor="pink"
    size="lg"
    fontSize="0.9rem"
    lineHeight="1"
    textTransform="uppercase"
  >
    {buttonText}
  </Button>
);

const Hero = (props) => {
  const {
    title,
    description,
    hasButton = false,
    buttonText = 'Join the community',
    buttonLink,
    HeroImage,
  } = props;

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Heading
        as="h3"
        mb={6}
        fontSize={{ base: '3xl', md: '4xl' }}
        color="gray.900"
      >
        {title}
      </Heading>
      <Text
        fontSize={{ base: 'lg', md: 'xl' }}
        as="p"
        color="gray.700"
        mb={6}
        maxWidth="620px"
      >
        {description}
      </Text>
      {hasButton && (
        <>
          {buttonLink ? (
            <a href={buttonLink} target="_blank">
              <HeroButton buttonText={buttonText} />
            </a>
          ) : (
            <HeroButton buttonText={buttonText} />
          )}
        </>
      )}
      {HeroImage && (
        <Box w="100%" mt="60px">
          <HeroImage />
        </Box>
      )}
    </Flex>
  );
};

export const HeroWithImage = (props) => {
  const {
    title,
    description,
    HeroImage,
    buttonText = 'Join the community',
    hasButton,
    isExternalLink,
    buttonLink,
    hasSecondaryButton,
    secondaryButtonText,
    secondaryButtonLink,
  } = props;

  return (
    <Flex
      minH={{ base: 0, md: '480px' }}
      w="100%"
      my={{ base: 0, md: 6 }}
      alignItems="center"
      flexDirection={{ base: 'column-reverse', md: 'row' }}
      px={{ base: '20px', md: 0 }}
    >
      <Box width={{ base: '100%', lg: '50%' }} mx={6}>
        <Heading
          as="h3"
          mb={6}
          fontSize={{ base: '3xl', md: '4xl' }}
          color="gray.900"
        >
          {title}
        </Heading>
        <Text
          as="p"
          color="gray.700"
          mb={6}
          fontSize={{ base: 'lg', md: 'xl' }}
          maxWidth="520px"
        >
          {description}
        </Text>
        <Box pt={3}>
          {hasButton ? (
            <>
              {isExternalLink ? (
                <ChakraLink href={buttonLink} isExternal>
                  <Button
                    variantColor="pink"
                    size="lg"
                    lineHeight="1"
                    textTransform="uppercase"
                  >
                    {buttonText}
                  </Button>
                </ChakraLink>
              ) : (
                <Link to={buttonLink}>
                  <Button
                    variantColor="pink"
                    size="lg"
                    lineHeight="1"
                    textTransform="uppercase"
                  >
                    {buttonText}
                  </Button>
                </Link>
              )}
            </>
          ) : null}
          {hasSecondaryButton && (
            <Link to={secondaryButtonLink}>
              <Button
                variantColor="gray"
                size="lg"
                lineHeight="1"
                textTransform="uppercase"
                ml={3}
              >
                {secondaryButtonText}
              </Button>
            </Link>
          )}
        </Box>
      </Box>
      {HeroImage && (
        <Box width={{ base: '100%', lg: '50%' }} mx={6}>
          <HeroImage />
        </Box>
      )}
    </Flex>
  );
};

export default Hero;
