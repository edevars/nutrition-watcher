import React from 'react';
import { Element } from 'react-scroll';
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
      <Element name="how-works">
        <HowInfo />
      </Element>
      <Quote />
      <Element name="start-now">
        <CallToAction />
      </Element>
    </main>
    <Element name="contact">
      <Footer />
    </Element>
  </>
);

export default Home;
