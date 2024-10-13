import type { HttpContext } from '@adonisjs/core/http'
import ArticuloBodega from '#models/articulo_bodega'

export default class ArticuloBodegasController {

    async index({ response }: HttpContext) {
        try {
            const registros = await ArticuloBodega.all()
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching records', error })
        }
    }

    async store({ request, response }: HttpContext) {
        try {
            const data = request.only(['Id', 'CodArticulo', 'IdBodega', 'Existencia', 'CostoPromedio'])
            const registro = await ArticuloBodega.create(data)
            return response.created(registro)
        } catch (error) {
            return response.internalServerError({ message: 'Error creating record', error })
        }
    }

    async show({ params, response }: HttpContext) {
        try {
            const registro = await ArticuloBodega.findByOrFail('id', params.id)
            return response.ok(registro)
        } catch (error) {
            return response.notFound({ message: 'Record not found' })
        }
    }
}