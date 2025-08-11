import { NarrowContainer } from "@/components/NarrowContainer";

export function Content({ children, ...props }) {
  return (
    <NarrowContainer mb={100} {...props}>
      {children}
    </NarrowContainer>
  );
}