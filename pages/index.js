import React, { useEffect } from 'react';
// import { Heading, Text } from '../components/typography';
import Head from 'next/head';
import {useRouter} from 'next/router'
import { PrimaryButton, SecondaryButton } from '../components/Buttons';
import { defaultTheme } from '../utils';
import { Input, TextFeild } from '../components/TextFields';
import { ThemeProvider } from 'styled-components';
import { NavLink } from '../components/navLinks';
import { PlanCard } from '../components/planCards';
import { AddOnCard } from '../components/addOnCard';
import { SummaryCard } from '../components/summaryCard';

const HomePage = () => {
  const router = useRouter();
  useEffect(() => {
    // Push to destination /moon
    router.push('/your-info');
  });
  return (
    <div>
      <Head>
        <title>Sign Up</title>
      </Head>


    </div>
  );
};

export default HomePage;
