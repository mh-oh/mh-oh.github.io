
import { Box } from "@mantine/core";

export function FullWidthBox({ children, ...props }) {
  return (
    <Box w="100dvw" ml="calc(-50dvw + 50%)" {...props}>
      {children}
    </Box>
  );
}