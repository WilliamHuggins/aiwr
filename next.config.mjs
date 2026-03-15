/**
 * Next.js configuration.
 *
 * This file exports a configuration object that tells Next.js how to
 * behave at build and runtime. See https://nextjs.org/docs/api-reference/next.config.js/introduction
 * for more details.
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'qhdrtygne7pnc3mj.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
      },
    ],
  },
};

export default nextConfig;
