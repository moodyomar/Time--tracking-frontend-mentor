const indexR = require('./index');
const activityR = require('./activity');

exports.routesInit = (app) => {
  app.use('/',indexR);
  app.use('/activity',activityR);

  app.use((req,res) => {
    res.json({msg:"Url not found , page 404 "})
  })
}
