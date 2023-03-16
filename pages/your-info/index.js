import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { Body, Heading } from '../../components/copy';
import NavBar from '../../components/navBar';
import { TextFeild } from '../../components/TextFields';
import { defaultTheme } from '../../utils';
import { GlobalStyle } from '../../utils';
import { PrimaryButton } from '../../components/Buttons';
import main from '../../styles/main-style.module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Page = () => {
  const router = useRouter();
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [numberInput, setNumberInput] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [numberError, setNumberError] = useState(false);

  useEffect(() => {
    let strPersonalInfo = localStorage.getItem('personalInfo');
    let objPersonalInfo = JSON.parse(strPersonalInfo);
    objPersonalInfo
      ? (() => {
          setNameInput(objPersonalInfo.name);
          setEmailInput(objPersonalInfo.email);
          setNumberInput(objPersonalInfo.number);
        })()
      : '';
  }, []);

  const isNextable = () => {
  
}

  return (
    <ThemeProvider theme={defaultTheme}>
      <article>
        <Head>
          <title>Sign Up</title>
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
        </Head>
        <GlobalStyle />
        <main className={main.allContainer}>
          <div className={main.contentContainer}>
            <div className={main.navLinksContainer}>
              <NavBar active='your-info' />
            </div>
            <div className={main.formContainer}>
              <Heading>Personal Info</Heading>
              <Body>
                Please provide your name, email address, and phone number.
              </Body>
              <div className={main.form1}>
                <TextFeild
                  name='Name'
                  type='text'
                  err={nameError}
                  placeholder='e.g. Stephen King'
                  handleCahnge={(val) => {
                    setNameInput(val);
                  }}
                  value={nameInput}
                />
                <TextFeild
                  name='Emial'
                  type='email'
                  err={emailError}
                  placeholder='e.g. stephenking@lorem.com'
                  handleCahnge={(val) => {
                    setEmailInput(val);
                  }}
                  value={emailInput}
                />
                <TextFeild
                  name='Phone Number'
                  type='number'
                  err={numberError}
                  placeholder='e.g. +1 234 567 890'
                  handleCahnge={(val) => {
                    setNumberInput(val);
                  }}
                  value={numberInput}
                />
              </div>
              <div className={main.navButtons}>
                <div></div>
                <PrimaryButton
                  onClick={() => {
                    !numberInput ? setNumberError(true) : setNumberError(false);
                    !emailInput ? setEmailError(true) : setEmailError(false);
                    !nameInput ? setNameError(true) : setNameError(false);

                    numberInput && emailInput && nameInput
                      ? (() => {
                          const personalInfo = {
                            name: nameInput,
                            email: emailInput,
                            number: numberInput,
                          };

                          localStorage.setItem(
                            'personalInfo',
                            JSON.stringify(personalInfo),
                          );
                          router.push('/select-plan');
                        })()
                      : '';
                  }}>
                  Next Step
                </PrimaryButton>
              </div>
            </div>
          </div>
        </main>
      </article>
    </ThemeProvider>
  );
};

export default Page;
