
import Link from "next/link";
import {
  Group,
  Stack,
  Text,
} from "@mantine/core";
import { Anchor } from "@/components/Anchor";

interface LinkProps {
  home?: any;
  paper?: any;
  code?: any;
  dataset?: any;
}

interface PubProps {
  title: any;
  authors: any;
  venue: any;
  links?: LinkProps
}

function LinkButton({ children, href, ...props }) {
  return (
    <Anchor 
      component={Link}
      href={href}
      {...props}
    >
      {children}
    </Anchor >
  );
}

export function Publication({ title, authors, venue, links } : PubProps) {
  return (
    <Stack gap="0px">
      <Text fw={700}>{title}</Text>
          <Text>{authors}</Text>
          <Text>{venue}</Text>
        {links &&
          <Group gap="1ex">
            {links.home && 
              <LinkButton href={links.home}>
                Home
              </LinkButton>
            }
            {links.paper && 
              <LinkButton href={links.paper}>
                Paper
              </LinkButton>
            }
            {links.code && 
              <LinkButton href={links.code}>
                Code
              </LinkButton>
            }
            {links.dataset && 
              <LinkButton href={links.code}>
                Data
              </LinkButton>
            }
          </Group>
        }
    </Stack>
  );
}