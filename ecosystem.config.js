module.exports = {
    apps: [
      {
        name: 'dt-actualize',
        script: 'npm',
        args: 'start',
        env: {
          NODE_ENV: 'production',
          PORT: 7050
        }
      }
    ]
  };
  