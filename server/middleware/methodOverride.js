const methodOverride = require('method-override');

const configure = (app) => {
  app.use(methodOverride('X-HTTP-Method')); // Microsoft
  app.use(methodOverride('X-HTTP-Method-Override')); // Google/GData
  app.use(methodOverride('X-Method-Override')); // IBM
  app.use(methodOverride('_method'));
};

module.exports = {
  configure: configure
};

