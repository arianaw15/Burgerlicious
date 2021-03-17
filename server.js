const express = require('express');
const exphbs = require('express-handlebars');

// Create an instance of the express app.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const burgerList = [
{
    burger: 'Pizza Burger'
}
]

app.get('',(req,res)=> {
    res.render('index',{
        allBurgers: burgerList,
    });
});

app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);