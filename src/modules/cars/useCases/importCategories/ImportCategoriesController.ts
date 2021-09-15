import { Request, Response } from 'express'
import { ImportCategoriesUseCase } from './ImportCategoriesUseCase'

class ImportCategoriesController {
  constructor(private importCategoriesUseCase: ImportCategoriesUseCase) {}

  handle(request: Request, response: Response) {
    try {
      const { file } = request

      this.importCategoriesUseCase.execute({ file })

      return response.send()
    } catch (error) {
      response.status(400).json({ error: error.message })
    }
  }
}

export { ImportCategoriesController }
