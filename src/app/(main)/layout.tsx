import { Header } from "@/components/Header";
import { Content } from "@/components/Content";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <Content>
        {children}
      </Content>
    </>
  );
}
