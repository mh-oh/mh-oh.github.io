
import {
  List as Root,
  ListItem as Item,
} from '@mantine/core';

export function ListItem({ children }) {
  return (
    <Item icon="•">{children}</Item>
  );
}

export function List({ children, ...props }) {
  return (
    <Root 
      type="unordered" 
      withPadding 
      spacing="0.5ex" 
      mt="0.5ex" 
      {...props}
    >
      {children}
    </Root>
  );
}
