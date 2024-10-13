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
        const data = request.only(['Tipo', 'CodCliente', 'Fecha', 'SaldoAnt', 'Ajuste', 'SaldoAct', 'Anulado', 'IdUsuario', 
            'CodMoneda', 'Observaciones', 'TipoCambio', 'FechaEntrada', 'Hora'])
        try {
            const registros = await AjusteCobrar.create(data)
            return response.created({ message: 'Record created successfully', registros })
        } catch (error) {
            console.log(error)
            return response.internalServerError({ message: 'Error creating record', error })
        }
    }

    async show({ params, response }: HttpContext) {
        try {
            const registros = await AjusteCobrar.find(params.id)
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching record', error })
        }
    }

    async updateAnulado({ params, response }: HttpContext) {
        const ajuste = await AjusteCobrar.findOrFail(params.id)
        ajuste.Anulado = true
        await ajuste.save()
        return response.ok(ajuste)
    }

    


}