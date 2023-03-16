import styled from "styled-components"
import { typeScale } from "../utils"

const ToggleWrap = styled.div`
    height: 50px;
    width: 100%;
    background-color: ${props => props.theme.cardBackground};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    border-radius: 5px;
    margin-top: 25px;
    @media screen and (min-width: 500px){
        margin-top: 30px;
    }
`

const ToggleButton = styled.div`
    width: 38px;
    height: 20px;
    border-radius: 19px;
    background-color: ${props => props.theme.primaryColor};
    padding: 0 4px;
    display: flex;
    align-items: center;
    cursor: pointer;

    & > div {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: ${props => props.theme.textOnPrimary};
        transition: translate 100ms ease-in;
    }

    &.right > div {
        translate: 18px 0;
    }
`

const Labels = styled.span`
    color: ${props => props.theme.altTextColor};
    font-size: ${typeScale.helperText};
    font-weight: 500;
    cursor: pointer;

    &.active {
    color: ${props => props.theme.primaryColor};
    }
`
const ToggleCard = ({state, toggle, setRight, setLeft}) => {
    return (
        <ToggleWrap>
            <Labels className={!state? 'active': ''} onClick={setLeft}>
                Monthly
            </Labels>
            <ToggleButton className={state? 'right': ''} onClick={toggle}>
                <div></div>
            </ToggleButton >
            <Labels className={state ? 'active' : ''} onClick={setRight}>
                Yearly
            </Labels>
        </ToggleWrap>
    )
}

export default ToggleCard;