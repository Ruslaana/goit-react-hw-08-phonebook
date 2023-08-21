import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #000; 
  margin-right: 20px;
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  font-weight: 500;
  font-size: 1.25rem;
  
  &:hover {
    color: white;
  }
`;


export const StyledFooter = styled.footer`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100px; 
`;

export const StyledP = styled.p`
  text-align: center;
  margin: 0;
`;

export const StyledA = styled.a`
  color: black
`;

