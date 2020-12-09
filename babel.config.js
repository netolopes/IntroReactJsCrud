module.exports = {
  presets:[  
    "@babel/preset-env", // import/export ,arrow function ,class
    "@babel/preset-react" // jsx,react 
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'  // react: render ,state
  ]
}