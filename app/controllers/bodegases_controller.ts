import Bodegas from '#models/bodegas'
import type { HttpContext } from '@adonisjs/core/http'
export default class BodegasesController {

    async index({ response }: HttpContext) {
        try {
            const registros = await Bodegas.all()
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching records', error })
        }
    }

    async store({ request, response }: HttpContext) {
        const data = request.only(['Id', 'Nombre', 'Observaciones', 'Principal'])
        try {
            const registros = await Bodegas.create(data)
            return response.created(registros)
        } catch (error) {
            return response.internalServerError({ message: 'Error creating record', error })
        }
    }

    async show({ params, response }: HttpContext) {
        try {
            const registro = await Bodegas.findOrFail(params.id)
            return response.ok(registro)
        } catch (error) {
            return response.internalServerError({ message: 'Bodega no encontrada' })
        }
    }

}