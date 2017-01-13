const items = require('./items');
const setRoutes = (app) => {
  items(app, '/api/items')
};

module.exports = {
  setRoutes
};