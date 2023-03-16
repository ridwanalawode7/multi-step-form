import React from 'react';
import styled from 'styled-components';
import { typeScale, primaryFont, mobileTypeScale } from '../utils';

const InputField = styled.input`
  width: 100%;
  padding: 16px 8px;
  border: solid 1px ${(props) => props.theme.disabled};
  color: ${(props) => props.theme.primaryColor};
  padding-left: 8px;
  font-family: ${primaryFont};
  font-size: ${typeScale.paragraph};
  border-radius: 8px;
  font-weight: 500;
  transition: border-color 0.2s linear;

  &:hover {
    border: solid 1px ${(props) => props.theme.primaryHoverColor};
  }

  &.error {
    border-color: ${(props) => props.theme.errorColor};
  }

  @media screen and (max-width: 500px) {
    font-size: ${mobileTypeScale.paragraph};
    padding: 10px 8px;
    border-radius: 5px;
  }
`;

const InputLabel = styled.label`
  color: ${(props) => props.theme.primaryColor};
  font-size: ${typeScale.helperText};
  @media screen and (max-width: 500px) {
    font-size: ${typeScale.copyrightText};
  }
  `;

const ErrMsg = styled.span`
  color: ${(props) => props.theme.errorColor};
  font-weight: 500;
  display: none;
  font-size: ${typeScale.helperText};
  @media screen and (max-width: 500px) {
    font-size: ${typeScale.copyrightText};
  }

  &.true {
    display: block;
  }
`;

export const TextFeild = ({
  name,
  type,
  err,
  placeholder,
  value,
  handleCahnge,
  handleSumbit,
}) => {
  const handleTextCahnge = (e) => {
    handleCahnge(e.target.value);
  };
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column nowrap',
      }}>
      <div
        style={{
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'space-between',
          marginBottom: '3px',
        }}>
        <InputLabel htmlFor={name ? name.toLowerCase() : ''}>
          {' '}
          {name}
        </InputLabel>
        <ErrMsg className={err ? 'true' : ''}>This field is required</ErrMsg>
      </div>
      <InputField
        name={name ? name.toLowerCase() : ''}
        className={err ? 'error' : ''}
        type={type}
        placeholder={placeholder}
        onChange={handleTextCahnge}
        value={value}></InputField>
    </div>
  );
};
