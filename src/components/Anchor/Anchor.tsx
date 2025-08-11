
import { Anchor as _Anchor } from "@mantine/core";

export function Anchor({ children, ...props }) {
  return (
    <_Anchor underline="hover" {...props}>
      {children}
    </_Anchor>
  );
}

