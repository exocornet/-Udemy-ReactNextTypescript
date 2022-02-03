module.exports = {
  // reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      // issuer: {
      //   test: /\.(js|ts)x?$/,
      // },
      use: [
        {
          loader: '@svgr/webpack',
        }
      ],
    });

    return config;
  }
}
