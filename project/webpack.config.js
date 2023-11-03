const path = require('path');

module.exports = {
  entry: './src/index.js', // Your main entry point
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundle
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Match both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use babel-loader for transforming JavaScript
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Use these presets with Babel
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Add support for CSS
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Automatically resolve certain extensions
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'), // Serve files from this directory for dev server
    port: 3000, // Run dev server on this port
    open: true, // Open browser when dev server starts
  },
};
