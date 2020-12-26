module.exports = {
  presets: [
    '@vue/app',
    [
      '@babel/preset-env',
      {
        'useBuiltIns': 'entry'
      }
    ]
  ],
  // if your use import on Demand, Use this code
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }]
  ]
}
