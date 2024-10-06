import type { HttpContext } from '@adonisjs/core/http'
import AperturaCaja from '#models/apertura_caja'
export default class AperturaCajasController {
  async index({ response }: HttpContext) {
    try {
      const registros = await AperturaCaja.all()
      return response.ok(registros)
    } catch (error) {
      return response.internalServerError({ message: 'Error fetching clients', error })
    }
  }

  async store({ request, response }: HttpContext) {
    const data = request.only(['NApertura', 'Fecha', 'IdUsuario', 'Cajero', 'Observaciones', 'Anulado', 'Hora'])
    try {
      const apertura = await AperturaCaja.create(data)
      return response.created(apertura)
    } catch (error) {
      return response.internalServerError({ message: 'Error al crear Apertura', error })
    }
  }

  async show({ params, response }: HttpContext) {
    try {
      const apertura = await AperturaCaja.findOrFail(params.id)
      return response.ok(apertura)
    } catch (error) {
      return response.internalServerError({ message: 'Error fetching apertura', error })
    }
  }

  async updateAnulado({ params, response }: HttpContext) {
    const apertura = await AperturaCaja.findOrFail(params.id)
    apertura.Anulado = true
    await apertura.save()
    return response.ok(apertura)
  }

}