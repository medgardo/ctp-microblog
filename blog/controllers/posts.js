const auth = require('../middlewares/auth');
const express = require('express');
const models = require('../models');

module.exports = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);
    router.get('/new', auth.redirectIfNotLoggedIn('/login'), this.new);
    router.post('/', auth.redirectIfNotLoggedIn('/login'), this.create);
    router.get('/:username/:title', this.show);
    router.get('/:username/:title/edit', auth.redirectIfNotLoggedIn('/login'), this.edit);
    router.put('/:username/:title', auth.redirectIfNotLoggedIn('/login'), this.update);
    router.delete('/:username/:title', auth.redirectIfNotLoggedIn('/login'), this.delete);

    return router;
  },
  index(req, res) {
    models.Post.findAll().then((post) => {
      res.render('posts', { post });
    });
  },
  new(req, res) {
    res.render('posts/new');
  },
  create(req, res) {
    models.Post.create({
      email: req.user.email,
      username: req.user.username,
      title: req.body.title.toLowerCase(),
      body: req.body.body,
    }).then((post) => {
      res.redirect(`/posts/${post.username}/${post.title}`);
    }).catch(() => {
      res.render('posts/new');
    });
  },
  show(req, res) {
    models.Post.findOne({
      where: {
        username: req.params.username,
        title: req.params.title,
      },
    }).then((post) =>
      (post ? res.render('posts/single', { post }) : res.redirect('/posts'))
    );
  },
  edit(req, res) {
    if (req.user.username !== req.params.username) res.redirect('/posts');
    models.Post.findOne({
      where: {
        username: req.params.username,
        title: req.params.title,
      },
    }).then((post) =>
      (post ? res.render('posts/edit', { post }) : res.redirect('/posts'))
    );
  },
  update(req, res) {
    if (req.user.username !== req.params.username) res.redirect('/posts');
    models.Post.update({
      title: req.body.title,
      body: req.body.body,
    }, {
      where: {
        username: req.params.username,
        title: req.params.title,
      },
    }).then((post) => {
      res.redirect(`/posts/${post.username}/${post.title}`);
    });
  },
  delete(req, res) {
    if (req.user.username !== req.params.username) res.redirect('/posts');
    models.Post.destroy({
      where: {
        username: req.params.username,
        title: req.params.title,
      },
    }).then(() => {
      res.redirect('/posts');
    });
  },
};
