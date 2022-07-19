const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
  reactStrictMode: true,
  swcMinify: true,
})


module.exports = withMDX({
  pageExtensions: ["ts", "tsx", "md", "mdx"]
})
