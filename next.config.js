/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Required for static site generation
  basePath: '/compoundyourself', // Replace with your repository name
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
