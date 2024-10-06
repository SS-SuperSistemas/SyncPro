import type { HttpContext } from '@adonisjs/core/http'
import DetallePedidos from '#models/detalle_pedido'
export default class DetallePedidosController {

    // async index({ response }: HttpContext) {
    //     try {
    //         const registros = await DetallePedidos.all()
    //         return response.ok(registros)
    //     } catch (error) {
    //         return response.internalServerError({ message: 'Error fetching order details', error })
    //     }
    // }

    async index({ response }: HttpContext) {
        try {
            const registros = await DetallePedidos.all();
            // Convertir cada registro a un objeto plano y aplicar el mapeo
            const transformedRegistros = registros.map(detallepedido => this.mapKeys(detallepedido.toJSON()));
            return response.ok(transformedRegistros);
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching orders', error });
        }
    }
    /**
     * Mapea las claves del objeto a los nombres originales de la base de datos.
     */
    private mapKeys(data: Record<string, any>): Record<string, any> {
        return {
            Id: data.id,
            IdPedido: data.idPedido,
            CodArticulo: data.codArticulo, // Mapea a la forma original
            Descripcion: data.descripcion,
            Cantidad: data.cantidad,
            PrecioVenta: data.precioVenta,
            PorcDescuento: data.porcDescuento,
            Total: data.total,
        };
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
            const registro = await DetallePedidos.findOrFail(params.id)
            const transformedRegistros = this.mapKeys(registro.toJSON());
            return response.ok(transformedRegistros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching order detail', error })
        }
    }

    async detallePedidosPorPedidos({ params, response }: HttpContext) {
        try {
            const { idPedido } = params
            const pedidos = await DetallePedidos.query().where('IdPedido', idPedido);
            const transformedRegistros = pedidos.map(detallepedido => this.mapKeys(detallepedido.toJSON()));
            return response.ok(transformedRegistros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching order details', error })
        }
    }


}