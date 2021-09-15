import { Router } from 'express'
import multer from 'multer'

import { createCategoryController } from '../modules/cars/useCases/createCategory'
import { importCategoriesControler } from '../modules/cars/useCases/importCategories'
import { listCategoriesController } from '../modules/cars/useCases/listCategories'

const categoriesRoutes = Router()

const upload = multer({ dest: './tmp' })

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response)
})

categoriesRoutes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response)
})

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  return importCategoriesControler.handle(request, response)
})

export { categoriesRoutes }
