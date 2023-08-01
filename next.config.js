/** @type {import('next').NextConfig} */

module.exports = {
    experimental: {
        serverActions: true,
    },
    output: 'standalone',
    publicRuntimeConfig: {
        name: 'RelaisFinder',
        description: 'Find a specific relay based on its specifications'
    },
}