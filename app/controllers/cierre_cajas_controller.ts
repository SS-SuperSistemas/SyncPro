import type { HttpContext } from '@adonisjs/core/http'
import CierreCaja from '#models/cierre_caja'
export default class CierreCajasController {

    async index({ response }: HttpContext) {
        try {
            const registros = await CierreCaja.all()
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching records', error })
        }
    }

    async store({ request, response }: HttpContext) {
        const data = request.only(['NumeroCierre', 'IdApertura', 'Fecha', 'IdUsuario', 'Anulado', 'Hora'])
        try {
            const registros = await CierreCaja.create(data)
            return response.created({ message: 'Record created successfully', registros })
        } catch (error) {
            return response.internalServerError({ message: 'Error creating record', error })
        }
    }

    async show({ params, response }: HttpContext) {
        try {
            const cierre = await CierreCaja.findOrFail(params.id)
            return response.ok(cierre)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching record', error })
        }
    }


    async updateAnulado({ params, response }: HttpContext) {
        const cierre = await CierreCaja.findOrFail(params.id)
        cierre.Anulado = true
        await cierre.save()
        return response.ok(cierre)
    }
}