import type { HttpContext } from '@adonisjs/core/http'
import Apartados from '#models/apartados'
import db from '@adonisjs/lucid/services/db'
export default class ApartadosController {

    async index({ response }: HttpContext) {
        try {
            const registros = await Apartados.all()
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching records', error })
        }
    }

    async store({ request, response }: HttpContext) {
        const data = request.only([
            'Napartado', 'CodCliente', 'NombreCliente', 'IdUsuario', 'Fecha', 'Vence', 'Anulado', 'Cancelado',
            'TipoCambio', 'CodMoneda', 'IdVendedor', 'Hora', 'SubTotal', 'TotalDescuento', 'TotalImpuesto',
            'SubTotalGravado', 'SubTotalExcento', 'Total'
        ]);

        try {
            console.log('Datos a insertar:', data); // Verificar los datos antes de insertar

            await db.rawQuery(
                `INSERT INTO Apartados (Napartado, CodCliente, NombreCliente, IdUsuario, Fecha, Vence, Anulado, Cancelado,
                TipoCambio, CodMoneda, IdVendedor, Hora, SubTotal, TotalDescuento, TotalImpuesto,
                SubTotalGravado, SubTotalExcento, Total) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    data.Napartado,
                    data.CodCliente,
                    data.NombreCliente,
                    data.IdUsuario,
                    data.Fecha,
                    data.Vence,
                    data.Anulado,
                    data.Cancelado,
                    data.TipoCambio,
                    data.CodMoneda,
                    data.IdVendedor,
                    data.Hora,
                    data.SubTotal,
                    data.TotalDescuento,
                    data.TotalImpuesto,
                    data.SubTotalGravado,
                    data.SubTotalExcento,
                    data.Total
                ]
            );

            return response.created({ message: 'Apartado creado exitosamente' });
        } catch (error) {
            console.log('Error al insertar:', error); // Proporcionar un mensaje de error más claro
            return response.internalServerError({
                message: 'Error al crear el apartado',
                error
            });
        }
    }

    async show({ params, response }: HttpContext) {
        try {
            const registros = await Apartados.find(params.id)
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching record', error })
        }
    }

    async updateAnulado({ params, response }: HttpContext) {
        const apartado = await Apartados.findOrFail(params.id)
        apartado.Anulado = true
        await apartado.save()
        return response.ok(apartado)
    }

    async updateCancelado({ params, response }: HttpContext) {
        const apartado = await Apartados.findOrFail(params.id)
        apartado.Cancelado = true
        await apartado.save()
        return response.ok(apartado)
    }

}