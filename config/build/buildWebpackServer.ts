import type WebpackDevServer from 'webpack-dev-server'
import { type BuildOptions } from './types/config'

export function buildWebpackServer (options: BuildOptions): WebpackDevServer.Configuration {
  return {
    port: options.port,
    open: false,
    historyApiFallback: true,
    hot: true
  }
}
