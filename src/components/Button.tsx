import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  primary?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

const StyledButton = styled.button<{ primary?: boolean }>`
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 6px;
  transition: all 0.3s ease;
  background-color: ${props => props.primary ? '#4a6cf7' : 'white'};
  color: ${props => props.primary ? 'white' : '#4a6cf7'};
  border: 1px solid ${props => props.primary ? '#4a6cf7' : '#e9ebef'};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: ${props => props.primary ? '#3a5be0' : '#f8fafc'};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

function Button({ primary = true, onClick, children, type = 'button' }: ButtonProps) {
  return (
    <StyledButton primary={primary} onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
}

export default Button;
```

```