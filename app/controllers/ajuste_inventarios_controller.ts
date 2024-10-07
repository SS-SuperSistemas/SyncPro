import type { HttpContext } from '@adonisjs/core/http'
import AjusteInventario from '#models/ajuste_inventario'
export default class AjusteInventariosController {
    async index({ response }: HttpContext) {
        try {
            const registros = await AjusteInventario.all()
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching records', error })
        }
    }

    async store({ request, response }: HttpContext) {
        const data = request.only([
            'Fecha',
            'Anula',
            'Observaciones',
            'IdUsuario',
            'CodMoneda',
            'TipoCambio',
        ])
        try {
            const registros = await AjusteInventario.create(data)
            return response.created({ message: 'Record created successfully', registros })
        } catch (error) {
            return response.internalServerError({ message: 'Error creating record', error })
        }
    }

    async show({ params, response }: HttpContext) {
        try {
            const registros = await AjusteInventario.find(params.id)
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching record', error })
        }
    }

    async updateAnulado({ params, response }: HttpContext) {
        const ajuste = await AjusteInventario.findOrFail(params.id)
        ajuste.Anula = true
        await ajuste.save()
        return response.ok(ajuste)
    }
}
