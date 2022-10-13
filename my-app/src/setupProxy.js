const { createProxyMiddleware } = require("http-proxy-middleware");

// 방법2
// target과 router 가 바뀌어도 정상적으로 진행됨을 확인함
module.exports = function (app) {
  app.use(
    ['/api', '/api2'],
    createProxyMiddleware({
      target: "http://localhost:3080",
      changeOrigin: true,
      router: {
        '/api2': 'http://localhost:3070'
      }
    })
  );
};

// 방법1
// module.exports = function (app) {
//   app.use(
//     "/api/",
//     createProxyMiddleware({
//       target: "http://localhost:3080",
//       changeOrigin: true,
//     })
//   );
//   app.use(
//     "/api2/",
//     createProxyMiddleware({
//       target: "http://localhost:3070",
//       changeOrigin: true,
//     })
//   );
// };
