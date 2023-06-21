/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        disableStaticImages: true
      },
      webpack: (config, options) => {
        config.module.rules.push({
          test: /\.(png|jpe?g|gif)$/i,
          use: [{
              loader: 'file-loader',
           }],
        })
     
        return config
      },
}

module.exports = nextConfig
