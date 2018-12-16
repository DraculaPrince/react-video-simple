const options = {
  presets: [
    ["@babel/env", {
      useBuiltIns: "usage"
    }],
    ["@babel/preset-react"]
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import"
  ]
}

module.exports = options
