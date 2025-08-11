
import Link from 'next/link';
import { 
  IconArrowRight,
  IconArrowUpRight,
  IconMail,
} from '@tabler/icons-react';
import {
  alpha,
  Center,
  Container,
  Group,
  Text,
  Space,
  Stack,
  Tabs,
  TabsList,
  TabsTab,
  TabsPanel,
  CardSection,
  Paper,
  Grid,
  GridCol,
  BackgroundImage,
  Box,
} from '@mantine/core';
import { Divider } from '@/components/Divider';
import { Card } from '@/components/Card';
import { H1, H2 } from '@/components/Headings';
import { Paragraph } from '@/components/Paragraph';
import { Teaser } from '@/components/Teaser';
import { News } from '@/components/News';
import { Button } from '@/components/Button';

import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import { Image } from '@mantine/core';

import '@mantine/carousel/styles.css';
import { FullWidthBox } from '@/components/FullWidthBox';
import { NarrowContainer } from '@/components/NarrowContainer';

import classes from './Background.module.css'


export default function Home() {

  return (
    <>
      <Space h="35px" />
      <FullWidthBox className={classes.root}>
        {/* <div >
          <Space h="700px" />
        </div> */}
        <Space h="35px" />
        <NarrowContainer>
          <Stack
            maw="700px"
            align="flex-start"
            gap="20px"
          >
            <Stack gap="10px">
              <Text size="lg">
                Machine Learning Laboratory at POSTECH
              </Text>
              <H1 c="var(--mantine-color-text-intensive)">
                We strive to understand human intelligence through the computational lens.
              </H1>
            </Stack>
            <Button 
              href="/joinus"
              component={Link}
              radius="lg"
              size="sm"
              c="var(--mantine-color-text-intensive)"
            >
              <Center inline>
                <Text>Contact Us</Text>
                <Space w="5px" />
                <IconArrowRight size={15} />
              </Center>
            </Button>
          </Stack>
          <Space h="70px" />
          <Teaser />
        </NarrowContainer>
        <Space h="70px" />
      </FullWidthBox>
      <News head={10} />
      <Space h="md" />
    </>
  );
}