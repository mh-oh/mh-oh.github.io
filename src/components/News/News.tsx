// 'use client';

import { readdir } from 'fs/promises';
import path from 'path';

import { useState } from 'react';
import { randomId } from '@mantine/hooks';
import { Badge, Box, Stack, Center, Pagination, Space, Text, Paper, ScrollArea, alpha, Group } from '@mantine/core';
import classes from './News.module.css'

async function getNews() {
  const newsPath = path.resolve(process.cwd(), 'src', 'data', 'news');
  console.log(newsPath);
  const dirents = (await readdir(newsPath, { withFileTypes: true })).filter(
    (dirent) => dirent.isFile() && dirent.name.endsWith('.mdx'),
  );
  const items = await Promise.all(
    dirents.map(async (dirent) => {
      const news = await import(`@/data/news/${dirent.name}`);
      const meta = news.meta
      return {title: meta.title, date: meta.date};
    }),
  );
  items.sort((a, b) => +new Date(b.date) - +new Date(a.date));
  return items;
}

function NewsItem({ item }) {
  return (
    <Group>
      {/* <Badge variant="default" size="lg" radius="md" classNames={classes}>
        {item.date}
      </Badge> */}
      <Text fz={{base: "md", sm: "lg"}} fw={500}>
        {item.title}
      </Text>
    </Group>
  );
}


export async function News({ head }) {
  const items = await getNews();
  // console.log(items);
  const tmp = items.slice(0, head).map((item, index) =>
    <Box key={index}>
      <NewsItem item={item} />
    </Box>
  );
  return (
    <div>
      <Stack>
        {tmp}
      </Stack>
    </div>
  )
}

// function chunk<T>(array: T[], size: number): T[][] {
//   if (!array.length) {
//     return [];
//   }
//   const head = array.slice(0, size);
//   const tail = array.slice(size);
//   return [head, ...chunk(tail, size)];
// }

// const data = chunk(
//   Array(30)
//     .fill(0)
//     .map((_, index) => ({ id: index, name: randomId() })),
//   10
// );

// export function News() {
//   const [activePage, setPage] = useState(1);
//   const items = data[activePage - 1].map((item) => (
//     <Text key={item.id}>
//       id: {item.id}, name: {item.name}
//     </Text>
//   ));
//   return (
//     <></>
//   );

//   return (
//     <Box>
//       <Paper withBorder radius="md" px="lg" py="md" >
//         <ScrollArea h={200} type="always">
//           {items}
//         </ScrollArea>
//       </Paper>
//       <Space h="md" />
//       <Center>
//         <Pagination
//           classNames={classes}
//           radius="md"
//           total={data.length}
//           value={activePage}
//           onChange={setPage}
//         />
//       </Center>
//     </Box>
//   );
// }