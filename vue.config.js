module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        "resolve url": true,
        import: []
      }
    }
  },
  publicPath: process.env.NODE_ENV === "production" ? "/vue-shequ/" : "/"
};
