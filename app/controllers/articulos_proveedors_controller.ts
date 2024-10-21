import type { HttpContext } from '@adonisjs/core/http'
import ArticulosProveedor from '#models/articulos_proveedor'
export default class ArticulosProveedorsController {

    async index({ response }: HttpContext) {
        try {
            const registros = await ArticulosProveedor.all()
            return response.ok(registros)
        } catch (error) {
            console.log(error)
            return response.internalServerError({ message: 'Error fetching articles', error })
        }
    }

    async store({ request, response }: HttpContext) {
        const data = request.only(['CodArticulo', 'CodProveedor', 'FechaUltimaCompra', 'UltimoCosto', 'CodMoneda', 'UltimaBonif', 'UltimaRealBonif', 'UltimoDescuento', 'CantidadComprada', 'NumFac'])
        try {
            const registros = await ArticulosProveedor.create(data)
            return response.created(registros)
        } catch (error) {
            console.log(error)
            return response.internalServerError({ message: 'Error fetching articles', error })
        }
    }

    async show({ params, response }: HttpContext) {
        try {
            const registros = await ArticulosProveedor.findOrFail(params.id)
            return response.ok(registros)
        } catch (error) {
            console.log(error)
            return response.internalServerError({ message: 'Error fetching articles', error })
        }
    }
}