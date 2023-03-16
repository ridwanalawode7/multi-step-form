import styled from 'styled-components';
import { typeScale } from '../utils';

const CardWrapper = styled.div`
  display: flex;
  padding: 16px 16px 20px;
  border: solid 1px ${(props) => props.theme.disabled};
  border-radius: 8px;
  /* flex-grow: 1; */
  /* flex-basis: 1fr; */
  max-width: 100%;
  width: 100%;
  gap: 20px;
  cursor: pointer;

  @media screen and (min-width: 500px) {
    flex-flow: column;
    justify-content: space-between;
    gap: 45px;
  }

  &:hover {
    border-color: ${(props) => props.theme.primaryHoverColor};
  }

  &.selected {
    border-color: ${(props) => props.theme.primaryHoverColor};
    background-color: ${(props) => props.theme.cardBackground};
  }
`;

const PlanName = styled.div`
  color: ${(props) => props.theme.primaryColor};
  font-size: ${typeScale.paragraph};
  font-weight: 500;
`;
const PlanPrice = styled.div`
  color: ${(props) => props.theme.disabled};
  font-size: ${typeScale.helperText};
`;

const AddText = styled.div`
  font-size: ${typeScale.copyrightText};
  color: ${(props) => props.theme.primaryColor};
`;

export const PlanCard = ({
  name,
  icon,
  price,
  yearly,
  selected,
  handleClick,
}) => {
  return (
    <CardWrapper className={selected ? 'selected' : ''} onClick={handleClick}>
      <div
        style={{
          width: '40px',
        }}>
        <img src={`/assets/images/${icon}.svg`} style={{ width: '100%' }} />
      </div>
      <div
        style={{
          display: 'flex',
          flexFlow: 'column nowrap',
          gap: '5px',
        }}>
        <PlanName>{name}</PlanName>
        <PlanPrice>{price}</PlanPrice>
        <AddText
          style={{
            display: yearly ? 'block' : 'none',
          }}>
          {' '}
          2 months free
        </AddText>
      </div>
    </CardWrapper>
  );
};
