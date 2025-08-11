'use client';

import Link from 'next/link'
import {
  alpha,
  Box,
  Burger,
  // Button,
  Collapse,
  Group,
  Stack,
  Text,
  Image,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ColorSchemeControl } from '@/components/ColorSchemeControl';
import { NarrowContainer } from '@/components/NarrowContainer';
import { Anchor } from '@/components/Anchor';
import { Logo } from '@/components/Logo';
import { Divider } from '@/components/Divider';
import { ActionIcon } from '@/components/ActionIcon';
import { IconBrandGit, IconBrandGithub } from '@tabler/icons-react';
import { Button } from '@/components/Button';
import classes from './Header.module.css'

const links = [
  // { link: '/', label: 'About' },
  { link: '/people', label: 'People' },
  { link: '/publications', label: 'Publications' },
  { link: '/news', label: 'News' },
  { link: '/joinus', label: 'Join Us' },
  { link: '/participate', label: 'Participate' },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const items = links.map((link) => (
    <Button 
      classNames={{root: classes.button}}
      key={link.label}
      component={Link}
      href={link.link}
      radius="md"
      size="compact-md"
      // bg="transparent"
      // bd={0}
    >
      {link.label}
    </Button>
  ));
  const collapsedItems = links.map((link) => (
    <Anchor 
      key={link.label}
      component={Link}
      href={link.link}
      c="var(--mantine-color-text-intensive)"
    >
      {link.label}
    </Anchor>
  ));
  return (
    <Box
      w="100%"
      style={{
        position: "sticky", 
        top: 0, 
        backgroundColor: alpha("var(--mantine-color-body)", 0.8), 
        backdropFilter: "blur(5px)",
        zIndex: "100",
      }}
    >
      <header>
        <NarrowContainer>
          <Group justify="space-between" py="md">
            <Group h="100%" gap="md">
              <ActionIcon
                classNames={{root: classes.button}}
                key="About"
                component={Link}
                href="/"
                // bg="transparent"
                // bd={0}
                pb={3}
                radius="0px"
                size="compact-md"
              >
                <Logo />
              </ActionIcon>
              <Group h="100%" gap="xs" visibleFrom="sm">
                {items}
              </Group>
            </Group>
            <Group h="100%" gap="sm">
              <ActionIcon
                classNames={{root: classes.button}}
                // bg="transparent"
                href="https://github.com/ml-postech"
                // bd={0}
              >
                <IconBrandGithub size="80%"/>
              </ActionIcon>
              <ColorSchemeControl
                classNames={{root: classes.button}}
                size="md"
                radius="md"
                // bg="transparent"
                // bd={0}
              />
              <Burger
                opened={opened} 
                onClick={toggle} 
                hiddenFrom="sm" 
                size="sm" 
                bg="transparent"
                bd={0}
              />
            </Group>
          </Group>
          <Divider />
          <Collapse in={opened} hiddenFrom="sm">
            <Stack 
              gap="md" 
              py="md"
              align="flex-start"
            >
              {collapsedItems}
            </Stack>
            <Divider />
          </Collapse>
        </NarrowContainer>
      </header>
    </Box>
  );
}