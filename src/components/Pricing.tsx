import React from 'react';
import styled from 'styled-components';
import { FiCheck } from 'react-icons/fi';
import Button from './Button';

const PricingSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f8fafc;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

export default PricingSection;
