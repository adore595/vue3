/*
const path = require('path');

module.exports = {
    output: {
        path:path.resolve(__dirname, 'build')
    }
}*/

const webpack = require('webpack');

module.exports = {
   outputDir:'build',
   configureWebpack:{
      plugins:[
         new webpack.BannerPlugin({
            banner:'学习猿地-wwww.lmonkey.com-成就自己的只需一套精品'
         })
      ]
   }
}
