import * as React from 'react';
import { Button } from '../button/button';
import SwiperCore, { Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

SwiperCore.use([Pagination]);

const solarImages = [
  'solar1.jpeg',
  'solar2.jpeg',
  'solar3.jpeg',
  'solar4.jpeg',
];

export const OnBoarding = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const swiperRef = React.useRef(null);

  const handleNextSlide = () => {
    if (swiperRef) {
      const swiper = swiperRef.current.swiper;
      if (swiper.activeIndex < solarImages.length) {
        swiper.slideNext(100, true);
        setCurrentIndex(swiper.activeIndex);
      }
    }
  };

  const handlePrevSlide = () => {
    if (swiperRef) {
      const swiper = swiperRef.current.swiper;
      if (swiper.activeIndex !== 0) {
        swiper.slidePrev(100, true);
        setCurrentIndex(swiper.activeIndex);
      }
    }
  };

  const handleLogin = async () => {
    const liff = (await import('@line/liff')).default;

    liff.login();
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1">
        <Swiper className="h-full" ref={swiperRef} slidesPerView={1} pagination>
          {solarImages.map((image, index) => (
            <SwiperSlide key={image}>
              <Image src={`/assets/${image}`} layout="fill" objectFit="cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <footer className="py-10 px-4 flex justify-between space-x-4">
        <Button className="w-1/2" onClick={handlePrevSlide}>
          Prev
        </Button>
        {currentIndex !== solarImages.length - 1 ? (
          <Button className="w-1/2" onClick={handleNextSlide}>
            Next
          </Button>
        ) : (
          <Button className="w-1/2 bg-red-400" onClick={handleLogin}>
            Login
          </Button>
        )}
      </footer>
    </div>
  );
};
