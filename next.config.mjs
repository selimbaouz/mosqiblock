import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.shopify.com', 'avatars.githubusercontent.com'],
    },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
