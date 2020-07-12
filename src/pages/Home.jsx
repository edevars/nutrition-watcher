import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowInfo from '../components/HowInfo';
import Quote from '../components/Quote';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <main>
      <HowInfo />
      <Quote />
      <CallToAction />
    </main>
    <Footer />
  </>
);

export default Home;
