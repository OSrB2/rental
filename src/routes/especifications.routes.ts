import { Router } from 'express';
import { createCategoryController } from '../modules/cars/useCases/createCategory';

const especificationsRoutes = Router();

especificationsRoutes.post('/', (req, res) => {
  return createCategoryController.handle(req, res);
});

export { especificationsRoutes };
