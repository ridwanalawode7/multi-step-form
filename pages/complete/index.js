import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { Body, Heading } from '../../components/copy';
import NavBar from '../../components/navBar';
import { TextFeild } from '../../components/TextFields';
import { defaultTheme } from '../../utils';
import { GlobalStyle } from '../../utils';
import { PrimaryButton, SecondaryButton } from '../../components/Buttons';
import main from '../../styles/main-style.module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { PlanCard } from '../../components/planCards';
import ToggleCard from '../../components/toggleButton';

const Page = () => {
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
              <NavBar active='summary' />
            </div>
            <div className={main.formContainer}>
                          <div className={main.complete}>
                              <img className={main.iconThankYou} src={'./assets/images/icon-thank-you.svg'} />
                <Heading>Thank you</Heading>
                <Body style={{textAlign: 'center'}}>
                  Thanks for confirming your subscription! We hope you have fun
                  using our platform. If you ever need support, please feel free
                  to email us at support@loremgaming.com.
                </Body>
              </div>
            </div>
          </div>
        </main>
      </article>
    </ThemeProvider>
  );
};

export default Page;
