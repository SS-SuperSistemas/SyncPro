import type { HttpContext } from '@adonisjs/core/http'
import DetalleVentas from '#models/detalle_venta'

export default class DetalleVentasController {

    async index({ response }: HttpContext) {
        try {
            const registros = await DetalleVentas.all()
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching sales details', error })
        }
    }

    async store({ request, response }: HttpContext) {   
        const data =request.only(['Id', 'IdFactura', 'CodArticulo', 'Descripcion', 'Cantidad', 'Unidades', 'Paquetes', 'Costo', 'PrecioVenta', 'PrecioMayoreo','PorcDescuento','PorcImpuesto','TotalImpuesto','SubtotalGravado','SubTotalExcento','Total','Idbodega','CodMoneda','MaxDesc','Regalias','PorcComision','IdLote','IdUsuario','Compuesto','BonifUnit','BonifPaq','MayoreoMenudeo'])
        try {
            const detalle = await DetalleVentas.create(data)
            return response.created(detalle)
        } catch (error) {
            return response.internalServerError({ message: 'Error creating sale detail', error })
        }
    }
async show({ params, response }: HttpContext) {
    try {
        const detalle = await DetalleVentas.findOrFail(params.id)
        return response.ok(detalle)
    } catch (error) {
        return response.internalServerError({ message: 'Error fetching sale detail', error })
    }

}



}

