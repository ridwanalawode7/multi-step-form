import styled from 'styled-components';
// import { applyStyleModifiers } from "styled-components-modifiers";
import { mobileTypeScale, typeScale, primaryFont } from '../utils';

export const Button = styled.button`
  /* all: unset; */
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 5px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${primaryFont};
  font-size: ${mobileTypeScale.helperText};
  transition: background-color 0.1s linear, color 0.1s linear;
  font-weight: 500;
  border: none;

  @media screen and (min-width: 500px) {
    height: 48px;
    min-width: 125px;
    font-family: ${primaryFont};
    font-size: ${typeScale.paragraph};
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColor};
  /* background-color: purple; */
  color: ${(props) => props.theme.textOnPrimary};

  &:hover {
    filter: brightness(120%);
  }

  &:active {
    background-color: ${(props) => props.theme.primaryHoverColor};
  }
`;

export const SecondaryButton = styled(Button)`
  background: none;
  border: none;
  color: ${(props) => props.theme.altTextColor};

  &:hover {
    background: none;
    color: ${(props) => props.theme.primaryColor};
  }
`;


