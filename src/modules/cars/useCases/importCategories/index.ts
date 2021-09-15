import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'
import { ImportCategoriesController } from './ImportCategoriesController'
import { ImportCategoriesUseCase } from './ImportCategoriesUseCase'

const categoriesRepository = CategoriesRepository.getInstance()

const importCategoriesUseCase = new ImportCategoriesUseCase(
  categoriesRepository
)

const importCategoriesControler = new ImportCategoriesController(
  importCategoriesUseCase
)

export { importCategoriesControler }
