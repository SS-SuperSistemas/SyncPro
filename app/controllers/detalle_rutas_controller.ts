import type { HttpContext } from '@adonisjs/core/http'
import DetalleRuta from '#models/detalle_ruta'

export default class DetalleRutasController {

    public async index({ response }: HttpContext) {
        try {
            const registros = await DetalleRuta.all()
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({
                message: 'Error fetching detail_routes'

            })
        }
    }


    public async store({ request, response }: HttpContext) {
        try {
            const data = request.only(['idRuta', 'CodCliente', 'estado', 'observaciones', 'idPedido', 'inicio', 'fin'])
            const registro = await DetalleRuta.create(data)
            return response.created(registro)
        } catch (error) {
            return response.internalServerError({ message: 'Error creating detail_route', error })
}

}


    public async show({ params, response }: HttpContext) {
        try {
            const registro = await DetalleRuta.findOrFail(params.id)
            return response.ok(registro)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching detail_route', error })
        }
    }


}