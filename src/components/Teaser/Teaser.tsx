
'use client';

import Image from 'next/image';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import { Box } from '@mantine/core';
import classes from './Teaser.module.css'

import '@mantine/carousel/styles.css';

const images = [
  '/figs/teaser/1.jpg',
  '/figs/teaser/2.jpg',
  '/figs/teaser/3.jpg',
  '/figs/teaser/4.jpg',
  '/figs/teaser/5.jpg',
  '/figs/teaser/6.jpg',
];

export function Teaser() {

  const autoplay = useRef(Autoplay({ delay: 3000 }));
  const slides = images.map((path) => (
    <CarouselSlide key={path}>
      <Box h={350} w="100%" pos="relative">
        {/* a */}
        <Image
          src={path}
          alt="teaser"
          loading='eager'
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 50vw"
          style={{
            objectFit: "cover",
            borderRadius: "var(--mantine-radius-md)"
          }}
          // height={350}
          // width="100%"
        />
      </Box>
      {/* <BackgroundImage
        radius="md"
        src={url}
        h={350}
      >
      </BackgroundImage> */}
    </CarouselSlide>
  ));

  return (
    <Carousel
      classNames={classes}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={() => autoplay.current.play()}
      controlSize="35px"
      slideSize={{base: "100%", xs: "70%"}}
      // slideSize="100%"
      slideGap="md"
      emblaOptions={{
        loop: true,
        dragFree: false,
        align: 'center'
      }}
      withIndicators
    >
      {slides}
    </Carousel>
  );
}