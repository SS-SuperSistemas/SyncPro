import type { HttpContext } from '@adonisjs/core/http'
import Localidad from '#models/localidad'
export default class LocalidadsController {

    async index({ response }: HttpContext) {
        try {
            const registros = await Localidad.all()
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching records', error })
        }
    }

    async store({ request, response }: HttpContext) {
        const data = request.only(['Id', 'Nombre'])
        try {
            const registros = await Localidad.create(data)
            return response.created({ message: 'Record created successfully', registros })
        } catch (error) {
            return response.internalServerError({ message: 'Error creating record', error })
        }
    }

    async show({ params, response }: HttpContext) {
        try {
            const localidad = await Localidad.findOrFail(params.id)
            return response.ok(localidad)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching record', error })
        }
    }
}