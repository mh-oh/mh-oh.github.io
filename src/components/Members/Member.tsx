
import {
  Group,
  Stack,
  Text,
  Image,
  Grid,
  GridCol,
  Box,
} from '@mantine/core';
import { IconArrowUpRight } from '@tabler/icons-react';
import { ActionIcon } from '@/components/ActionIcon';

export function Member({ src, name, info, email, href, more_info }) {
  return (
    <Stack>
      <Image
        src={src}
        radius="md"
        h="150px"
        w="150px"
        maw="100%"
        style={{
          objectPosition: "top"
        }}
      />
      <Stack gap="1ex">
        <Group gap="1ex">
          <Text fz="xl" fw={700}>
            {name}
          </Text>
          {href &&
            <ActionIcon
              size="sm"
              radius="md"
              href={href}
              component="a"
            >
              <IconArrowUpRight size={15} />
            </ActionIcon>
          }
        </Group>
        <Stack gap="0ex">
          <Text fz="sm">
            {info}
          </Text>
          <Box
            style={{
              overflow: "scroll"
            }}
          >
            <Text fz="sm">
              {email}
            </Text>
          </Box>
        </Stack>
        {more_info &&
          <Text fz="sm">
            {more_info}
          </Text>
        }
      </Stack>
    </Stack>
  );  
}

export function Members({ members }) {
  const tmp = members.map((member, index) => 
    <GridCol key={index} span={{ base: 6, xs: 4, sm: 3 }}>
      {member}
    </GridCol>
  );
  return (
    <Grid gutter={{ base: "lg", xs: "xl" }} mt="xl">
      {tmp}
    </Grid>
  );
}