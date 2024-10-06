import type { HttpContext } from '@adonisjs/core/http'
import Pedidos from '#models/pedidos'
export default class PedidosController {

    // async index({ response }: HttpContext) {
    //     try {
    //         const registros = await Pedidos.all()
    //         return response.ok(registros)
    //     } catch (error) {
    //         return response.internalServerError({ message: 'Error fetching orders', error })
    //     }
    // }

    async index({ response }: HttpContext) {
        try {
            const registros = await Pedidos.all();
            // Convertir cada registro a un objeto plano y aplicar el mapeo
            const transformedRegistros = registros.map(pedido => this.mapKeys(pedido.toJSON()));
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
            id: data.id,
            CodCliente: data.codCliente, // Mapea a la forma original
            Fecha: data.fecha,
            Observaciones: data.observaciones,
            IdUsuario: data.idUsuario,
            FechaEntrega: data.fechaEntrega,
            CodMoneda: data.codMoneda,
            TipoCambio: data.tipoCambio,
            Anulado: data.anulado,
            idVendedor: data.idVendedor,
        };
    }

    async store({ request, response }: HttpContext) {
        const data = request.only(['id', 'CodCliente', 'Fecha', 'Observaciones', 'IdUsuario', 'FechaEntrega', 'CodMoneda', 'TipoCambio', 'Anulado', 'idVendedor'])
        try {
            const pedido = await Pedidos.create(data)
            return response.created(pedido)
        } catch (error) {
            console.log(error)
            return response.internalServerError({ message: 'Error creating order', error })
        }
    }

    async show({ params, response }: HttpContext) {
        try {
            const pedido = await Pedidos.findOrFail(params.id)
            const transformedRegistros = this.mapKeys(pedido.toJSON());
            return response.ok(transformedRegistros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching order', error })
        }
    }

    async updateAnulado({ params }: HttpContext) {
        const pedido = await Pedidos.findOrFail(params.id)
        pedido.Anulado = true
        return await pedido.save()
    }

    async pedidosPorVendedor({ params, response }: HttpContext) {
        try {
            const { idVendedor } = params;

            const pedidos = await Pedidos.query().where('idVendedor', idVendedor);
            
            const transformedRegistros = pedidos.map(pedido => this.mapKeys(pedido.toJSON()));
            return response.ok(transformedRegistros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching orders', error })
        }
    }



}