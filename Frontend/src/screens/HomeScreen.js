import React from 'react';
import Header from './../components/Header';
import ShopSection from './../components/homeComponents/ShopSection';
import ContactInfo from './../components/homeComponents/ContactInfo';
import ReceiveInfo from './../components/homeComponents/ReceiveInfo';
import Footer from './../components/Footer';

const HomeScreen = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <ShopSection />
      <ReceiveInfo />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default HomeScreen;
