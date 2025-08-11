
import { alpha, Button as Button_ } from "@mantine/core";
import classes from "./Button.module.css";

export function Button({ children, ...props }) {
  return (
    <Button_
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
    </Button_>
  );
}