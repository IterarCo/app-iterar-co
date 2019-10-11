module.exports = {
    indexPath: 'index.blade.php',
    outputDir : '../server-iterar-co/public/app',
    publicPath: process.env.NODE_ENV === 'production'
      ? '/app'
      : '/',

    productionSourceMap: false,

    configureWebpack: {
        optimization: {
        splitChunks: {
                minSize: 10000,
                maxSize: 100000,
            }
      }
    }

  }