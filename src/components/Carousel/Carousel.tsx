
import { 
  Carousel as _Carousel,
  CarouselSlide as _CarouselSlide,
} from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import classes from './Carousel.module.css';

export function CarouselSlide({ children }) {
  return (
    <_CarouselSlide>{children}</_CarouselSlide>
  );
}

export function Carousel({ children, ...props }) {
  return (
    <_Carousel 
      classNames={classes}
      styles={{
        control: {
          border: "none", //"1px solid var(--mantine-color-text)",
          backgroundColor: "var(--mantine-color-body)",
        },
        indicator: {
          backgroundColor: "var(--mantine-color-body)",
        }
      }}
      withIndicators 
      withControls 
      slideGap="md"
      controlSize="1cm"
      controlsOffset="md"
      emblaOptions={{
        loop: true 
      }}
      {...props}
    >
      {children}
    </_Carousel>
  );
}