console.log('process.env.INIT_ENV: ', process.env.INIT_ENV);

const isProd = process.env.INIT_ENV === 'prod';

const proUrl = 'https://api.shudong.wang';

const devUrl = 'https://api.shudong.wang';

export default {
  baseUrl: isProd ? proUrl : devUrl
};
