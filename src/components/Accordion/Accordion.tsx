import { 
  Accordion as Root,
  AccordionItem as Item,
  AccordionControl as Control,
  AccordionPanel as Panel,
} from "@mantine/core";
import classes from './Accordion.module.css';


export function Accordion({ children, ...props }) {
  return (
    <Root variant="separated" radius="lg" {...props}>
      {children}
    </Root>
  );
}

export function AccordionItem({ children, value, ...props }) {
  return (
    <Item className={classes.item} value={value} {...props}>
      {children}
    </Item>
  );
}

export function AccordionControl({ children, ...props }) {
  return (
    <Control {...props}>
      {children}
    </Control>
  );
}

export function AccordionPanel({ children, ...props }) {
  return (
    <Panel {...props}>
      {children}
    </Panel>
  );
}