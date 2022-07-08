// Imports the Storybook's configuration API
import { resolve } from 'path'

import type { StorybookViteConfig } from '@storybook/builder-vite'
import svgr from 'vite-plugin-svgr'

const config: StorybookViteConfig = {
  async viteFinal(config, { configType }) {
    // svgr 적용
    config.plugins = [...(config.plugins ?? []), svgr()]
    // 절대 경로
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        src: resolve(__dirname, '../src/'),
      },
    }
    // return the customized config
    return config
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-tailwind-dark-mode',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
}

module.exports = config
