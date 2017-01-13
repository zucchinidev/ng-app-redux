const express = require('express');
const middleware = require('./middleware/configuration');
const app = express();


middleware.configure(app);
app.listen(3030, () => {
  console.log('Listen on port 3030');
});
