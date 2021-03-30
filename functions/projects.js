const express = require('express')
const router = express.Router()
app.set('view engine', 'hbs')

router.get('/projects', (req, res) => {
    res.render('projects');
  });