const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const serverless = require('serverless-http');

const showFundMe = {
  title: "ShowFundMe",
  link: "https://showfundme.netlify.app",
  description: "ShowFundMe is a new fundraising platform for independent or otherwise underfunded artists looking to tour their work after the Coronavirus Pandemic. We aim to bridge a gap between traditional fundraising platforms that charge a fee, and reward based fundraising that puts more financial burdon on the artist. Currently in the development, launch is scheduled for Summer 2021.",
  technologies: "Firebase, Create React App, SASS, PayPal"
}

const streetScape = {
  title: "StreetScape",
  link: "https://https://github.com/geanieblanco/StreetscapeMVP",
  description: "StreetScape was a prototype React Native app geared towards pedestrian safety. Using crowdsourced data of potential hazards on sidewalks and other paths, StreetScape would alert users of what lies ahead, and allow them to alter their route to something safer.",
  technologies: "Firebase, React Native, SASS, MapBox, Google Maps"
}

const forTheThrone = {
  title: "For the Throne",
  link: "https://geanieblanco.github.io/ForTheThrone/",
  description: "For the Throne was a platform used to place bets and predictions on who would survive the final season of Game of Thrones.",
  technologies: "Firebase, React, SASS"
}

const portfolio = {
  title: "Portfolio",
  link: "http://www.geanieblanco.com",
  description: "My personal portfolio was a creative means to acknowledge the first Operating System I ever used - Windows 95.",
  technologies: "Handlebars, Express, Windows 95 UI Kit"
}

app.engine('hbs', exphbs({
  defaultLayout: 'index',
  extname: '.hbs'
}));

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');

// ROUTES
app.get('/', (req, res) => {
  res.render('aboutMe');
});

app.get('/projects', (req, res) => {
  res.render('projects');
});

app.get('/project-showfundme', (req, res) => {
  res.render('project', {data : showFundMe});
});

app.get('/project-streetscape', (req, res) => {
  res.render('project', {data : streetScape});
});

app.get('/project-forthethrone', (req, res) => {
  res.render('project', {data : forTheThrone});
});

app.get('/project-portfolio', (req, res) => {
  res.render('project', {data : portfolio});
});

app.get('/resume', (req, res) => {
  res.render('resume');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.listen(3000, () => {
  console.log('The web server has started on port 3000');
});

module.exports.handler = serverless(app);
