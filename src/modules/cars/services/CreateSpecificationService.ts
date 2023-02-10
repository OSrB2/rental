import { ISpecificationsRepository } from '../repositories/ISpecificationRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) {}
  exercute({ name, description }: IRequest): void {
    const especificationAlreadyExists =
      this.specificationsRepository.findByName(name);

    if (especificationAlreadyExists) {
      throw new Error('Specification already exists!');
    }

    this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationService };
