import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/core';

const Label = styled(Box)`
  flex: 100%;
  padding: 0.8rem;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1.1rem;
`;

const Input = styled.input`
  outline: none;
  cursor: pointer;
  margin-right: 1rem;
`;

const RadioItem = ({ checked, name, label, onChange, answered }) => (
  <Label as="label" bg={checked ? 'gray.300' : 'transparent'}>
    <div style={{ display: `flex`, alignItems: `center` }}>
      <Input
        type="radio"
        checked={checked}
        onChange={() => onChange(name)}
        id={name}
        name={name}
        disabled={answered}
      />{' '}
      {label}
    </div>
  </Label>
);

RadioItem.propTypes = {
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  answered: PropTypes.bool.isRequired,
};

export default RadioItem;
