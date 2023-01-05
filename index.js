// A simple Cookie
const express = require("express");
const app = express();

//☺ To parse the cookie we need to install cookie-parser package (npm i cookie-parser) and then import it.
const cookieParser = require("cookie-parser");
// and them execute cookieParser in app.use().
//To signed-cookie also we need to put the important info ( for example secret) in an environment variable
app.use(cookieParser("thisismysecret"));
//☺==========================================

app.get("/greet", (req, res) => {
  // No-Name is default in case we have no name in cookeis .
  const { name = "No-Name" } = req.cookies;
  res.send(`Hey There!!, ${name}`);
});

app.get("/setname", (req, res) => {
  // Set COOKIE : Now it set < name > as key and < Mehran%20Jalai > as a value.
  res.cookie("name", "Mehran Jalai");
  res.cookie("animal", "harlequin shrimp");
  res.send(`Ok Sent You a COOKIE!! `);
});

// Signed-cookie
app.get("/getsignedcookie", (req, res) => {
  // put  { signed: true } => It's not about hiding data or making it invisible or keeping it secret, It's about
  //                           verifying that nobody has tampered with it or it hasn't changed
  res.cookie("fruit", "grape", { signed: true });
  res.send("ok signed your fruit cookie!!");
});

app.get("/verifyfruit", (req, res) => {
  // to show regular cookie just < req.cookies >
  console.log(req.cookies);
  // to show signed-cookie just < req.signedCookies >
  res.send(req.signedCookies);
});

app.listen(8080, () => {
  console.log(`Listening on port 8080`);
});
