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
  const router = useRouter();
  //Monthly = false, Yealy = true
  const [billingCycle, setBillingCycle] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const plansObject = [
    {
      name: 'Arcade',
      basePrice: 9,
    },
    {
      name: 'Advanced',
      basePrice: 12,
    },
    {
      name: 'Pro',
      basePrice: 15,
    },
  ];

  useEffect(() => {
    let strPlanInfo = localStorage.getItem('planInfo');
    let objPlanInfo = JSON.parse(strPlanInfo);
    objPlanInfo
      ? (() => {
          setSelectedPlan(objPlanInfo.plan);
          setBillingCycle(objPlanInfo.billingCycle);
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
              <NavBar active='select-plan' />
            </div>
            <div className={main.formContainer}>
              <Heading>Select Your Plan</Heading>
              <Body>You have the option for monthly or yearly billing.</Body>
              <div className={main.form2}>
                <div className={main.planCards}>
                  {plansObject.map((el, id) => {
                    return (
                      <PlanCard
                        key ={id}
                        name={el.name}
                        icon={`icon-${el.name.toLowerCase()}`}
                        price={
                          !billingCycle
                            ? `$${el.basePrice}/mo`
                            : `$${el.basePrice * 10}/yr`
                        }
                        yearly={billingCycle}
                        selected={
                          selectedPlan == el.name.toLowerCase() ? true : false
                        }
                        handleClick={() => {
                          setSelectedPlan(el.name.toLowerCase());
                        }}
                      />
                    );
                  })}
                </div>
                <ToggleCard
                  state={billingCycle}
                  toggle={() => {
                    setBillingCycle((prev) => !prev);
                  }}
                  setRight={() => {
                    setBillingCycle(true);
                  }}
                  setLeft={() => {
                    setBillingCycle(false);
                  }}
                />
              </div>
              <div className={main.navButtons}>
                <SecondaryButton
                  onClick={() => {
                    router.push('/your-info');
                  }}>
                  Go Back
                </SecondaryButton>
                <PrimaryButton
                  onClick={() => {
                    selectedPlan
                      ? (() => {
                          const planInfo = {
                            plan: selectedPlan,
                            billingCycle: billingCycle,
                          };

                          localStorage.setItem(
                            'planInfo',
                            JSON.stringify(planInfo),
                          );
                          router.push('/add-ons');
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
