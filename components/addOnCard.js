import styled from 'styled-components';
import { mobileTypeScale, typeScale } from '../utils';

const AddOnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: solid 1px ${(props) => props.theme.disabled};
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    border-color: ${(props) => props.theme.primaryHoverColor};
  }

  &.selected {
    border-color: ${(props) => props.theme.primaryHoverColor};
    background-color: ${(props) => props.theme.cardBackground};
  }
`;

const AddOnName = styled.div`
  color: ${(props) => props.theme.primaryColor};
  font-size: ${typeScale.helperText};
  font-weight: 500;

  @media screen and (min-width: 500px) {
    font-size: ${mobileTypeScale.paragraph};
  }
  `;

const AddOnDesc = styled.div`
  color: ${(props) => props.theme.altTextColor};
  font-size: ${typeScale.copyrightText};
  @media screen and (min-width: 500px) {
    font-size: ${typeScale.helperText};
  }
  `;
const AddOnPrice = styled.div`
  color: ${(props) => props.theme.primaryActiveColor};
  font-size: ${typeScale.copyrightText};
  @media screen and (min-width: 500px) {
    font-size: ${typeScale.helperText};
  }
`;
const AddOnCheckBox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  display: grid;
  place-items: center;
  border: solid 1px ${(props) => props.theme.disabled};

  &:hover {
    border-color: ${(props) => props.theme.primaryHoverColor};
  }

  &.selected {
    border-color: ${(props) => props.theme.primaryHoverColor};
    background-color: ${(props) => props.theme.primaryActiveColor};
  }

  & > img {
    display: none;
  }

  &.selected > img {
    display: block;
  }
`;

export const AddOnCard = ({ name, desc, price, selected, handleClick }) => {
  return (
    <AddOnWrapper onClick={handleClick} className={selected ? 'selected' : ''}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
        }}>
        <AddOnCheckBox className={selected ? 'selected' : ''}>
          <img
            src='/assets/images/icon-checkmark.svg'
            style={{
              width: '70%',
            }}
          />
        </AddOnCheckBox>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}>
          <AddOnName> {name}</AddOnName>
          <AddOnDesc>{desc}</AddOnDesc>
        </div>
      </div>

      <AddOnPrice>{price}</AddOnPrice>
    </AddOnWrapper>
  );
};
