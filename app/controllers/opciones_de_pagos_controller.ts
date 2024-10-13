import type { HttpContext } from '@adonisjs/core/http'
import OpcionesDePago from '#models/opciones_de_pago'
export default class OpcionesDePagosController {

    async index({ response }: HttpContext) {
        try {
            const registros = await OpcionesDePago.all()
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching inventory', error })
        }
    }

    async store({ request, response }: HttpContext) {
        const data = request.only(['Documento', 'IdRecibo', 'TipoDocumento', 'MontoPago', 'FormaPago', 'Denominacion', 'IdUsuario', 'CodMoneda', 
            'TipoCambio', 'Fecha', 'Napertura', 'Vuelto', 'Anulado'])
        try {
            const registros = await OpcionesDePago.create(data)
            return response.created(registros)
        } catch (error) {
            return response.internalServerError({ message: 'Error creating inventory', error })
        }
    }

    async show({ params, response }: HttpContext) {
        try {
            const registros = await OpcionesDePago.findOrFail(params.id)
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching inventory', error })
        }
    }

    async updateAnulado({ params, response }: HttpContext) {
        const registros = await OpcionesDePago.findOrFail(params.id)
        registros.Anulado = true
        await registros.save()
        return response.ok(registros)
    }


}