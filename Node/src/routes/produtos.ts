import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ produtos: []});
});

router.post('/', (req, res) => {
        console.log('Params', req.params)
        console.log('Query', req.query)
        console.log('Body', req.body)

    res.json({ produtos: []});
});

router.get('/:id', (req, res) => {
    const { id }  = req.params;

    res.json({ id: id, produtos: { name: 'Bola', price: '90'}});
});

export default router;