import { Blockquote as _Blockquote } from '@mantine/core';

export function Blockquote({ children }) {
  return (
    <_Blockquote 
      mt="md" 
      mb="md" 
      radius="md" 
      color="var(--mantine-color-text)" 
      py="0.5ex" 
      pr="0" 
      pl="md"
    >
      {children}
    </_Blockquote>
  );
}