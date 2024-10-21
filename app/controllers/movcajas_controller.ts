import type { HttpContext } from '@adonisjs/core/http'
import MovCajas from '#models/movcajas'
import db from '@adonisjs/lucid/services/db'

export default class MovCajasController {

    async index({ response }: HttpContext) {
        try {
            const registros = await MovCajas.all()
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching records', error })
        }
    }


    async store({ request, response }: HttpContext) {
        const data = request.only([
            'Entrada', 'Monto', 'CodMoneda', 'IdUsuario',
            'Observaciones', 'Anulado', 'NumApertura', 'TipoCambio',
            'Fecha', 'Hora', 'IdBanco' // Cambié Idbanco a IdBanco
        ]);

        try {
            console.log('Datos a insertar:', data); // Agregar console.log para verificar datos

            await db.rawQuery(
                `INSERT INTO MovCajas (Entrada, Monto, CodMoneda, IdUsuario, Observaciones, Anulado, 
                NumApertura, TipoCambio, Fecha, Hora, IdBanco) 
                VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [

                    data.Entrada,
                    data.Monto,
                    data.CodMoneda,
                    data.IdUsuario,
                    data.Observaciones,
                    data.Anulado,
                    data.NumApertura,
                    data.TipoCambio,
                    data.Fecha,
                    data.Hora,
                    data.IdBanco // Cambié Idbanco a IdBanco
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
            const movimiento = await MovCajas.findOrFail(params.id)
            return response.ok(movimiento)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching record', error })
        }
    }

    async updateAnulado({ params, response }: HttpContext) {
        const movimiento = await MovCajas.findOrFail(params.id)
        movimiento.Anulado = true
        await movimiento.save()
        return response.ok(movimiento)
    }

}


