import type { HttpContext } from '@adonisjs/core/http'
import AjustesPagar from '#models/ajustes_pagar'
export default class AjustesPagarsController {

    async index({ response }: HttpContext) {
        try {
            const registros = await AjustesPagar.all()
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching records', error })
        }
    }

    async store({ request, response }: HttpContext) {
        try {
            const data = request.only(['Tipo', 'CodProveedor', 'Fecha', 'SaldoAnt', 'Monto', 'SaldoAct', 'Observaciones', 'Anulado', 'IdUsuario',
                'CodMoneda', 'FechaEntrada', 'TipoCambio', 'NumRecibo'])
            const registros = await AjustesPagar.create(data)
            return response.created({ message: 'Record created successfully', registros })
        } catch (error) {
            return response.internalServerError({ message: 'Error creating record', error })
        }
    }

    async show({ params, response }: HttpContext) {
        try {
            const registros = await AjustesPagar.find(params.id)
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching record', error })
        }
    }

    async updateAnulado({ params, response }: HttpContext) {
        const ajuste = await AjustesPagar.findOrFail(params.id)
        ajuste.Anulado = true
        await ajuste.save()
        return response.ok(ajuste)
    }



}