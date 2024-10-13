import type { HttpContext } from '@adonisjs/core/http'
import Localidad from '#models/localidad'
export default class LocalidadsController {

    // async index({ response }: HttpContext) {
    //     try {
    //         const registros = await Localidad.all()
    //         return response.ok(registros)
    //     } catch (error) {
    //         return response.internalServerError({ message: 'Error fetching records', error })
    //     }
    // }

    async index({ response }: HttpContext) {
        try {
            const registros = await Localidad.all();
            // Convertir cada registro a un objeto plano y aplicar el mapeo
            const transformedRegistros = registros.map(localidad => this.mapKeys(localidad.toJSON()));
            return response.ok(transformedRegistros);
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching orders', error });
        }
    }
    /**
     * Mapea las claves del objeto a los nombres originales de la base de datos.
     */
    private mapKeys(data: Record<string, any>): Record<string, any> {
        return {
            id: data.id,
            Nombre: data.nombre, // Mapea a la forma original
        };
    }

    async store({ request, response }: HttpContext) {
        const data = request.only(['Id', 'Nombre'])
        try {
            const registros = await Localidad.create(data)
            return response.created({ message: 'Record created successfully', registros })
        } catch (error) {
            return response.internalServerError({ message: 'Error creating record', error })
        }
    }

    async show({ params, response }: HttpContext) {
        try {
            const localidad = await Localidad.findOrFail(params.id)
            const transformedRegistros = this.mapKeys(localidad.toJSON());
            return response.ok(transformedRegistros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching record', error })
        }
    }
}