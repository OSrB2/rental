import { Router } from 'express';
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const especificationsRoutes = Router();

const specificationsRepository = new SpecificationRepository();

especificationsRoutes.post('/', (req, res) => {
  const { name, description } = req.body;
  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository
  );

  createSpecificationService.exercute({ name, description });

  return res.status(201).send();
});

export { especificationsRoutes };
