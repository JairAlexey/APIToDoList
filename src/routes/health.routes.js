import express from 'express';

const router = express.Router();

// Ruta de salud
router.get('/health', (req, res) => {
    res.status(200).json({ status: 'API en funcionamiento' });
});

export default router; 