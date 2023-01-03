const express = require("express");
const app = express();
//===============import shelterRoutes
const shelterRoutes = require("./RouteDemo/shelter");
//==============imort dogRoutes
const dogRoutes = require("./RouteDemo/dog");
//==============imort adminRoutes
const adminRoutes = require("./RouteDemo/admin");
//==============

//only request to < '/admin' > will be sent to our route
app.use("/admin", adminRoutes);
//==============

//only request to < '/shelters' > will be sent to our route
app.use("/shelters", shelterRoutes);
//==============

//only request to < '/dogs' > will be sent to our route
app.use("/dogs", dogRoutes);
//==============

app.listen(3000, () => {
  console.log(`Listening on PORT 3000`);
});
