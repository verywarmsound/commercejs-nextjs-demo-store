import React from 'react';
import Root from '../components/common/Root';
import ContactForm from '../components/checkout/common/ContactForm';
import Footer from '../components/common/Footer';
import Package from '../components/common/Package';
import Head from 'next/head';
const videoUrl =
  'https://uploads-ssl.webflow.com/5ecbc94a1fd6e39a650b0933/6097d7c03d62714be62cc652_Stag BG NO music-transcode.mp4';
const iconUrl1 = '/images/champaigne-glass.svg';
const iconUrl2 = '/images/girls-group.svg';
const iconUrl3 = '/images/ajustable1.svg';
const cardTitle1 = 'Perfect girls night';
const cardTitle2 = 'Everyone gets satisfied';
const cardTitle3 = 'Fully adjustable';
const packageName = 'PRAGOUT BACHELORETTE ESSSENTIALS';
const packagePrice = '€180';
const activitiesLeftPartStag = ['· Return airport transfer', '· Champagne limo drive '];
const activitiesRightPartStag = [' · Instagram tour', ' · VIP club entrance'];
const packageIncludedText =
  ' A fairytale city in the very heart of Europe. It shines during the day and burns bright by night!';
const iconText = ' Nice places, loads of memories, and unique experience!';
const iconText2 = ' All come with a perfect schedule and execution tailored to your needs.';
const iconText3 = ' We got you covered from the arrival till departure, 24hrs straight.';
const iconText4 = ' Simplicity, safety , local tips and tricks - ';
const iconText5 = ' You are provided with!';
const iconText6 = 'We really know the city and we will make you love it! All for the queens! ';
const iconText7 = '  Want to change it a bit? More champagne?';
const iconText8 = ' Or literally anything?';
const iconText9 = ' Your tour manager will provide the best solution! We are open to any ideas!';

const HenDoPackagePage = () => (
  <Root>
    <Head>
      <title>Hen weekend</title>
    </Head>
    <Package
      activitiesLeftPartStag={activitiesLeftPartStag}
      activitiesRightPartStag={activitiesRightPartStag}
      videoUrl={videoUrl}
      iconUrl1={iconUrl1}
      iconUrl2={iconUrl2}
      iconUrl3={iconUrl3}
      cardTitle1={cardTitle1}
      cardTitle2={cardTitle2}
      cardTitle3={cardTitle3}
      iconText={iconText}
      iconText2={iconText2}
      iconText3={iconText3}
      iconText4={iconText4}
      iconText5={iconText5}
      iconText6={iconText6}
      iconText7={iconText7}
      iconText8={iconText8}
      iconText9={iconText9}
      packageName={packageName}
      packagePrice={packagePrice}
      packageIncludedText={packageIncludedText}
    />
    <ContactForm withAccommodation={true} />
    <Footer />
  </Root>
);

export default HenDoPackagePage;
