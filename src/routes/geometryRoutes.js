import express from 'express';
import GeometryController from '../controllers/GeometryController.js';

const router = express.Router();

router.post('/intersect', GeometryController.processIntersection);

export default router;