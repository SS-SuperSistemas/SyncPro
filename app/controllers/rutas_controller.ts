import type { HttpContext } from '@adonisjs/core/http'
import Ruta from "#models/ruta";
export default class RutasController {


    // async index({ response }: HttpContext) {
    //     try {
    //         const registros = await Ruta.all()
    //         return response.ok(registros)
    //     } catch (error) {
    //         console.log(error)
    //         console.log('Error fetching routes')
    //         return response.internalServerError({ message: 'Error fetching routes', 
    //             error })
    //     }
    // }

    async index({ response }: HttpContext) {
        try {
            const registros = await Ruta.all();
            // Convertir cada registro a un objeto plano y aplicar el mapeo
            const transformedRegistros = registros.map(rutas => this.mapKeys(rutas.toJSON()));
            return response.ok(transformedRegistros);
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching orders', error });
        }
    }

    private mapKeys(data: Record<string, any>): Record<string, any> {
        return {
            Id: data.id,
            idVendedor: data.idVendedor, // Mapea a la forma original
            idLocalidad: data.idLocalidad,
            fechaInicio: data.fechaInicio,
            fechaFin: data.fechaFin,
            anulado: data.anulado
        };
    }

    async store({ request, response }: HttpContext) {
        const data = request.only(['idVendedor', 'idLocalidad', 'fechaInicio', 'fechaFin', 'anulado'])
        try {
            const ruta = await Ruta.create(data)
            return response.created(ruta)
        } catch (error) {
            console.log(error)
            return response.internalServerError({ message: 'Error creating route', error })
        }
    }

    async show({ params, response }: HttpContext) {
        try {
            const registro = await Ruta.findOrFail(params.id)
            const transformedRegistros = this.mapKeys(registro.toJSON());
            return response.ok(transformedRegistros)
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