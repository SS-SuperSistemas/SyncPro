import type { HttpContext } from '@adonisjs/core/http'
import ArqueoCaja from '#models/arqueo_caja'


export default class ArqueoCajasController {

    async index({ response }: HttpContext) {
        try {
            const resgistros = await ArqueoCaja.all()
            return response.ok(resgistros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fettching records', error })
        }
    }

    async store({ request, response }: HttpContext) {
        const data = request.only(['Id', 'IdApertura', 'Fecha', 'IdUsuario', 'Observaciones', 'Anulado', 'Hora'])
        try {
            const registros = await ArqueoCaja.create(data)
            return response.created({ message: 'Record created successfully', registros })
        } catch (error) {
            return response.internalServerError({ message: 'Error creating record', error })
        }
    }

    async show({ params, response }: HttpContext) {
        try {
            const arqueo = await ArqueoCaja.findOrFail(params.id)
            return response.ok(arqueo)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching record', error })
        }
    }


    async updateAnulado({ params, response }: HttpContext) {
        const arqueo = await ArqueoCaja.findOrFail(params.id)
        arqueo.Anulado = true
        await arqueo.save()
        return response.ok(arqueo)
    }



}