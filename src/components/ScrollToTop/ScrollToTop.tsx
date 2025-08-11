
'use client';

import { IconArrowUp } from '@tabler/icons-react';
import {
  Affix,
  Transition,
} from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { ActionIcon } from '@/components/ActionIcon';
import classes from './ScrollToTop.module.css'

export function ScrollToTop() {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <Affix position={{ bottom: "lg", right: "lg" }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <ActionIcon
            className={classes.to}
            // variant="default"
            size="xl"
            radius="xl"
            c="var(--mantine-color-text-intensive)"
            style={{
            //   border: "1px solid var(--mantine-color-button-border)",
            //   backdropFilter: "blur(5px)",
              ...transitionStyles, 
            }}
            onClick={() => scrollTo({ y: 0 })}
          >
            <IconArrowUp size={20} />
          </ActionIcon>
        )}
      </Transition>
    </Affix>
  );
}