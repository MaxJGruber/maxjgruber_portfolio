/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  env: {
    WUFOO_BASE_URL: "NEXT_PUBLIC_WUFOO_BASE_URL",
    WUFOO_API_KEY: "NEXT_PUBLIC_WUFOO_API_KEY",
    WUFOO_FORM_ID: "NEXT_PUBLIC_WUFOO_FORM_ID",
    WUFOO_PASSWORD: "NEXT_PUBLIC_WUFOO_PASSWORD",
  },
};

module.exports = nextConfig;
