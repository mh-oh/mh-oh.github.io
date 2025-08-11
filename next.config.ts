import type { NextConfig } from "next";
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import createMDX from '@next/mdx'
 
const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}
 
const withMDX = createMDX({
  options: {
    remarkPlugins: [
      remarkGfm,
      remarkMath,
    ],
    rehypePlugins: [
      rehypeKatex,
    ],
  },
})
 
export default withMDX(nextConfig)
