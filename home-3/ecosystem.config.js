module.exports = {
  apps: [
    {
      name: "hbs-website",
      script: "npm",
      args: "start",
      cwd: "/root/hbs-website",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};