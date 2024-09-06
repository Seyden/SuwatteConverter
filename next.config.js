/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    experimental: { esmExternals: true },
    transpilePackages: ['seyden-bplist-parser'],
    webpack(config) {
        config.resolve.fallback = {
    
          // if you miss it, all the other options in fallback, specified
          // by next.js will be dropped.
          ...config.resolve.fallback,  
    
          fs: false, // the solution
        };
        
        return config;
      },
};

module.exports = nextConfig;