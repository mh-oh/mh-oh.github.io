import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import 'mantine-datatable/styles.layer.css';
import "katex/dist/katex.min.css";
import "./globals.css";

import type { Metadata } from "next";
import { Figtree,  Roboto_Mono } from "next/font/google";
import { 
  ColorSchemeScript, 
  createTheme,
  DEFAULT_THEME,
  mantineHtmlProps, 
  MantineProvider 
} from '@mantine/core';

export const metadata: Metadata = {
  title: "Minhyeon Oh",
  description: "Minhyeon Oh's blog",
};

const body = Figtree({ subsets: ['latin'] });
const heading = Figtree({ subsets: ['latin'] });
const mono = Roboto_Mono({ subsets: ['latin'] });

const theme = createTheme({
  // scale: 0.975,
  fontFamily: `${body.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
  fontFamilyMonospace: `Monaco, ${mono.style.fontFamily}, monospace`,
  headings: {
    fontFamily: `${heading.style.fontFamily}, ${DEFAULT_THEME.fontFamily}` 
  },
  colors: {
    gray: ["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#4b5563","#374151","#1D2029", "#10131D","#030712","#6B7280"],
  },
  breakpoints: {
    xs: '36em',
    sm: '48em',
    md: '62em',
    lg: '75em',
    xl: '88em',
  },
});
// 9BA1AD

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
