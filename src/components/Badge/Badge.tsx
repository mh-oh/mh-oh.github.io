
import { Badge as Badge_ } from '@mantine/core';
import classes from './Badge.module.css'

export function Badge({ children, ...props }) {
  return (
    <Badge_
      classNames={classes}
      c="var(--mantine-color-text-intensive)"
      {...props}
    >
      {children}
    </Badge_>
  );
}