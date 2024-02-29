import type webpack from 'webpack'
import { type BuildOptions } from './types/config'

export function buildResolves ({ paths }: BuildOptions): webpack.ResolveOptions {
  return {
    alias: {
      '@': paths.src
    },
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  }
}
