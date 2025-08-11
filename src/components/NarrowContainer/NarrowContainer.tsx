import { Container } from "@mantine/core";


export function NarrowContainer({ children, ...props }) {
  return (
    <Container w={{base: "100%", xs: "90%", md: "75%"}} px="lg"{...props}>
      {children}
    </Container>
  );
}