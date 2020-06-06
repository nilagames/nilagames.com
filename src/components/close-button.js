import React, { useContext } from 'react';
import { navigate } from 'gatsby';
import styled from '@emotion/styled';

import { UrlContext } from '../contexts/UrlContext';

const Close = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 32px;
  height: 32px;

  opacity: 0.3;
  :hover {
    cursor: pointer;
    opacity: 1;
  }
  :before,
  :after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: #333;
  }
  :before {
    transform: rotate(45deg);
  }
  :after {
    transform: rotate(-45deg);
  }
`;

export default function CloseButton() {
  const { url } = useContext(UrlContext);

  return (
    <div>
      <Close onClick={() => navigate(url)} />
    </div>
  );
}
