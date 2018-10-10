const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src/js', 'index.js'), // frontend in src folder
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'build.js' // fineal file is created in ./dist/build.js
  }, 
  module: {
    loaders: [{
      test: /\.css/, // load the css in react
      use: ['style-loader', 'css-loader'],
      include: /src/
    },{
      test: /\.jsx?$/, // load js and jsx files
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react', 'stage-2']
      }
    }, {
      test: /\.json$/, // load js files
      loader: 'js-loader'
    }]
  }
}