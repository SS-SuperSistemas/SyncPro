import type { HttpContext } from '@adonisjs/core/http'
import ArqueoEfectivo from '#models/arqueo_efectivo'

export default class ArqueoEfectivosController {
    
    async index({ response }: HttpContext) {
        try {
            const resgistros = await ArqueoEfectivo.all()
            return response.ok(resgistros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fettching records', error })
        }
    }

    async store({ request, response }: HttpContext) {
        const data = request.only(['Id', 'Id_Arqueo', 'Denominacion', 'Cantidad', 'Valor', 'CodMoneda', 'TipoCambio'])
        try {
            const registros = await ArqueoEfectivo.create(data)
            return response.created({ message: 'Record created successfully', registros })
        } catch (error) {
            return response.internalServerError({ message: 'Error creating record', error })
        }
    }

    async show({ params, response }: HttpContext) {
        try {
            const arqueo = await ArqueoEfectivo.findOrFail(params.id)
            return response.ok(arqueo)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching record', error })
        }
    }


}