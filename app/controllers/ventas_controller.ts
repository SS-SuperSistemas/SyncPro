import type { HttpContext } from '@adonisjs/core/http'
import Ventas from '#models/venta'
import db from '@adonisjs/lucid/services/db'

export default class VentasController {
    async index({ response }: HttpContext) {
        try {
            const registros = await Ventas.all()
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching sales', error })
        }
    }

    async store({ request, response }: HttpContext) {
        const data = request.only(['Id', 'Nfactura', 'Tipo', 'Fecha', 'Vence', 'CodCliente', 'NombreCliente', 'IdUsuario', 'Anulado', 'FacturaCancelado',
            'NumApertura', 'CodMoneda', 'TipoCambio', 'Exonerar', 'Observaciones', 'IdVendedor', 'Apartado', 'Hora', 'SubTotal', 'TotalDescuento', 'TotalImpuesto',
            'SubTotalGravado', 'SubTotalExcento', 'Total', 'IdBodega', 'AutorizacionFEL', 'NumeroFEL', 'SerieFEL', 'EmisionFEL', 'QR', 'TotalLetras', 'NoAbonos',
            'MontoAbonos', 'Contacto', 'TelContacto', 'AnuladoPor', 'NombrePaciente', 'NITFacturado', 'NombreFacturado', 'DireccionFacturado', 'DPI', 'Recibido',
            'Guia', 'NoGuia', 'Notas', 'IdTransporte', 'CantidadCuotas'])
        try {
            const venta = await Ventas.create(data)
            return response.created(venta)
        } catch (error) {
            console.log(error)
            return response.internalServerError({ message: 'Error creating sale', error })
        }
    }

    async show({ params, response }: HttpContext) {
        try {
            const venta = await Ventas.findOrFail(params.id)
            return response.ok(venta)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching sale', error })
        }
    }

    async updateAnulado({ params, response }: HttpContext) {
        const venta = await Ventas.findOrFail(params.id)
        venta.Anulado = true
        await venta.save()
        return response.ok(venta)
    }

    async insertVenta({ request, response }: HttpContext) {
        const Tipo = request.input('Tipo')
        const Fecha = request.input('Fecha')
        const Vence = request.input('Vence')
        const CodCliente = request.input('CodCliente')
        const NombreCliente = request.input('NombreCliente')
        const IdUsuario = request.input('IdUsuario')
        const Anulado = request.input('Anulado')
        const FacturaCancelado = request.input('FacturaCancelado')
        const NumApertura = request.input('NumApertura')
        const CodMoneda = request.input('CodMoneda')
        const TipoCambio = request.input('TipoCambio')
        const Exonerar = request.input('Exonerar')
        const Observaciones = request.input('Observaciones')
        const IdVendedor = request.input('IdVendedor')
        const SubTotal = request.input('SubTotal')
        const TotalDescuento = request.input('TotalDescuento')
        const TotalImpuesto = request.input('TotalImpuesto')
        const SubTotalGravado = request.input('SubTotalGravado')
        const SubTotalExcento = request.input('SubTotalExcento')
        const Total = request.input('Total')
        const IdBodega = request.input('IdBodega')
        const TotalLetras = request.input('TotalLetras')
        const Contacto = request.input('Contacto')
        const TelContacto = request.input('TelContacto')
        const NombrePaciente = request.input('NombrePaciente')
        const NITFacturado = request.input('NITFacturado')
        const NombreFacturado = request.input('NombreFacturado')
        const DPI = request.input('DPI')
        const NoGuia = request.input('NoGuia')
        const Notas = request.input('Notas')
        const IdTransporte = request.input('IdTransporte')

        try {
            // Ejecuta el procedimiento almacenado con los parámetros
            const resultado = await db
                .rawQuery('EXEC [dbo].[InsertarVenta] @Tipo = ?, @Fecha = ?, @Vence = ?, @CodCliente = ?, @NombreCliente = ?, @IdUsuario = ?, @Anulado = ?, @FacturaCancelado = ?, @NumApertura = ?, @CodMoneda = ?, @TipoCambio = ?, @Exonerar = ?, @Observaciones = ?, @IdVendedor = ?, @SubTotal = ?, @TotalDescuento = ?, @TotalImpuesto = ?, @SubTotalGravado = ?, @SubTotalExcento = ?, @Total = ?, @IdBodega = ?, @TotalLetras = ?, @Contacto = ?, @TelContacto = ?, @NombrePaciente = ?, @NITFacturado = ?, @NombreFacturado = ?, @DPI = ?, @NoGuia = ?, @Notas = ?, @IdTransporte = ?', [Tipo, Fecha, Vence, CodCliente, NombreCliente, IdUsuario, Anulado, FacturaCancelado, NumApertura, CodMoneda, TipoCambio, Exonerar, Observaciones, IdVendedor, SubTotal, TotalDescuento, TotalImpuesto, SubTotalGravado, SubTotalExcento, Total, IdBodega, TotalLetras, Contacto, TelContacto, NombrePaciente, NITFacturado, NombreFacturado, DPI, NoGuia, Notas, IdTransporte])
            return response.ok({ message: 'Procedimiento ejecutado correctamente', resultado })
        } catch (error) {
            console.log(error)
            return response.internalServerError({ message: 'Error ejecutando el procedimiento almacenado', error })
        }
    }
}

