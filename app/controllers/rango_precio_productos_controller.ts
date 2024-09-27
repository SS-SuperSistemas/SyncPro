import type { HttpContext } from '@adonisjs/core/http'
import RangoPrecio from '#models/rango_precio_producto'

export default class RangoPrecioProductosController {

    async index ({response}: HttpContext) {
        try {
            const registros = await RangoPrecio.all()
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching price ranges', error })
        }
    }

    async store({request, response}: HttpContext) {
        const data = request.only(['Id', 'CodProducto', 'CantidadInicio','CantidadFinal', 'Precio'])
        try {
            const rango = await RangoPrecio.create(data)
            return response.created(rango)
        } catch (error) {
            return response.internalServerError({ message: 'Error creating price range', error })
        }
    }

    async show({ params, response }: HttpContext) {
        try {
            const rango = await RangoPrecio.findOrFail(params.id)
            return response.ok(rango)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching price range', error })
        }
    }


}