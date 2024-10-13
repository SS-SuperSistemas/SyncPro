import type { HttpContext } from '@adonisjs/core/http'
import ArqueoCheque from '#models/arqueo_cheque'


export default class ArqueoChequesController {

    async index({ response }: HttpContext) {
        try {
            const registros = await ArqueoCheque.all()
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fettching records', error })
        }
    }

    async store({ request, response }: HttpContext) {
        const data = request.only(['Id', 'Id_Arqueo', 'CodMoneda', 'Monto', 'TipoCambio'])
        try {
            const registros = await ArqueoCheque.create(data)
            return response.created({ message: 'Record created successfully', registros })
        } catch (error) {
            return response.internalServerError({ message: 'Error creating record', error })
        }
    }

    async show({ params, response }: HttpContext) {
        try {
            const arqueo = await ArqueoCheque.findOrFail(params.id)
            return response.ok(arqueo)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching record', error })
        }
    }



    



}