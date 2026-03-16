module.exports = {
  apps: [
    {
      name: "charmed-fe",
      script: "./node_modules/@react-router/serve/dist/cli.js",
      args: "./build/server/index.js",
      interpreter: "node",
      cwd: "/home/kakatuahitam/code/bun/charmed-fe",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
}
