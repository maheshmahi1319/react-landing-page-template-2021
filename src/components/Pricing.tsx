import React from 'react';

import config from '../config/index.json';

const Pricing = () => {
  const { donation } = config;
  const { title } = donation;

  return (
    <section className={`bg-background py-8`} id="pricing">
      <div className={`container mx-auto px-2 pt-4 pb-12 text-primary`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {title}
        </h1>
      </div>
      <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 h-12">
        {donation.items.map((section, index) => (
          <p
            key={`${section.name}-${index}`}
            className="hover:text-primary text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white"
          >
            {section.AccountDetails}
          </p>
        ))}
        <div>
          <img
            src="/assets/images/qr.jpeg"
            className=" width: 100%;
    height: auto;
    object-fit: cover;"
            alt="happy team image"
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
