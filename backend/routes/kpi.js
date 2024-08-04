/*Paso 10. */
import express from 'express';
import KPI from '../model/KPI.js';

const router = express.Router();

router.get('/kpis', async (req, res) => {
  try {
    const kpis = await KPI.find();
    res.status(200).json(kpis);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
