const proxyTable = {
  '/node': {
    target: 'https://api.shudong.wang',
    changeOrigin: true
  }
};

module.exports = proxyTable;
