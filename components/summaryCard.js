import styled from 'styled-components';
import { typeScale } from '../utils';

const CardWrapper = styled.div`
  background-color: ${(props) => props.theme.cardBackground};
  border-radius: 10px;
  padding: 20px 15px;
  @media screen and (min-width: 500px){
    padding: 20px 20px;
  }
`;

const PlanSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
const PlanName = styled.div`
  font-weight: 500;
  font-size: ${typeScale.helperText};
  color: ${(props) => props.theme.primaryColor};
  @media screen and (min-width: 500px) {
    font-size: ${typeScale.paragraph};
  }
`;
const PlanPrice = styled.div`
  font-size: ${typeScale.helperText};
  font-weight: 500;
  color: ${(props) => props.theme.primaryColor};
  @media screen and (min-width: 500px) {
    font-size: ${typeScale.paragraph};
  }
`;
const AddOnName = styled.div`
  color: ${(props) => props.theme.altTextColor};
  font-size: ${typeScale.helperText};
`;
const AddOnPrice = styled.div`
  color: ${(props) => props.theme.primaryColor};
  font-size: ${typeScale.helperText};
`;

const ChangeLink = styled.a`
  font-size: ${typeScale.helperText};
  color: ${(props) => props.theme.altTextColor};
  text-decoration: underline;
`;

export const SummaryCard = ({ plan, addOns, billingCycle }) => {
  return (
    <CardWrapper>
      <div>
        <PlanSummary>
          <div>
            <PlanName>
              {plan ? plan.name : 'Testing'}{' '}
              {billingCycle ? '(Yearly)' : '(Monthly)'}
            </PlanName>
            <ChangeLink href={'/select-plan'}>Change</ChangeLink>
          </div>
          <PlanPrice>
            {plan
              ? billingCycle
                ? `$${plan.price * 10}/yr`
                : `$${plan.price}/mo`
              : '$30'}
          </PlanPrice>
        </PlanSummary>
      </div>
      <div
        style={{
          backgroundColor: 'hsl(229, 24%, 87%)',
          height: '2px',
        }}></div>
      <div>
        {addOns
          ? addOns.map((addOn, i) => {
              return (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    margin: '20px 0',
                  }}>
                  <AddOnName>{addOn.name}</AddOnName>
                  <AddOnPrice>
                    +$
                    {billingCycle
                      ? `${addOn.price * 10}/yr`
                      : `${addOn.price}/mo`}
                  </AddOnPrice>
                </div>
              );
            })
          : ''}
      </div>
    </CardWrapper>
  );
};

const TotalWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`

const TotalLabel = styled.span`
  color: ${(props) => props.theme.altTextColor};
  font-size: ${typeScale.helperText};
`;

const TotalPrice = styled.span`
color: ${props => props.theme.primaryHoverColor};
font-size: ${typeScale.paragraph};
font-weight: 500;

@media screen  and (min-width: 500px){
  font-size: ${typeScale.header4};
}
`

export const Total = ({total, billingCycle}) => {
  return (<TotalWrap>
    <TotalLabel>{`Total (${billingCycle ? 'per year' : 'per month'})`}</TotalLabel>
    <TotalPrice>${billingCycle ? `${total * 10}/yr` : `${total}/mo`}</TotalPrice>
  </TotalWrap>)
}