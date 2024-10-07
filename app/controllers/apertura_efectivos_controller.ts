import type { HttpContext } from '@adonisjs/core/http'
import AperturaEfectivo from '#models/apertura_efectivo'
export default class AperturaEfectivosController {

    async index({ response }: HttpContext) {
        try {
            const registros = await AperturaEfectivo.all()
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching records', error })
        }
    }

    async store({ request, response }: HttpContext) {
        try {
            const data = request.only(['NApertura', 'Denominacion', 'Cantidad', 'Valor', 'CodMoneda', 'TipoCambio'])
            const registro = await AperturaEfectivo.create(data)
            return response.created({ message: 'Record created successfully', registro })
        } catch (error) {
            return response.internalServerError({ message: 'Error creating record', error })
        }
    }

    async show({ params, response }: HttpContext) {
        try {
            const registros = await AperturaEfectivo.find(params.id)
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching record', error })
        }
    }

}