/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'out',
    allowedDevOrigins: ["*.preview.same-app.com"],
    images: {
      unoptimized: true,
      domains: [
        "source.unsplash.com",
        "images.unsplash.com",
        "ext.same-assets.com",
        "ugc.same-assets.com",
      ],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "source.unsplash.com",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "images.unsplash.com",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "ext.same-assets.com",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "ugc.same-assets.com",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "2fkyfggwlscwizn6.public.blob.vercel-storage.com",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "docs.bonk.computer",
          pathname: "/**",
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  