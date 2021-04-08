module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "@/assets/styles/_main.scss";
        @import "@/assets/styles/_variables.scss";
        @import "@/assets/styles/_fonts.scss";
        @import "@/assets/styles/_mixins.scss";
        `
      }
    }
  }
};