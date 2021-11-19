const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CompressionPlugin = require('compression-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
      minSize: 1,
      minChunks: 2
    }
  }
  if (isProd) {
    config.minimize = true
    config.minimizer = [new TerserPlugin()]
    config.runtimeChunk = true
  }
  return config
}

module.exports = {
  entry: {
    main: './src/index.tsx'
    // teams: './src/pages/Teams.tsx',
    // teamPage: './src/pages/TeamPage.tsx'
  },
  devtool: isProd ? 'cheap-module-source-map' : 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    port: process.env.PORT || 8080
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                // noEmit: true,
                transpileOnly: true
              }
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|mp4)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  optimization: optimization(),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@theme': path.resolve(__dirname, 'src/theme/'),
      '@icons': path.resolve(__dirname, 'src/icons/'),
      '@svg': path.resolve(__dirname, 'src/svg/')
    }
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      chunks: ['main'],
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new CleanWebpackPlugin(),
    new CompressionPlugin()
  ]
}
