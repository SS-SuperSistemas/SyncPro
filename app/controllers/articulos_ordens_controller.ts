import type { HttpContext } from '@adonisjs/core/http'
import ArticulosOrden from '#models/articulos_orden'

export default class ArticulosOrdensController {

    async index({ response }: HttpContext) {
        try {
            const registros = await ArticulosOrden.all()
            return response.ok(registros)
        } catch (error) {
            console.log(error)
            return response.internalServerError({ message: 'Error fetching articles', error })
        }
    }

    async store({ request, response }: HttpContext) {
        const data = request.only(['NombreArticulo', 'IdArticulo', 'IdOrden', 'Cantidad', 'Precio'])
        try {
            const registros = await ArticulosOrden.create(data)
            return response.created({ message: 'Record created successfully', registros })
        } catch (error) {
            console.log(error)
            return response.internalServerError({ message: 'Error creating record', error })
        }
    }

    async show({ params, response }: HttpContext) {
        try {
            const registros = await ArticulosOrden.find(params.id)
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching record', error })
        }
    }







}