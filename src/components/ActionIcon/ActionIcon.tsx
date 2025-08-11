
import { alpha, ActionIcon as Button } from "@mantine/core";
import classes from "./ActionIcon.module.css";

export function ActionIcon({ children, ...props }) {
  return (
    <Button
      classNames={classes}
      variant='transparent'
      c="var(--mantine-color-text-intensive)"
      // bg={alpha("var(--mantine-color-button-fade)", 0.5)}
      // style={{
      //   border: "1px solid var(--mantine-color-button-border)",
      //   backdropFilter: "blur(1px)"
      // }}
      {...props}
    >
      {children}
    </Button>
  );
}