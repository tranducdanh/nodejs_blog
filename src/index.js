const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

const route = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//http logger
// app.use(morgan("combined"));

// template engine
// app.engine('handlebars', handlebars());
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources/views'));

// route init
route(app);

            app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
