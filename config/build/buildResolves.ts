import path from "path";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolves({paths}: BuildOptions): webpack.ResolveOptions {
  return {
    alias: {
      '@': paths.src,
    },
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  }
}