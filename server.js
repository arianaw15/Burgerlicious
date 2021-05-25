const express = require('express');
const exphbs = require('express-handlebars');
const dotenv = require("dotenv");
dotenv.config();

// Create an instance of the express app.
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));



// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

const db = require("./models");

// Set Handlebars as the default templating engine.
app.engine('hbs', exphbs({ defaultLayout: 'main', extname:'.hbs' }));
app.set('view engine', 'hbs');

const routes = require('./controller/burgers_controller');
app.use(routes);


app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

app.use((req, res) => {
  res.status(404).render("error");
});