// Imports the Storybook's configuration API
import type { StorybookViteConfig } from '@storybook/builder-vite'
import { resolve } from 'path'  
import svgrPlugin from 'vite-plugin-svgr'

const config: StorybookViteConfig = {
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    config.plugins = [
      ...config.plugins ?? [],
      svgrPlugin(
      )
    ]
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        src: resolve(__dirname, '../src/')
      }
    }
    // return the customized config
    return config;
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  }
}

module.exports = config