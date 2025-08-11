
import { Text } from '@mantine/core';

export function Paragraph({ children, ...props }) {
  return (
    <Text mb="md"{...props}>
      {children}
    </Text>
  );
}