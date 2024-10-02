import type { HttpContext } from '@adonisjs/core/http'
import AbonoPagar from '#models/abono_pagar'
import db from '@adonisjs/lucid/services/db'
export default class AbonoPagarsController {

    async index({ response }: HttpContext) {
        try {
            const registros = await AbonoPagar.all()
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching records', error })
        }
    }

    // async store({ request, response }: HttpContext) {
    //     const data = request.only(['Id', 'Fecha', 'CodProveedor', 'IdUsuario', 'SaldoCuenta', 
    //         'Monto', 'SaldoActual', 'Anulado', 'CodMoneda', 'TipoCambio', 'MontoLetras', 
    //         'FechaEntrada', 'Observacion', 'NumRecibo', 'FondoCaja', 'IdMov'])
    //     try {
    //         const registros = await AbonoPagar.create(data)
    //         return response.created({ message: 'Record created successfully', registros })
    //     } catch (error) {
    //         console.log(error)
    //         return response.internalServerError({ message: 'Error creating record', error })
    //     }
    // }

    async store({ request, response }: HttpContext) {
        const data = request.only([
             'Fecha', 'CodProveedor', 'IdUsuario', 'SaldoCuenta', 
             'Monto', 'SaldoActual', 'Anulado', 'CodMoneda', 'TipoCambio', 'MontoLetras', 
             'FechaEntrada', 'Observacion', 'NumRecibo', 'FondoCaja', 'IdMov' // Cambié Idbanco a IdBanco
        ]);
    
        try {
            console.log('Datos a insertar:', data); // Agregar console.log para verificar datos
    
            await db.rawQuery(
                `INSERT INTO AbonoPagar (Fecha, CodProveedor, IdUsuario, SaldoCuenta, 
            Monto, SaldoActual, Anulado, CodMoneda, TipoCambio, MontoLetras, 
             FechaEntrada, Observacion, NumRecibo, FondoCaja, IdMov) 
                 VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                
                    data.Fecha,
                    data.CodProveedor,
                    data.IdUsuario,
                    data.SaldoCuenta,
                    data.Monto,
                    data.SaldoActual,
                    data.Anulado,
                    data.CodMoneda,
                    data.TipoCambio,
                    data.MontoLetras,
                    data.FechaEntrada,
                    data.Observacion,
                    data.NumRecibo,
                    data.FondoCaja,
                    data.IdMov
                    
                ]
            );
    
            return response.created({ message: 'Movimiento creado exitosamente' });
        } catch (error) {
            console.log('Error al insertar:', error); // Proporcionar un mensaje de error más claro
            return response.internalServerError({
                message: 'Error al crear el movimiento',
                error
            });
        }
    }

    async show({ params, response }: HttpContext) {
        try {
            const abono = await AbonoPagar.findOrFail(params.id)
            return response.ok(abono)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching record', error })
        }
    }

    async updateAnulado({ params, response }: HttpContext) {
        const abono = await AbonoPagar.findOrFail(params.id)
        abono.Anulado = true
        await abono.save()
        return response.ok(abono)
    }


}