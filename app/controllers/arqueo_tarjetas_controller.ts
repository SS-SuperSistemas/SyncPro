import type { HttpContext } from '@adonisjs/core/http'
import ArqueoTarjeta from '#models/arqueo_tarjeta'
export default class ArqueoTarjetasController {

    async index({ response }: HttpContext) {
        try {
            const registros = await ArqueoTarjeta.all()
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching records', error })
        }
    }
      
    async store ({ request, response }: HttpContext) {
        const data = request.only(['Id', 'Id_Arqueo', 'Id_Tarjeta', 'Monto', 'TipoCambio'])
        try {
            const registros = await ArqueoTarjeta.create(data)
            return response.created({ message: 'Record created successfully', registros })
        } catch (error) {
            return response.internalServerError({ message: 'Error creating record', error })
        }
    }

    async show({ params, response }: HttpContext) {
        try {
            const arqueo = await ArqueoTarjeta.findOrFail(params.id)
            return response.ok(arqueo)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching record', error })
        }
    }



}