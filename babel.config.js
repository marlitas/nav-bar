module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        shippedProposals: true,
        targets: {
          node: "current",
        },
      },
    ],
    ["@babel/preset-react", { runtime: "automatic" }],
    "@babel/typescript",
  ],
  "env": {
    "test": {
      "presets": [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/typescript"
      ]
    }
  },
  plugins: [],
};