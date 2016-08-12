const express = require('express');
const models = require('../models');

module.exports = {
  registerRouter: function() {
    const router = express.Router();

    router.get('/', this.index);
    router.get('/new', this.new);
    router.post('/', this.create);
    router.get('/:username/:postSlug', this.show);
    router.get('/:username/:postSlug/edit', this.edit);
    router.put('/:username/:postSlug', this.update);
    router.delete('/:username/:postSlug', this.update);

    return router;
  },
  index: function(req, res) {
    res.send('All Post...');
  },
  new: function(req, res) {
    res.send('Rendered form to create post.')
  },
  create: function(req, res) {
    res.send('Creating post...');
  },
  show: function(req, res) {
    res.send('Showing specific post...');
  },
  edit: function(req, res) {
    res.send('Rendered form to edit existing post.');
  },
  update: function(req, res) {
    res.send('Updating existing post...');
  },
  delete: function(req, res) {
    res.send('Delete existing post...');
  }
}
