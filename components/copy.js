import styled from 'styled-components';
import { mobileTypeScale, typeScale } from '../utils';

export const Heading = styled.h1`
  margin: 10px 0;
  font-size: ${typeScale.header1};
  color: ${(props) => props.theme.primaryColor};
  font-weight: 700;
  
  @media screen and (max-width: 500px) {
    font-size: ${mobileTypeScale.header1};
  }
`;

export const Body = styled.p`
all: unset;
  font-size: ${typeScale.paragraph};
  color: ${(props) => props.theme.altTextColor};
`;