const indexR = require('./index');
const activitesR = require('./activites');
const usersR = require('./users');

exports.routesInit = (app) => {
  app.use('/',indexR);
  app.use('/activites',activitesR);
  app.use('/users',usersR);

  app.use((req,res) => {
    res.json({msg:"Url not found , page 404 "})
  })
}
