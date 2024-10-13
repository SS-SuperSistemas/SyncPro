import type { HttpContext } from '@adonisjs/core/http'
import ArticuloCompuesto from '#models/articulo_compuesto'

export default class ArticuloCompuestosController {

    async index({ response }: HttpContext) {
        try {
            const registros = await ArticuloCompuesto.all()
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching records', error })
        }
    }

    async store({ request, response }: HttpContext) {
        const registros = request.only(['CodProductoCompuesto', 'CodProducto', 'Cantidad'])
        try {
            const registro = await ArticuloCompuesto.create(registros)
            return response.created(registro)
        } catch (error) {
            return response.internalServerError({ message: 'Error creating record', error })
        }
    }

    async show({ params, response }: HttpContext) {
        try {
            const registros = await ArticuloCompuesto.find(params.id)
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching record', error })
        }
    }

}