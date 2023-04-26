// Exemplo de babel.config.js (formato JavaScript)
module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-modules-commonjs',
  ],
};
