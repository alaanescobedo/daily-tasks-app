const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')

module.exports = {
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions"
    ],
    "framework": "@storybook/react",
    // Webpack configuration to work storybook with css modules
    // https://storybook.js.org/docs/react/configure/webpack#extending-storybooks-webpack-config
    webpackFinal: async(config) => {
        // console.log(config.module.rules)
        config.module.rules.find(rule => rule.test.toString() === '/\\.css$/').exclude = /\.module\.css$/

        config.module.rules.push({
                test: /\.module\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        }
                    }
                ]
            })
            // Webpack configuration to work storybook with ts alias paths
            // console.log('>>CONFIG.RESOLVE', config.resolve)
        config.resolve.plugins = [new TsconfigPathsPlugin({ extensions: config.resolve.extensions })]

        return config
    }
}