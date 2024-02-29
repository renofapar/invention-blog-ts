import { buildPlugin } from './buildPlugin'
import { buildLoader } from './buildLoaders'
import { buildResolves } from './buildResolves'
import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import { buildWebpackServer } from './buildWebpackServer'

export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { mode, paths, port, isDev } = options
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },
    plugins: buildPlugin(options),

    resolve: buildResolves(options),
    module: {
      rules: buildLoader(options)
    },
    devServer: isDev ? buildWebpackServer(options) : undefined,
    devtool: isDev ? 'inline-source-map' : undefined

  }
}
