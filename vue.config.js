module.exports = {
    indexPath: 'index.html',
    outputDir : 'dist',
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