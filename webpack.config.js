const path = require('path');

const CopyRightWebpackPlugin = require('./plugins/copyright-webpack-plugin')
module.exports = {
    mode: 'production',
    externals : {
        lodash : {
          commonjs: 'lodash',
          amd: 'lodash',
          root: '_' // 指向全局变量
        }
      },
  resolveLoader: {
    modules: ['node_modules', './loaders']
  },
    module: {
      rules: [{
        test: /\.js/,
        use: [
          {
            loader: 'replaceLoader',
          },
          {
            loader: 'replaceLoaderAsync',
            options: {
              name: 'du'
            }
          },
        ]
      }]
    },
    plugins: [
      new CopyRightWebpackPlugin(),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    }
}
// const path = require('path');
// module.exports = {
//     mode: 'production',
//     entry: './src/index.js',
//     // 打包的过程中，忽略的库
//     // externals: ["lodash"],
//     externals : {
//         lodash : {
//           commonjs: 'lodash',
//           amd: 'lodash',
//           root: '_' // 指向全局变量
//         }
//       },
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'library.js',
//         // 在全局变量里面增加library变量
//         library: 'library',
//         // 全局变量挂载在哪里
//         // umd、 this、global
//         libraryTarget: 'umd',
//     }
// }