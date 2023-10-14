import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Intro from '../components/Intro';
import About from '../components/About';
import Port from '../components/Port';
import Skill from '../components/Skill';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <Intro />
        <About />
        <Port />
        <Skill />
        <Contact />
        <Footer />
      </Main>
    </>
  );
}

export default Home;