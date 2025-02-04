import express from 'express';
import { getVendors, createVendors } from '../controllers/vendorController.js';

const router = express.Router();

router.get('/', getVendors);

router.get('/create', createVendors);

export default router;
