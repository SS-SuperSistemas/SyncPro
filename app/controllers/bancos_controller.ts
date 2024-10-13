import type { HttpContext } from '@adonisjs/core/http'
import Bancos from '#models/bancos'
export default class BancosController {
  async index({ response }: HttpContext) {
    try {
      const registros = await Bancos.all()
      return response.ok(registros)
    } catch (error) {
      return response.internalServerError({ message: 'Error fetching records', error })
    }
  }

  async store({ request, response }: HttpContext) {
    const registros = request.only(['Nombre', 'Inhabilitado'])
    try {
      const registro = await Bancos.create(registros)
      return response.created(registro)
    } catch (error) {
      return response.internalServerError({ message: 'Error creating record', error })
    }
  }

  async show({ params, response }: HttpContext) {
    try {
      const registros = await Bancos.find(params.id)
      return response.ok(registros)
    } catch (error) {
      return response.internalServerError({ message: 'Error fetching record', error })
    }
  }

  async updateInhabilitado({ params, response }: HttpContext) {
    const registro = await Bancos.findOrFail(params.id)
    registro.Inhabilitado = true
    await registro.save()
    return response.ok(registro)
  }
}
