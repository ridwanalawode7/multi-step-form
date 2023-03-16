import styled from 'styled-components';
import { typeScale, primaryFont } from '../utils';

const LinkNum = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: solid 1px ${(props) => props.theme.textOnPrimary};
  color: ${(props) => props.theme.textOnPrimary};
  font-weight: 700;
  display: grid;
  place-items: center;
  font-size: 14px;
  
  &.active {
    background-color: ${(props) => props.theme.accentColor};
    border: solid 1px ${(props) => props.theme.accentColor};
    color: ${(props) => props.theme.textOnAccent};
  }
`;

const LinkTitleWrap = styled.div`
  flex-flow: column nowrap;
  justify-content: space-between;
  gap: 5px;
  display: none;

  @media screen and  (min-width: 500px){
    display: flex;
  }
`;

const LinkStep = styled.div`
  font-size: ${typeScale.copyrightText};
  color: ${(props) => props.theme.textOnPrimary};
  color: ${(props) => props.theme.textOnPrimary};
  line-height: 1;
  `;

const LinkName = styled.div`
line-height: 1;
  font-size: ${typeScale.paragraph};
  font-weight: 500;
  color: ${(props) => props.theme.textOnPrimary};
`

const NavLinkWrap = styled.a`
  all: unset;
  display: flex;
  gap: 15px;
  cursor: pointer;

  @media screen and (min-width: 500px) {
    align-items: center;
  }
`

export const NavLink = ({ number, name, active, href }) => {
  return (
    <NavLinkWrap
      href={href} >
      <LinkNum className={active ? 'active' : ''}>
        {number}
      </LinkNum>
      <LinkTitleWrap>
        <LinkStep>STEP {number}</LinkStep>
        <LinkName>{name}</LinkName>
      </LinkTitleWrap>
    </NavLinkWrap>
  );
};
