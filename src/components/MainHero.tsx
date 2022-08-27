import React from 'react';

import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">{mainHero.title}</span>{' '}
        </h1>
        <h3>
          <span
            className={`block text-primary xl:inline`}
            style={{ fontStyle: 'italic' }}
          >
            {mainHero.subtitle}
          </span>
        </h3>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg">
          {
            'My name is Sunita Yadav and I am writing this post with a heavy heart. Today, I am trying to raise funds for my beloved mother, Leelawati Yadav. She is diagnosed with End Stage Kidney Disease in March, 2022 and undergoing treatment at Sir Ganga Ram Hospital, Delhi. Her treatment includes very expensive medications, which we are unable to pay for at this point in time.'
            //  'My mother sugar level and blood pressure is consistently high for the past fewmonths. She is also having joint and back pain so unable to walk more to reduce the weight. The doctors have suggested us to opt for Kidney Transplant. Based on our discussion with the doctors, we would need approximately 11 Lakhs Indian Rupees to pay for her treatment, which includes the kidney transplant operation, post-operation recovery treatment.We have already exhausted our financial resources and do not have enough money to pay for the kidney compatibility tests, kidney transplant and other medical expenses.Ours is a middle class family and we have spent all our savings and earnings for my mother’s well-being. My father has spent all the savings for her treatment.Now I am taking care of my mother from my salary which is not enough for her treatment.There is nothing more disheartening for a child than to see their parents struggling to make it each day. My mother has protected us from our fears and struggles all her life, and as her kids, it is very painful for me and my sister to watch her suffer with dizziness, tiredness and loss of appetite.On my family’s behalf, I request you to contribute towards my mother’s treatment. Your contribution, no matter how big or small, will be a huge blessing for us during this desperate time. Each contribution is important and will be appreciated by us.Please help us raise this amount by clicking the Donate button and sharing this page with your friends and family.Please remember my mother in your prayers. Our family will always be grateful to you for your contribution, prayers and wishes.'
          }
        </p>
        <img
          src="assets/images/A.jpeg"
          height="350"
          width="350"
          className="img-responsive"
          alt=""
        />
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg">
          {
            'My mother sugar level and blood pressure is consistently high for the past few months. She is also having joint and back pain so unable to walk more to reduce the weight. The doctors have suggested us to opt for Kidney Transplant. Based on our discussion with the doctors, we would need approximately 11 Lakhs Indian Rupees to pay for her treatment, which includes the kidney transplant operation, post-operation recovery treatment.'
          }
        </p>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg">
          {
            'We have already exhausted our financial resources and do not have enough money to pay for the kidney compatibility tests, kidney transplant and other medical expenses.'
          }
        </p>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg">
          {
            'Ours is a middle class family and we have spent all our savings and earnings for my mother’s well-being. My father has spent all the savings for her treatment.Now I am taking care of my mother from my salary which is not enough for her treatment.'
          }
        </p>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg">
          {
            'There is nothing more disheartening for a child than to see their parents struggling to make it each day. My mother has protected us from our fears and struggles all her life, and as her kids, it is very painful for me and my sister to watch her suffer with dizziness, tiredness and loss of appetite.'
          }
        </p>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg">
          {
            'On my family’s behalf, I request you to contribute towards my mother’s treatment. Your contribution, no matter how big or small, will be a huge blessing for us during this desperate time. Each contribution is important and will be appreciated by us.'
          }
        </p>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg">
          {
            'Please help us raise this amount by clicking the Donate button and sharing this page with your friends and family.'
          }
        </p>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg">
          {'Please remember my mother in your prayers.'}
        </p>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg">
          {
            'Our family will always be grateful to you for your contribution, prayers and wishes.'
          }
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          {/* <div className="rounded-md shadow">
            <a
              href={mainHero.primaryAction.href}
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
            >
              {mainHero.primaryAction.text}
            </a>
          </div> */}
          {/* <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              href={mainHero.secondaryAction.href}
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-primary text-secondary bg-background hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
            >
              {mainHero.secondaryAction.text}
            </a>
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default MainHero;
