
import { Card as _Card } from "@mantine/core";
import classes from './Card.module.css';

export function Card({ children, ...props }) {
  return (
    <_Card className={classes.card} radius="lg" {...props}>
      {children}
    </_Card>
  );
}