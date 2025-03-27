import React, { useState } from 'react';
import styled from 'styled-components';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQSection = styled.section`
  padding: 5rem 2rem;
  background-color: white;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

export default FAQSection;
