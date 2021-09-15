import { Request, Response } from 'express'
import { ListCategoriesUseCase } from './ListCategoriesUseCase'

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  handle(request: Request, response: Response) {
    try {
      const all = this.listCategoriesUseCase.execute()
      return response.json(all)
    } catch (error) {
      response.status(400).json({ error: error.message })
    }
  }
}

export { ListCategoriesController }
