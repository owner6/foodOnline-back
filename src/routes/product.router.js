import Router from 'express'

import controller from '../controllers/product.controller.js'

import { authMiddleware } from '../middleware/authMiddleware.js';

const router = new Router()

router.use(authMiddleware)

// Routes
router.get('/', controller.getAllProducts);
router.get('/:id', controller.getProductById);
router.post('/', controller.createProduct);
router.put('/:id', controller.updateProductById);
router.delete('/:id', controller.deleteProductById);

export default router