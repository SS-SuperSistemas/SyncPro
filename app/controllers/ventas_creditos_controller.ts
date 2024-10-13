import type { HttpContext } from '@adonisjs/core/http'
import VentasCredito from '#models/ventas_credito'
import db from '@adonisjs/lucid/services/db'
export default class VentasCreditosController {

    async index({ response }: HttpContext) {
        try {
            const registros = await VentasCredito.all()
            return response.ok(registros)
        } catch (error) {
            console.log(error)
            return response.internalServerError({ message: 'Error fetching records', error })
        }
    }

    async store({ request, response }: HttpContext) {
        try {
            const data = request.only(['Id', 'IdFactura', 'Fecha', 'Cuota', 'Abono', 'Abono', 'FechaPago'])
            const registros = await VentasCredito.create(data)
            return response.created({ message: 'Record created successfully', registros })
        } catch (error) {
            return response.internalServerError({ message: 'Error creating record', error })
        }
    }

    async storev2({ request, response }: HttpContext) {
        const idCliente = request.input('idCliente')
        const tipocambio = request.input('tipocambio')
        try {
            // Ejecuta el procedimiento almacenado con los parámetros
            const resultado = await db
                .rawQuery('EXEC [dbo].[SaldoFacturaVentaT] @CodigoCliente = ?, @TipoCambRecibo = ?', [idCliente, tipocambio])
            return response.ok({ message: 'Procedimiento ejecutado correctamente', resultado })
        } catch (error) {
            console.log(error)
            return response.internalServerError({ message: 'Error ejecutando el procedimiento almacenado', error })
        }
    }

    async show({ params, response }: HttpContext) {
        try {
            const registros = await VentasCredito.findOrFail(params.id)
            return response.ok(registros)
        } catch (error) {
            console.log(error)
            return response.internalServerError({ message: 'Error fetching records', error })
        }
    }







}

