

import {
  Container,
  Image,
  List,
  ListItem,
} from '@mantine/core';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Divider } from '@/components/Divider';
import { Header } from '@/components/AcademicPost/Header';
import { H1, H2, H3, H4, H5, H6 } from '@/components/Headings';
import { Paragraph } from '@/components/Paragraph';
import { Blockquote } from '@/components/Blockquote';
import { Anchor } from '@/components/Anchor';


const overrideComponents = {
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: Paragraph,
  hr: () => (<Divider />),
  br: () => (<br />),
  img: ({src, alt, title}) => (
    <Image src={src} alt={alt} title={title} radius="md" />
  ),
  blockquote: Blockquote,
  a: ({ children, href, title }) => (
    <Anchor href={href} title={title}>{children}</Anchor>
  ),
  em: ({ children }) => (
    <em>{children}</em>
  ),
  strong: ({ children }) => (
    <strong>{children}</strong>
  ),
  li: ({ children }) => (
    <ListItem>{children}</ListItem>
  ),
  ol: ({ children }) => (
    <List type="ordered" withPadding spacing="0.5ex" mt="0.5ex">{children}</List>
  ),
  ul: ({ children }) => (
    <List type="unordered" withPadding spacing="0.5ex" mt="0.5ex">{children}</List>
  ),
}

export async function MDX({ slug }) {

  const post = await import(`@/data/posts/${slug}.mdx`)
  const Content = post.default
  const metadata = post.metadata

  return (
    <>
      <H1
        title={metadata.title}
        authors={metadata.authors}
        affiliation={metadata.affiliation}
      />
      <Header
        links={[
          {type: "paper", url: "..."},
          {type: "code", url: "..."},
          {type: "dataset", url: "..."},
        ]}
      />
      <ScrollToTop />
      <Container p="xl" size="70ch">
        <div id="mdx">
          <Content components={overrideComponents} />
        </div>
      </Container>
    </>
  );
}