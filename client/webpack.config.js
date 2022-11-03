// proxy: {
//     "/api/**": "http://localhost:5000"
//   }


  module.exports = {
    devServer: {
      proxy: {
        "/api/**": "http://localhost:5000"
        // '/api': {
        //   target: 'http://localhost:5000',
        //   pathRewrite: { '^/api': '' },
        // },
      },
    },
  };