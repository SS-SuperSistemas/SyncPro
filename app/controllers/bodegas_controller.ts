import type { HttpContext } from '@adonisjs/core/http'
import Bodegas from '#models/bodegas'
export default class BodegasController {


    public async index({ response }: HttpContext) {
        try {
         console.log('hola')
         console.log(Bodegas)
            const registros = await Bodegas.all()
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({
                message: 'Error fetching bodegas',
                error
            })
        }

    }


    async store({ request, response }: HttpContext) {
        const data = request.only(['Id', 'Nombre', 'Observaciones', 'Principal', 'IdBodega'])
        try {
            const bodega = await Bodegas.create(data)
            return response.created(bodega)
        } catch (error) {
            return response.internalServerError({ message: 'Error creating bodega', error })
        }
    }


    async show({ params, response }: HttpContext) {
        try {
            const bodega = await Bodegas.findOrFail(params.id)
            return response.ok(bodega)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching bodega', error })
        }
    }
}
