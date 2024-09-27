import type { HttpContext } from '@adonisjs/core/http'
import DetallePedidos from '#models/detalle_pedido'
export default class DetallePedidosController {

    async index({ response }: HttpContext) {
        try {
            const registros = await DetallePedidos.all()
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching order details', error })
        }
    }


    async store({ request, response }: HttpContext) {
        const data = request.only(['IdPedido', 'CodArticulo', 'Descripcion','Cantidad','PrecioVenta','PorcDescuento','Total'])
        try {
            const detalle = await DetallePedidos.create(data)
            return response.created(detalle)
        } catch (error) {
            return response.internalServerError({ message: 'Error creating order detail', error })
        }
    }

    async show({ params, response }: HttpContext) {
        try {
            const detalle = await DetallePedidos.findOrFail(params.id)
            return response.ok(detalle)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching order detail', error })
        }
    }


}