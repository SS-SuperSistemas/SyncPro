import type { HttpContext } from '@adonisjs/core/http'
import Ruta from "#models/ruta";
export default class RutasController{


    async index({ response }: HttpContext) {
        try {
            const registros = await Ruta.all()
            return response.ok(registros)
        } catch (error) {
            console.log(error)
            console.log('Error fetching routes')
            return response.internalServerError({ message: 'Error fetching routes', 
                error })
        }
    }

    async store({ request, response }: HttpContext) {
        const data = request.only(['Id', 'idVendedor', 'idLocalidad', 'FechaInicio', 'FechaFin', 'Anulado'])
        try {
            const ruta = await Ruta.create(data)
            return response.created(ruta)
        } catch (error) {
            return response.internalServerError({ message: 'Error creating route', error })
        }
    }

    async show({ params, response }: HttpContext) {
        try {
            const ruta = await Ruta.findOrFail(params.id)
            return response.ok(ruta)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching route', error })
        }
    }

    async updateAnulado({ params, response }: HttpContext) {
        const ruta = await Ruta.findOrFail(params.id)
        ruta.Anulado = true
        await ruta.save()
        return response.ok(ruta)
    }
}