
import {
  Box, 
  Group, 
  Stack, 
  Text,
  Tooltip,
  Space,
  Grid,
  GridCol,
} from '@mantine/core';
import { H1 } from '@/components/Headings';
import { Divider } from '@/components/Divider';
import { ActionIcon } from '@/components/ActionIcon';
import { 
  IconBrandGithub,
  IconFileDescription,
  IconHome,
  IconDatabase,
} from '@tabler/icons-react';

import { publications } from './data'

interface LinkProps {
  href: any;
  label: string;
  icon: any;
}

function Link({ href, label, icon } : LinkProps) {
  return (
    <Tooltip label={label} radius="md" withArrow>
      <ActionIcon
        variant="default" 
        size="sm" 
        radius="md" 
        href={href} 
        component="a"
        // style={{
        //   border: "1px solid var(--mantine-color-button-border-fade)"
        // }}
      >
        {/* <Icon size={15} /> */}
        {icon}
      </ActionIcon>
    </Tooltip>
  );
}

interface LinksProps {
  paper?: any;
  home?: any;
  code?: any;
  dataset?: any;
}

function Links({ paper, home, code, dataset } : LinksProps) {
  return (
    <Group gap="1ex">
      {/* {paper && <Link href={paper} label="Paper" icon={<IconFileDescription size={15} />} />} */}
      {/* {home && <Link href={home} label="Home" icon={<IconHome size={15} />} />} */}
      {/* {code && <Link href={code} label="Code" icon={<IconBrandGithub size={15} />} />} */}
      {/* {dataset && <Link href={dataset} label="Dataset" icon={<IconDatabase size={15} />} />} */}
    </Group>
  );
}

interface PubProps {
  year: number;
  venue: string[];
  title: string;
  authors: string[];
  links?: LinksProps;
}

function Pub({ year, venue, title, authors, links } : PubProps ) {
  return (
    <Stack gap="0px">
      <Group gap="1ex">
        <Text fw={700} fz="lg" c="var(--mantine-color-text-intensive)" >
          {title}
        </Text>
      </Group>
      <Space h="xs" />
      <Box>
        {authors.map((author, index) =>
          <span key={index}>
            <span>{author}</span>
            {index < authors.length - 1 && ", "}
          </span>
        )}
      </Box>
      <Box>
        {venue.map((text, index) =>
          <span key={index}>
            <span>{text}</span>
            {", "}
          </span>
        )}
        {year}
      </Box>
      {links &&
        <Stack gap="0px">
          <Space h="sm" />
          <Links {...links} />
        </Stack>
      }
    </Stack>
  );
}

interface PubsProps {
  list: PubProps[];
}

function Pubs({ list } : PubsProps) {
  return (
    <Stack gap="lg" maw="750px" >
      {list.map((pub, index) =>
        <Box key={index}>
          <Pub {...pub}/>
        </Box>
      )}
    </Stack>
  );
}

interface PubsPerYearProps {
  year: number;
}

function PubsPerYear({ year } : PubsPerYearProps) {
  return (
    <Grid>
      <GridCol span="content">
        <Text fw={700} fz="lg" w="5rem">
          {year}
        </Text>
      </GridCol>
      <GridCol span="auto">
        <Stack gap="xl">
          <Pubs list={publications[year]} />
          <Divider />
        </Stack>
      </GridCol>
    </Grid>
  );  
}

export default function Page() {
  return (
    <div>
      <Space h="50px" />
      <Box maw="650px">
        <H1 c="var(--mantine-color-text-intensive)">
          Our leading contributions to top-tier conferences
        </H1>
      </Box>
      <Space h="50px" />
      <Stack gap="xl">
        {Object.keys(publications).sort().reverse().map((year, index) =>
          <Box key={index}>
            <PubsPerYear year={parseInt(year, 10)}/>
          </Box>
        )}
      </Stack>
    </div>
  )
}