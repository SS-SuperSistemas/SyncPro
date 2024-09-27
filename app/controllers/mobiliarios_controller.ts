import type { HttpContext } from '@adonisjs/core/http'
import Mobiliario from '#models/mobiliario'
export default class MobiliariosController {
  async index({ response }: HttpContext) {
    try {
      const registros = await Mobiliario.all()
      return response.ok(registros)
    } catch (error) {
      return response.internalServerError({ message: 'Error fetching clients', error })
    }
  }
}
