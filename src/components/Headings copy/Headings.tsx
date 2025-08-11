
import {
  Box,
  Group,
  Space,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { Anchor } from '@/components/Anchor';
import { NarrowContainer } from '@/components/NarrowContainer';
import classes from './Headings.module.css';

function Address({ ids, domain }) {
  return (
    <Group gap="0.5ex">
      <Text>&#123;</Text>
      {ids.map((id, index) =>
        <Group key={index} gap="0ex">
          <Text>{id}</Text>
          <Text>
            {index < ids.length - 1 && ','}
          </Text>
        </Group>
      )}
      <Text>&#125;@{domain}</Text>
    </Group>
  );
}

function domainGroups({ addresses }) {
  const orderedGroups = [];
  const domainIndexMap = {};
  for (const address of addresses) {
    if (address && address.includes('@')) {
      const [localPart, domain] = address.split('@');
      if (domainIndexMap[domain] === undefined) {
        const newGroup = {
          domain: domain,
          ids: [localPart]
        };
        orderedGroups.push(newGroup);
        domainIndexMap[domain] = orderedGroups.length - 1;
      } else {
        const existingGroupIndex = domainIndexMap[domain];
        orderedGroups[existingGroupIndex].ids.push(localPart);
      }
    }
  }
  return orderedGroups;
}

export function H1({ title, authors, affiliation, venue }) {
  const tmp = authors.map((author, index) => 
    <span key={index}>
      <Anchor href={author.link} lh={1}>
        {author.name}
      </Anchor>
      {author.mark && <sup>{author.mark}</sup>}
      {index < authors.length - 1 && ', '}
    </span>
  );
  // const tmp = authors.map((author, index) => 
  //   <a key={index}>
  //     <Anchor href={author.link} target="_blank" lh={1}>
  //       {author.name}
  //     </Anchor>
  //     {/* <a> */}
  //       <sup>{author.mark}</sup>
  //       {index < authors.length - 1 && ', '}
  //     {/* </a> */}
  //   </a>
  // );
  const groups = domainGroups({ 
    addresses: authors.map((author) =>
      author.address
    )
  });
  return (
    <NarrowContainer>
      <Stack mt="xl" gap="sm" align="stretch">
        <Box ta={{ base: "start", sm: "center" }}>
          <Text>
            {venue}
          </Text>
        </Box>
        <Title order={1} ta={{ base: "start", sm: "center" }}>
          {title}
        </Title>
        <Box ta={{ base: "start", sm: "center" }}>
          {tmp}
        </Box>
        <Stack align="stretch" gap="0ex">
          {affiliation.map((x, index) =>
            <Box key={index} ta={{ base: "start", sm: "center" }}>
              <a>{x.mark && <sup>{x.mark}</sup>}{x.name}</a>
            </Box>
          )}
        </Stack>
        {/* <Stack align="center" gap="0.5ex">
          {groups.map((group, index) =>
            <Address 
              key={index}
              ids={group.ids}
              domain={group.domain}
            />
          )}
        </Stack> */}
      </Stack>
    </NarrowContainer>
  );
}

interface H2Props extends React.ComponentPropsWithoutRef<typeof Title> {
  children: React.ReactNode;
  sub?: any;
}

export function H2({ children, sub, ...props }: H2Props) {
  if (sub) {
    return (
      <>
        <Space h="md" />
        <Stack gap="5px" mt="xl" mb="md">
          <Text fw={600} className={classes.h2sub}>
            {sub}
          </Text>
          <Title order={2} {...props}>
            {children}
          </Title>
        </Stack>
      </>
    );
  }
  return (
    <>
      <Space h="md" />
      <Title order={2} mt="xl" mb="md" {...props}>
        {children}
      </Title>
    </>
  );
}

export function H3({ children, ...props }) {
  return (
    <Title order={3} mt="xl" mb="md" {...props}>
      {children}
    </Title>
  );
}

export function H4({ children, ...props }) {
  return (
    <Title order={4} mt="xl" mb="md" {...props}>
      {children}
    </Title>
  );
}

export function H5({ children, ...props }) {
  return (
    <Title order={5} mt="xl" mb="md" {...props}>
      {children}
    </Title>
  );
}

export function H6({ children, ...props }) {
  return (
    <Title order={6} mt="xl" mb="md" {...props}>
      {children}
    </Title>
  );
}