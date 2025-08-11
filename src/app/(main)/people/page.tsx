'use client';

import { useState } from 'react';
import {
  Box,
  FloatingIndicator,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
  Space,
} from '@mantine/core';
import { H1, H2 } from '@/components/Headings';
import { Paragraph } from '@/components/Paragraph';
import classes from './Demo.module.css';
import { IconArrowUpRight } from '@tabler/icons-react';
import { ScrollToTop } from '@/components/ScrollToTop';
import { ActionIcon } from '@/components/ActionIcon';
import { Faculty } from '@/components/Members/Faculty';
import { Combined, MS, PhD } from '@/components/Members/Students';
import { Alumni } from '@/components/Members/Alumni';
import { Staff } from '@/components/Members/Staff';

function MembersTitle({ title }) {
  return (
    <H2 mt="xl">
      {title}
    </H2>
  );
}

export default function Page() {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [value, setValue] = useState<string | null>('1');
  const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});
  const setControlRef = (val: string) => (node: HTMLButtonElement) => {
    controlsRefs[val] = node;
    setControlsRefs(controlsRefs);
  };
  return (
    <div>
      <Space h="50px" />
      <Box maw="700px">
        <H1 c="var(--mantine-color-text-intensive)">
          Collaboratively pushing the boundaries of machine learning
        </H1>
      </Box>
      <Space h="50px" />
      <Tabs
        variant="none"
        value={value}
        onChange={setValue}
      >
        <TabsList ref={setRootRef} className={classes.list}>
          <TabsTab ref={setControlRef('1')} className={classes.tab} value="1">All</TabsTab>
          <TabsTab ref={setControlRef('2')} className={classes.tab} value="2">Faculty</TabsTab>
          <TabsTab ref={setControlRef('3')} className={classes.tab} value="3">Combined</TabsTab>
          <TabsTab ref={setControlRef('4')} className={classes.tab} value="4">Ph.D.</TabsTab>
          <TabsTab ref={setControlRef('5')} className={classes.tab} value="5">MS</TabsTab>
          {/* <TabsTab ref={setControlRef('6')} className={classes.tab} value="6">Co-advising</TabsTab> */}
          <TabsTab ref={setControlRef('7')} className={classes.tab} value="7">Staff</TabsTab>
          <TabsTab ref={setControlRef('8')} className={classes.tab} value="8">Alumni</TabsTab>
          <FloatingIndicator
            target={value ? controlsRefs[value] : null}
            parent={rootRef}
            className={classes.indicator}
          />
        </TabsList>
        <Space h="10px" />
        <TabsPanel value="1">
          <MembersTitle title="Faculty" />
          <Faculty />
          <MembersTitle title="Combined students" />
          <Combined />
          <MembersTitle title="Doctor of philosophy" />
          <PhD />
          <MembersTitle title="MS students" />
          <MS />
          <MembersTitle title="Staff" />
          <Staff />
          <MembersTitle title="Alumni" />
          <Alumni />
        </TabsPanel>
        <TabsPanel value="2">
          <Space h="md" /><Faculty />
        </TabsPanel>
        <TabsPanel value="3">
          <Space h="md" /><Combined />
        </TabsPanel>
        <TabsPanel value="4">
          <Space h="md" /><PhD />
        </TabsPanel>
        <TabsPanel value="5">
          <Space h="md" /><MS />
        </TabsPanel>
        <TabsPanel value="7">
          <Space h="md" /><Staff />
        </TabsPanel>
        <TabsPanel value="8">
          <Space h="md" /><Alumni />
        </TabsPanel>
      </Tabs>
      <ScrollToTop />
    </div>
  )
}