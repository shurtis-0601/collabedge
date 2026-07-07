/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/blogs/the-ethical-operators-dilemma-why-ndis-productivity-matters-more-than-ever-in-2026",
        destination: "/resources/articles/ethical-operators-dilemma-ndis-productivity-2026",
        permanent: true,
      },
      {
        source: "/blogs/what-the-may-2026-ndis-budget-really-means-for-small-providers",
        destination: "/resources/articles/may-2026-ndis-budget-small-providers",
        permanent: true,
      },
      {
        source: "/blogs/the-productivity-paradox-why-doing-more-manually-is-hurting-participant-care",
        destination: "/resources/articles/productivity-paradox-manual-work-ndis",
        permanent: true,
      },
      {
        source: "/blogs/nu3z35pb4fzq9e7bpxf3tkktyyxn52-z5974",
        destination: "/resources/articles/safeguarding-business-data-10-step-guide",
        permanent: true,
      },
      {
        source: "/blogs/unlocking-the-power-of-data-in-the-ndis-what-it-means-for-you",
        destination: "/resources/articles/unlocking-power-of-data-ndis",
        permanent: true,
      },
      {
        source: "/blogs",
        destination: "/resources",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
    ],
  },
};

module.exports = nextConfig;
