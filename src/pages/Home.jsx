import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowInfo from '../components/HowInfo';
import Quote from '../components/Quote';

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <main>
      <HowInfo />
      <Quote />
    </main>
  </>
);

export default Home;
