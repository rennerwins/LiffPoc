import * as React from 'react';
import { Button } from '../button/button';
import SwiperCore, { Navigation } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

SwiperCore.use([Navigation]);

const solarImages = [
  'https://images.unsplash.com/photo-1501494278684-d0fb421388ef',
  'https://images.unsplash.com/photo-1620492948585-c97e18c173dc',
  'https://images.unsplash.com/flagged/photo-1566838616631-f2618f74a6a2',
  'https://images.unsplash.com/photo-1592833159155-c62df1b65634',
];

export const OnBoarding = () => {
  const [isLastSlide, setIsLastSlide] = React.useState(false);

  const handleLogin = async () => {
    const liff = (await import('@line/liff')).default;

    liff.login();
  };

  const handleSlideChange = (slide: SwiperCore) => {
    setIsLastSlide(slide.activeIndex === solarImages.length - 1);
  };

  return (
    <div className="h-screen">
      <div className="h-5/6">
        <Swiper
          className="h-full"
          slidesPerView={1}
          navigation={{
            prevEl: '.prev',
            nextEl: '.next',
          }}
          onActiveIndexChange={handleSlideChange}
        >
          {solarImages.map((image) => (
            <SwiperSlide key={image}>
              <Image
                src={image}
                blurDataURL={image}
                placeholder="blur"
                layout="fill"
                objectFit="cover"
                loading="eager"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="py-10 px-4 flex justify-between space-x-4">
        <Button className="prev w-1/2">Prev</Button>
        {!isLastSlide ? (
          <Button className="next w-1/2">Next</Button>
        ) : (
          <Button className="w-1/2" onClick={handleLogin}>
            Login
          </Button>
        )}
      </div>
    </div>
  );
};
