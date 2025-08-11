'use client';

import {
  Collapse,
  Group,
  Stack,
  Text,
  TableOfContents,
  Space,
  Mark,
  Grid,
  GridCol,
  Image,
  Box,
  Center,
} from '@mantine/core';
import { H1, H2, H3 } from '@/components/Headings';
import { Paragraph } from '@/components/Paragraph';
import { Divider } from '@/components/Divider';
import { List, ListItem } from '@/components/List';
import { Badge } from '@/components/Badge';
import { topics } from './data';
import classes from './Participate.module.css'

function Reference({ author1, title, venue, year }) {
  return (
    <Text c="var(--mantine-color-text-fade)">
      {author1} et al. <q>{title}.</q> {venue}. {year}
    </Text>
  );
}

function Content({ title, advisors, mentors, description, references }) {
  return (
    <Box>
      <H2 c="var(--mantine-color-text-intensive)">
        {title}
      </H2>
      <Space h="md" />
      <Group gap="1.5ex" align='center'>
        {advisors && 
          <Group gap="1ex">
            <Badge radius="md" pt={1}>
              Advisor
            </Badge>
            <Box>
              {advisors.map((advisor, index) =>
                <span key={index}>
                  {advisor}
                  {index < advisors.length - 1 && ", "}
                </span>
              )}
            </Box>
          </Group>
        }
        {mentors &&
          <Group gap="1ex">
            <Badge radius="md" pt={1}>
              Mentor
            </Badge>
            <Box>
              {mentors.map((mentor, index) =>
                <span key={index}>
                  {mentor}
                  {index < mentors.length - 1 && ", "}
                </span>
              )}
            </Box>
          </Group>
        }
      </Group>
      <Space h="md" />
      <Paragraph>
        {description}
      </Paragraph>
      <ul className={classes.list}>
        {references && references.map((reference, index) =>
          <li key={index}>
            <Reference {...reference} />
          </li>
        )}
      </ul>
    </Box>
  );
}

function Topic({ thumbnail, ...content_props }) {
  return (
    <>
      <Space h="50px" />
      <Grid gutter="xl" visibleFrom="xs" >
        <GridCol span={{base: 3, sm: 3}}>
          <Image 
            src={thumbnail}
          />
        </GridCol>
        <GridCol span="auto">
          <Content {...content_props} />
        </GridCol>
      </Grid>
      <Stack hiddenFrom="xs">
        <Image
          src={thumbnail}
          w="100px"
        />
        <Content {...content_props} />
      </Stack>
    </>
  );
}

export default function Page() {
  return (
    <div>
      <Space h="50px" />
      <Box maw="700px">
        <H1 c="var(--mantine-color-text-intensive)">
          Your chance to contribute to our meaningful research
        </H1>
        <Space h="md" />
        <Paragraph>
          <strong>We welcome undergraduate students to participate in our research.</strong> Below are our research interests and ongoing projects. Please review this list before applying for participation, then contact your advisor via email.
        </Paragraph>
        <Paragraph fw={500} color="var(--mantine-color-text-fade)">
          Last modified July 1, 2025
        </Paragraph>
      </Box>
      <Space h="md" />
      <Divider mt="lg" />
      <Space h="md" />
      {topics.map((topic, index) =>
        <Box key={index}>
          <Topic {...topic} />
        </Box>
      )}
    </div>
  )
}