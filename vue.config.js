const path = require('path')
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  outputDir: 'docs',
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, './src/'),
        '@comps': path.join(__dirname, './src/components/'),
        '@assets': path.join(__dirname, './src/assets/'),
        '@views': path.join(__dirname, './src/views/'),
        '@framework': path.join(__dirname, './src/views/framework/'),
      },
    },
  },
})
