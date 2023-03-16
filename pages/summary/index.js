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
import { SummaryCard, Total } from '../../components/summaryCard';

const Page = () => {
  const router = useRouter();

  //Monthly = false, Yealy = true
  const [plan, setPlan] = useState({});
  const [addOns, setAddOns] = useState([]);
  const [billingCycle, setBillingCycle] = useState(false);
  const [selectedAddOns, setSelectedAdOns] = useState([]);
  const [summary, setSummary] = useState();
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
    let totalPrice = 0;
    let strPlanInfo = localStorage.getItem('planInfo');
    let objPlanInfo = JSON.parse(strPlanInfo);
    let strAddOnsInfo = localStorage.getItem('addOnsInfo');
    let objAddOnsInfo = JSON.parse(strAddOnsInfo);
    plansObject.forEach((planType) => {
      console.log(planType.name.toLowerCase(), objPlanInfo.plan);

      planType.name.toLowerCase() === objPlanInfo.plan
        ? (() => {
            setPlan({
              name: planType.name,
              price: planType.basePrice,
            });

            totalPrice += planType.basePrice;
          })()
        : 0;
    });

    setBillingCycle(objPlanInfo.billingCycle);

    let loadedAddOns = [];

    addOnsObject.forEach((addOn, i) => {
      console.log(objAddOnsInfo.data.includes(i));
      objAddOnsInfo.data.includes(i)
        ? (() => {
            loadedAddOns = [
              ...loadedAddOns,
              { name: addOn.name, price: addOn.basePrice },
            ];
            totalPrice += addOn.basePrice;
          })()
        : 0;
    });

    setAddOns([...loadedAddOns]);
    setSummary(totalPrice);

    console.log(addOns);
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
              <NavBar active='summary' />
            </div>
            <div className={main.formContainer}>
              <Heading>Finishing Up</Heading>
              <Body>Double-check everything looks OK before confirming.</Body>
              <div className={main.form4}>
                <SummaryCard
                  plan={plan}
                  addOns={addOns}
                  billingCycle={billingCycle}
                              />
                              <Total total={summary} billingCycle={ billingCycle} />
              </div>
              <div className={main.navButtons}>
                <SecondaryButton
                  onClick={() => {
                    router.push('/add-ons');
                  }}>
                  Go Back
                </SecondaryButton>
                <PrimaryButton
                  onClick={() => {
                    selectedAddOns
                      ? (() => {
                          const addOnsInfo = { data: [...selectedAddOns] };
                          console.log(addOnsInfo);
                          localStorage.setItem(
                            'addOnsInfo',
                            JSON.stringify(addOnsInfo),
                          );
                        })()
                      : 0;
                    router.push('/complete');
                  }}>
                  Confirm
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
