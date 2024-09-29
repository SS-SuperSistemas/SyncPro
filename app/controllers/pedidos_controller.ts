import type { HttpContext } from '@adonisjs/core/http'
import Pedidos from '#models/pedidos'
export default class PedidosController {


    async index({ response }: HttpContext) {
        try {
            const registros = await Pedidos.all()
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching orders', error })
        }
    }



    async store({ request, response }: HttpContext) {
        const data = request.only(['id', 'CodCliente', 'Fecha', 'Observaciones', 'IdUsuario', 'FechaEntrega', 'CodMoneda', 'Anulado', 'IdVendedor'])
        try {
            const pedido = await Pedidos.create(data)
            return response.created(pedido)
        } catch (error) {
            return response.internalServerError({ message: 'Error creating order', error })
        }
    }



    async show({ params, response }: HttpContext) {
        try {
            const pedido = await Pedidos.findOrFail(params.id)
            return response.ok(pedido)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching order', error })
        }
    }



    async updateAnulado({ params, response }: HttpContext) {
        const pedido = await Pedidos.findOrFail(params.id)
        try {
            pedido.Anulado = true
            await pedido.save()
            return response.ok(pedido)
        } catch (error) {
            return response.internalServerError({ message: 'Error updating order', error })
        }
    }
}