module.exports = {
  apps: [
    {
      name: 'mall',
      script: './server.js',
      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: '2G',
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};
