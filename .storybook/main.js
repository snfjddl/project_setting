const { mergeConfig } = require('vite')

module.exports = {
  stories: [
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/stories/**/*.stories.mdx',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {
    config.resolve.dedupe = ['@storybook/client-api']

    return mergeConfig(config, {
      resolve: (await import('../vite.config.mjs')).default.resolve,
    })
  },
}
