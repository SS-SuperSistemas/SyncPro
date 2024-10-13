import type { HttpContext } from '@adonisjs/core/http'
import DetallePago from '#models/detalle_pago'
export default class DetallePagosController {

    async index({ response }: HttpContext) {
        try {
            const registros = await DetallePago.all()
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching records', error })
        }
    }

    async store({ request, response }: HttpContext) {
        try {
            const data = request.only(['Id', 'FormaPago', 'ReferenciaTipo', 'ReferenciaDoc', 'IdODP', 'TarjetaBanco'])
            const registros = await DetallePago.create(data)
            return response.created(registros)
        } catch (error) {
            console.log(error)
            return response.internalServerError({ message: 'Error creating inventory', error })
        }
    }

    async show({ params, response }: HttpContext) {
        try {
            const registros = await DetallePago.findOrFail(params.id)
            return response.ok(registros)
        } catch (error) {
            console.log(error)
            return response.internalServerError({ message: 'Error fetching records', error })
        }
    }



}