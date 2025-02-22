import express from 'express';
import { getResources, createResource, updateResource, deleteResource } from '../controllers/index.js';

const router = express.Router();

router.get('/resources', getResources);
router.post('/resources', createResource);
router.put('/resources/:id', updateResource);
router.delete('/resources/:id', deleteResource);

export default router;