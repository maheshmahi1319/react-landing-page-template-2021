import React from 'react';

import About from '../components/About';
import Canvas from '../components/Canvas';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import Pricing from '../components/Pricing';
import 'bootstrap/dist/css/bootstrap.min.css';
import IndividualIntervalsExample from '../components/Swiper';

const App = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div>
          <Header />
          <IndividualIntervalsExample />

          <MainHero />
        </div>
        {/* <MainHeroImage /> */}
      </div>
      <Canvas />
      <LazyShow>
        <Pricing />
      </LazyShow>
      <LazyShow>
        <>
          <Canvas />
          <About />
        </>
      </LazyShow>
    </div>
  );
};

export default App;
