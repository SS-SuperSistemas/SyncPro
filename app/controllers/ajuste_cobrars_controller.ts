import type { HttpContext } from '@adonisjs/core/http'
import AjusteCobrar from '#models/ajuste_cobrar'

export default class AjusteCobrarsController {

    async index({ response }: HttpContext) {
        try {
            const registros = await AjusteCobrar.all()
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching records', error })
        }
    }

    async store({ request, response }: HttpContext) {
        const data = request.only(['IDAjuste', 'Tipo', 'CodCliente', 'Fecha', 'SaldoAnt', 'Ajuste', 'SaldoAct', 'Anulado', 'IdUsuario', 
            'CodMoneda', 'Observaciones', 'TipoCambio', 'FechaEntrada', 'Hora'])
        try {
            const registros = await AjusteCobrar.create(data)
            return response.created({ message: 'Record created successfully', registros })
        } catch (error) {
            return response.internalServerError({ message: 'Error creating record', error })
        }
    }

    


}