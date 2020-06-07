import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { Flex, Box, Button, Link as ChakraLink } from '@chakra-ui/core';
import { SocialIcon } from 'react-social-icons';
import LogoText from './logo-text';

const StyledHeader = styled('header')`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
`;

const StyledFooter = styled('footer')`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
`;

const NavList = styled(Flex)`
  list-style: none;
  margin: 0;
  align-items: center;
  min-height: 80px;
`;

const NavItem = styled(Box)`
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 0;
  &:hover {
    color: #2d3748;
  }
`;

const StyledChakraLink = styled(ChakraLink)`
  &:hover {
    text-decoration: none;
  }
`;

const socialIconStyle = {
  width: `30px`,
  height: `30px`,
};

const links = [
  {
    href: '/',
    value: "Today's Challenge",
    type: 'button',
  },
];

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <NavList as="ul">
          <Box m={0} as="li" mr="auto">
            <LogoText />
          </Box>
          {links.map((link) => {
            return (
              <NavItem
                display={{ base: 'none', md: 'block' }}
                as="li"
                key={link.value}
                color="gray.500"
                mx={3}
              >
                {link.type === 'button' ? (
                  <>
                    {link.isExternal ? (
                      <StyledChakraLink href={link.href} isExternal>
                        <Button
                          variantColor="pink"
                          fontSize="0.8rem"
                          lineHeight="1"
                          textTransform="uppercase"
                          size="sm"
                        >
                          {link.value}
                        </Button>
                      </StyledChakraLink>
                    ) : (
                      <Link to={link.href}>
                        <Button
                          variantColor="pink"
                          fontSize="0.8rem"
                          lineHeight="1"
                          textTransform="uppercase"
                          size="sm"
                        >
                          {link.value}
                        </Button>
                      </Link>
                    )}
                  </>
                ) : (
                  <>
                    {link.isExternal ? (
                      <StyledChakraLink href={link.href} isExternal>
                        {link.value}
                      </StyledChakraLink>
                    ) : (
                      <Link to={link.href}>{link.value}</Link>
                    )}
                  </>
                )}
              </NavItem>
            );
          })}
          <NavItem as="li" ml={6}>
            <SocialIcon
              title="Follow me on twitter"
              alt="Twitter follow intent"
              style={socialIconStyle}
              target="_blank"
              rel="noopener noreferrer"
              url="https://twitter.com/intent/follow?screen_name=learnwithparam"
            />
          </NavItem>
        </NavList>
      </nav>
    </StyledHeader>
  );
};

export const Footer = (props) => {
  return (
    <Box py={6}>
      <StyledFooter>
        <Flex alignItems="center">
          <Box>
            <Box as="p" lineHeight="1.2">
              Made with ❤️ for kids
            </Box>
            <Box as="p" color="gray.400" fontSize="0.9rem">
              All rights reserved to <i>learnwithparam.com</i>
            </Box>
          </Box>
          <Box ml="auto">
            <NavList as="ul" display={{ base: 'none', md: 'flex' }}>
              {links.map((link) => {
                return (
                  <NavItem as="li" key={link.value} color="gray.500" ml="32px">
                    <Link to={link.href}>{link.value}</Link>
                  </NavItem>
                );
              })}
            </NavList>
          </Box>
        </Flex>
      </StyledFooter>
    </Box>
  );
};

export default Header;
