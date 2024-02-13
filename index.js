import express from "express";
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

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

let posts = [];

app.post("/submit", (req, res) => {
    const userFeedback = req.body["feedback-post"];

    posts.push(userFeedback);
    res.render("index", {feedback: userFeedback}); // Pass 'feedback' to the template
});

app.post("/edit", (req, res) => {
    const newPost = req.body["edit-post"];
    posts.push[newPost];
    res.render("index", {feedback: newPost});
})

app.post("/delete", (req, res) => {
    const deletePost = req.body["delete-post"];
    res.redirect("/")
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
