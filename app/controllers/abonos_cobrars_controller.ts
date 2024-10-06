import type { HttpContext } from '@adonisjs/core/http'
import AbonosCobrar from '#models/abonos_cobrar'
export default class AbonosCobrarsController {

    async index({ response }: HttpContext) {
        try {
            const registros = await AbonosCobrar.all()
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching records', error })
        }
    }

    async store({ request, response }: HttpContext) {
        const data = request.only(['IdRecibo', 'NumRecibo', 'CodCliente', 'SaldoAnt', 'Abono', 'SaldoAct', 'Fecha', 'Observaciones', 'Anulado', 'IdUsuario', 'CodMoneda', 'TipoCambio', 'Hora'])
        try {
            const registros = await AbonosCobrar.create(data)
            return response.created({ message: 'Record created successfully', registros })
        } catch (error) {
            return response.internalServerError({ message: 'Error creating record', error })
        }
    }

    async show({ params, response }: HttpContext) {
        try {
            const abono = await AbonosCobrar.findOrFail(params.id)
            return response.ok(abono)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching record', error })
        }
    }

    async updateAnulado({ params, response }: HttpContext) {
        const abono = await AbonosCobrar.findOrFail(params.id)
        abono.Anulado = true
        await abono.save()
        return response.ok(abono)
    }




}