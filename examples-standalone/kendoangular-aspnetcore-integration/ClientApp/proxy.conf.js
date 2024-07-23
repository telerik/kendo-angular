const { env } = require('process');

const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
  env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'http://localhost:61909';

const PROXY_CONFIG = [
  {
    context: [
      "/products",
      "products/get-products",
      "/products/create-product",
      "/products/update-product",
      "/products/delete-product",
      "/products/delete-product/:id",
      "/chunk/upload",
      "/chunk/remove",
      "/upload",
      "/remove",
   ],
    proxyTimeout: 10000,
    target: target,
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    }
  }
]

module.exports = PROXY_CONFIG;
