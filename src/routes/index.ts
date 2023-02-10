import { Router } from 'express';
import { categoriesRoutes } from './categories.routes';
import { especificationsRoutes } from './especifications.routes';

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/specifications', especificationsRoutes);

export { router };
