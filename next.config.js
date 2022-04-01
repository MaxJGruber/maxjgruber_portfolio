module.exports = {
  reactStrictMode: true,
  env: {
    WUFOO_BASE_URL: process.env.NEXT_PUBLIC_WUFOO_BASE_URL,
    WUFOO_API_KEY: process.env.NEXT_PUBLIC_WUFOO_API_KEY,
    WUFOO_FORM_ID: process.env.NEXT_PUBLIC_WUFOO_FORM_ID,
    WUFOO_PASSWORD: process.env.NEXT_PUBLIC_WUFOO_PASSWORD,
  },
};
