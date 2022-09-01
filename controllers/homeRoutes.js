const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', (req, res) => {
    res.render('homepage')
    // lot more to add here but render the main page with all blogs
});

router.get('/blog/:id', (req, res) => {
    res.render('blog');
    // render blog post with specific id and any comments attached to that id
    // can use the url to add the id as a parameter
});

router.get('/dashboard', (req, res) => {
    res.render('dashboard');
    // render dashboard with user specific blogs and ability to add another blog
});

router.get()

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router;