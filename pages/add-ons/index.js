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
import { AddOnCard } from '../../components/addOnCard';

const Page = () => {
  const router = useRouter();

  //Monthly = false, Yealy = true
  const [billingCycle, setBillingCycle] = useState(false);
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const addOnsObject = [
    {
      name: 'Online Services',
      basePrice: 1,
      desc: 'Access to multiplayer games',
    },
    {
      name: 'Larger Storage',
      basePrice: 2,
      desc: 'Extra 1TB of cloud save',
    },
    {
      name: 'Custumizable Profile',
      basePrice: 2,
      desc: 'Custom theme on your profile',
    },
  ];

  useEffect(() => {
    let strPlanInfo = localStorage.getItem('planInfo');
    let objPlanInfo = JSON.parse(strPlanInfo);
    let strAddOnsInfo = localStorage.getItem('addOnsInfo');
    let objAddOnsInfo = JSON.parse(strAddOnsInfo);
    objPlanInfo
      ? (() => {
          setBillingCycle(objPlanInfo.billingCycle);
        })()
      : '';
    objAddOnsInfo
      ? (() => {
          setSelectedAddOns(objAddOnsInfo.data);
        })()
      : '';
  }, []);

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
              <NavBar active='add-ons' />
            </div>
            <div className={main.formContainer}>
              <Heading>Pick Add-Ons</Heading>
              <Body>Add-ons help enhance your gaming experience.</Body>
              <div className={main.form3}>
                {addOnsObject.map((el, i) => {
                  return (
                    <AddOnCard
                      key={i}
                      name={el.name}
                      price={
                        !billingCycle
                          ? `+$${el.basePrice}/mo`
                          : `+$${el.basePrice * 10}/yr`
                      }
                      desc={el.desc}
                      selected={selectedAddOns.includes(i)}
                      handleClick={() => {
                        selectedAddOns.includes(i)
                          ? setSelectedAddOns(
                              selectedAddOns.filter((a) => a !== i),
                            )
                          : setSelectedAddOns([...selectedAddOns, i]);
                      }}
                    />
                  );
                })}
              </div>
              <div className={main.navButtons}>
                <SecondaryButton
                  onClick={() => {
                    selectedAddOns
                      ? (() => {
                          const addOnsInfo = { data: [...selectedAddOns] };
                          localStorage.setItem(
                            'addOnsInfo',
                            JSON.stringify(addOnsInfo),
                          );
                        })()
                      : 0;
                    router.push('/select-plan');
                  }}>
                  Go Back
                </SecondaryButton>
                <PrimaryButton
                  onClick={() => {
                    selectedAddOns
                      ? (() => {
                          const addOnsInfo = { data: [...selectedAddOns] };
                          localStorage.setItem(
                            'addOnsInfo',
                            JSON.stringify(addOnsInfo),
                          );
                        })()
                      : 0;
                    router.push('/summary');
                  }}>
                  {selectedAddOns.length ? 'Next Step' : 'Skip'}
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
