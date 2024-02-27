import express from "express";
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', join(__dirname, 'views')); // Set the views directory

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.render("index"); // Render index.ejs
});

app.get("/about", (req, res) => {
    res.render("about"); // Render about.ejs
});
app.get("/contacts", (req, res) => {
    res.render("contacts");

});
app.get("/projects", (req, res) => {
    res.render("projects");
});


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
