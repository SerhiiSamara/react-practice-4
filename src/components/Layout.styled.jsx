import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  font-size: 22px;
  text-decoration: none;
  &.active {
    color: red;
  }
`;
