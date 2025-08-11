
import {
  Box,
  Group,
  Space,
  Stack,
  Text,
  Title,
  rem
} from '@mantine/core';
import { Anchor } from '@/components/Anchor';
import { NarrowContainer } from '@/components/NarrowContainer';
import classes from './Headings.module.css';

export function H1({ children, ...props }) {
  return (
    <Title order={1} fz={{base: rem(34), sm: rem(44)}} {...props}>
      {children}
    </Title>
  );
}

export function H2({ children, ...props }) {
  return (
    <Title order={2} fz={{base: rem(26), sm: rem(32)}} {...props}>
      {children}
    </Title>
  );
}

export function H3({ children, ...props }) {
  return (
    <Title order={3} fz={{base: rem(22), sm: rem(28)}} {...props}>
      {children}
    </Title>
  );
}

export function H4({ children, ...props }) {
  return (
    <Title order={4} fz={{base: rem(18), sm: rem(24)}} {...props}>
      {children}
    </Title>
  );
}

export function H5({ children, ...props }) {
  return (
    <Title order={5} fz={{base: rem(16), sm: rem(22)}} {...props}>
      {children}
    </Title>
  );
}

export function H6({ children, ...props }) {
  return (
    <Title order={6} fz={{base: rem(14), sm: rem(20)}} {...props}>
      {children}
    </Title>
  );
}