const logger = require('./logger');
const cors = require('cors');
const bodyParser = require('body-parser');
const methodOverride = require('./methodOverride');
const api = require('../api');

const configureCors = (app) => {
  app.use(cors());
};

const configureBodyParser = (app) => {
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
};

const configureLogger = (app) => {
  app.use(logger);
};

const configureMethodOverride = (app) => {
  methodOverride.configure(app);
};

const configure = (app) => {
  configureCors(app);
  configureBodyParser(app);
  configureLogger(app);
  configureMethodOverride(app);
  api.setRoutes(app);
};

module.exports = {
  configure: configure
};