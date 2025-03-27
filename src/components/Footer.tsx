import React from 'react';
import styled from 'styled-components';
import { FiTwitter, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';

const FooterSection = styled.footer`
  background-color: #1e293b;
  padding: 4rem 2rem 2rem;
  color: white;

  @media (max-width: 768px) {
    padding: 3rem 1rem 2rem;
  }
`;

export default FooterSection;
