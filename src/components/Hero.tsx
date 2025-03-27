import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const HeroSection = styled.section`
  padding: 8rem 2rem 5rem;
  background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 7rem 1rem 4rem;
  }
`;

export default HeroSection;
