

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample product data
let products = [
    { id: 1, name: 'T-Shirt with Tape Details', price: 212, oldPrice: 232, discount: 20, stars: [true, false, false, false, false] },
    { id: 2, name: 'T-Shirt with Tape Details', price: 212, oldPrice: 232, discount: 20, stars: [false, false, false, false, false] },
    { id: 3, name: 'T-Shirt with Tape Details', price: 2, oldPrice: 22, discount: 10, stars: [false, false, false, false, false] },
    { id: 4, name: 'T-Shirt with Tape Details', price: 212, oldPrice: 232, discount: 20, stars: [false, false, false, false, false] },
    { id: 5, name: 'T-Shirt with Tape Details', price: 21, oldPrice: 232, discount: 20, stars: [false, false, false, false, false] },
    { id: 6, name: 'T-Shirt with Tape Details', price: 12, oldPrice: 232, discount: 20, stars: [false, false, false, false, false] },
    { id: 7, name: 'T-Shirt with Tape Details', price: 212, oldPrice: 232, discount: 20, stars: [false, false, false, false, false] },
    { id: 8, name: 'T-Shirt with Tape Details', price: 212, oldPrice: 232, discount: 20, stars: [false, false, false, false, false] },
    { id: 9, name: 'T-Shirt with Tape Details', price: 2, oldPrice: 22, discount: 10, stars: [false, false, false, false, false] },
    { id: 10, name: 'T-Shirt with Tape Details', price: 212, oldPrice: 232, discount: 20, stars: [false, false, false, false, false] },
    { id: 11, name: 'T-Shirt with Tape Details', price: 21, oldPrice: 232, discount: 20, stars: [false, false, false, false, false] },
    { id: 12, name: 'T-Shirt with Tape Details', price: 12, oldPrice: 232, discount: 20, stars: [false, false, false, false, false] },
];

// Get products
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Get single product by ID
app.get('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const product = products.find(p => p.id === productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// Update product stars
app.post('/api/products/:id/stars', (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const { starIndex } = req.body;

    products = products.map(product => {
        if (product.id === productId) {
            const updatedStars = product.stars.map((star, index) => index === starIndex ? !star : star);
            return { ...product, stars: updatedStars };
        }
        return product;
    });

    res.json(products.find(product => product.id === productId));
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
