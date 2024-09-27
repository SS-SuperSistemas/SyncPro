import type { HttpContext } from '@adonisjs/core/http'
import Modulo from '#models/modulo'


export default class ModulosController {

    async index({ response }: HttpContext) {
        try {
            const registros = await Modulo.all()
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching modules', error })
        }
    }


    async store({ request, response }: HttpContext) {
        const data = request.only(['Id', 'Nombre', 'NombreInterno', 'Software', 'Grupo'])
        try {
            const modulo = await Modulo.create(data)
            return response.created(modulo)
        } catch (error) {
            return response.internalServerError({ message: 'Error creating module', error })
        }
    }

    async show({ params, response }: HttpContext) {
        try {
            const modulo = await Modulo.findOrFail(params.id)
            return response.ok(modulo)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching module', error })
        }
    }

    


}