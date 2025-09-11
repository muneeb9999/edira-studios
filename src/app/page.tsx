
'use client'

import React, { useState } from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import HeroHomeOne from '@/components/hero/HeroHomeOne';
import AboutHomeOne from '@/components/about/AboutHomeOne';
import ServiceHomeOne from '@/components/service/ServiceHomeOne';
import MarqueeAreaHomeOne from '@/components/brand/MarqueeAreaHomeOne';
import PortfolioHomeOne from '@/components/portfolio/PortfolioHomeOne';
import AwardsHomeOne from '@/components/awards/AwardsHomeOne';
import Testimonial from '@/components/testimonial/Testimonial';
import FunFactHomeOne from '@/components/funfact/FunFactHomeOne';
import VideoHomeOne from '@/components/video/VideoHomeOne';
import BlogHomeOne from '@/components/blog/BlogHomeOne';
import SubscribeHomeOne from '@/components/subscribe/SubscribeHomeOne';
import BrandHomeOne from '@/components/brand/BrandHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import Wrapper from '@/layouts/Wrapper';
import VideoPopup from '@/components/modals/VideoPopup';
import HeroHomeThree from '@/components/hero/HeroHomeThree';
import JourneyHomeThree from '@/components/journey/JourneyHomeThree';
import MarqueeAreaHomeThree from '@/components/brand/MarqueeAreaHomeThree';
import ServiceHomeThree from '@/components/service/ServiceHomeThree';
import PortfolioHomeThree from '@/components/portfolio/PortfolioHomeThree';
import TeamHomeTwo from '@/components/team/TeamHomeTwo';
import AboutUs from '@/components/about/AboutUs';
import BlogHomeTwo from '@/components/blog/BlogHomeTwo';


// export const metadata = {
//   title: "Vixan - Digital  Creative Agency Next js Template",
// };


const index = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
   <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroHomeThree />
            <JourneyHomeThree />
            <MarqueeAreaHomeThree />
            <ServiceHomeThree />
            <PortfolioHomeThree />
            <AwardsHomeOne />
            <Testimonial />
            <TeamHomeTwo  style_2={true} />
            <AboutUs />
            <BrandHomeOne style_2={true} />
            <BlogHomeTwo style_2={true} />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;