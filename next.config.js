const withStyles = require('@webdeb/next-styles')
 
module.exports = withStyles({
  sass: true, // use .scss files
  modules: true, // style.(m|module).css & style.(m|module).scss for module files
  sassLoaderOptions: {
    sassOptions: {
      includePaths: ["src/styles"], // @import 'variables'; # loads (src/styles/varialbes.scss), you got it..
    },
  }
})

module.exports = {
  env: {
    MONGO_URI:
      "mongodb+srv://Ebere:qWjOLsZTlMxY0uHM@cluster0-ev2sa.mongodb.net/barter-trade?retryWrites=true&w=majority",
  },
};