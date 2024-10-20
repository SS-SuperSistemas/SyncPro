import type { HttpContext } from '@adonisjs/core/http'
import DetalleVentas from '#models/detalle_venta'
import db from '@adonisjs/lucid/services/db'

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

async insertDetalle({ request, response }: HttpContext) {
    const IdFactura = request.input('IdFactura')
    const CodArticulo = request.input('CodArticulo')
    const Descripcion = request.input('Descripcion')
    const Cantidad = request.input('Cantidad')
    const Unidades = request.input('Unidades')
    const Paquetes = request.input('Paquetes')
    const Costo = request.input('Costo')
    const PrecioVenta = request.input('PrecioVenta')
    const PrecioMoyoreo = request.input('PrecioMayoreo')
    const PorcDescuento = request.input('PorcDescuento')
    const TotalDescuento = request.input('TotalDescuento')
    const PorcImpuesto = request.input('PorcImpuesto')
    const TotalImpuesto = request.input('TotalImpuesto')
    const SubtotalGravado = request.input('SubtotalGravado')
    const SubtotalExcento = request.input('SubTotalExcento')
    const Total = request.input('Total')
    const IdBodega = request.input('IdBodega')
    const CodMoneda = request.input('CodMoneda')
    const MaxDesc = request.input('MaxDesc')
    const Regalias = request.input('Regalias')
    const PorcComision = request.input('PorcComision')
    const IdLote = request.input('IdLote')
    const IdUsuario = request.input('IdUsuario')
    const Compuesto = request.input('Compuesto')
    const MayoreoMenudeo = request.input('MayoreoMenudeo')
    try {
        // Ejecuta el procedimiento almacenado con los parámetros
        const resultado = await db
            .rawQuery('EXEC [dbo].[sp_InsertarDetalleVentas] @IdFactura = ?, @CodArticulo = ?, @Descripcion = ?, @Cantidad = ?, @Unidades = ?, @Paquetes = ?, @Costo = ?, @PrecioVenta = ?, @PrecioMayoreo = ?, @PorcDescuento = ?, @TotalDescuento = ?, @PorcImpuesto = ?, @TotalImpuesto = ?, @SubtotalGravado = ?, @SubTotalExcento = ?, @Total = ?, @IdBodega = ?, @CodMoneda = ?, @MaxDesc = ?, @Regalias = ?, @PorcComision = ?, @IdLote = ?, @IdUsuario = ?, @Compuesto = ?, @MayoreoMenudeo = ?', [IdFactura, CodArticulo, Descripcion, Cantidad, Unidades, Paquetes, Costo, PrecioVenta, PrecioMoyoreo, PorcDescuento, TotalDescuento, PorcImpuesto, TotalImpuesto, SubtotalGravado, SubtotalExcento, Total, IdBodega, CodMoneda, MaxDesc, Regalias, PorcComision, IdLote, IdUsuario, Compuesto, MayoreoMenudeo])
        return response.ok({ message: 'Procedimiento ejecutado correctamente', resultado })
    } catch (error) {
        console.log(error)
        return response.internalServerError({ message: 'Error ejecutando el procedimiento almacenado', error })
    }
}



}

