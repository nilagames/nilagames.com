import React, { useContext } from 'react';
import { navigate } from 'gatsby';
import { Button } from '@chakra-ui/core';
import { UrlContext } from '../contexts/UrlContext';

export default function CloseButton() {
  const { url } = useContext(UrlContext);

  return (
    <Button
      variantColor="pink"
      fontSize="0.8rem"
      lineHeight="1"
      textTransform="uppercase"
      size="lg"
      rightIcon="close"
      onClick={() => navigate(url)}
    >
      Close
    </Button>
  );
}
