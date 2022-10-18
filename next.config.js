/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoidGhldHVybmNvZGVyIiwiYSI6ImNsOWUzYmx0bTFvam4zdXA4bnJ4cW45MHQifQ.gLhPTvw-GwMkp-NDhhMFiQ",
  },
};

module.exports = nextConfig;
