import type { HttpContext } from '@adonisjs/core/http'
import AperturaCaja from '#models/apertura_caja'
import db from '@adonisjs/lucid/services/db'
export default class AperturaCajasController {
  async index({ response }: HttpContext) {
    try {
      const registros = await AperturaCaja.all()
      return response.ok(registros)
    } catch (error) {
      return response.internalServerError({ message: 'Error fetching clients', error })
    }
  }

  //Estado de caja
  async getAperturaActiva({ params, response }: HttpContext) {
    const IdUsuario = params.IdUsuario

    // Verificar si el parámetro idUsuario está definido
    if (!IdUsuario) {
        return response.badRequest({ message: 'idUsuario es requerido' })
    }

    try {
        // Imprimir el valor de idUsuario para depurar
        console.log('idUsuario:', IdUsuario)

        // Ejecutar la consulta SQL
        const apertura = await db
            .rawQuery('SELECT NApertura, Cajero FROM vEstadoCaja WHERE Anulado = 0 AND Estado = ? AND IdUsuario = ?', ['A', IdUsuario])

        // Verificar si se encontró una apertura
        if (apertura.length > 0) {
            const { NApertura, Cajero } = apertura[0]
            return response.ok({
                tieneApertura: true,
                idApertura: NApertura,
                Cajero: Cajero
            })
        } else {
            return response.ok({
                tieneApertura: false,
                idApertura: null,
                Cajero: null
            })
        }

    } catch (error) {
        return response.internalServerError({ message: 'Error ejecutando la consulta', error })
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