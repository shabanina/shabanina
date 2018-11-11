const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
    Item
        .find()
        .then(items => res.json(items))
});

// @route   POST api/items
// @desc    Create An Item
// @access  Public
router.post('/', (req, res) => {
    const newItem = new Item({
        item: req.body.item,
        category: req.body.category,
        price: req.body.price,
        src: req.body.src,
        description: req.body.description,
        stock: req.body.stock,
        shipping: req.body.shipping,
        freeShipping: req.body.freeShipping,
        soldQ: req.body.soldQ
    });
    newItem.save().then(item => res.json(item));
});

// @route   GET api/items/:id
// @desc    Get An Item
// @access  Public
router.get('/:id', (req, res) => {
    Item.findById(req.params.id).then(item => res.json(item))
        .catch(err => res.status(404).json({ success: false }));
});

// @route   DELETE api/items/:id
// @desc    Delete An Item
// @access  Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id).then(item =>
        item.remove().then(() => res.json({ success: true }))
    ).catch(err => res.status(404).json({ success: false }));
});


module.exports = router; 