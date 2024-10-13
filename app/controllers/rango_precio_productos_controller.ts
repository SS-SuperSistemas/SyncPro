import type { HttpContext } from '@adonisjs/core/http'
import RangoPrecio from '#models/rango_precio_producto'

export default class RangoPrecioProductosController {

    // async index ({response}: HttpContext) {
    //     try {
    //         const registros = await RangoPrecio.all()
    //         return response.ok(registros)
    //     } catch (error) {
    //         return response.internalServerError({ message: 'Error fetching price ranges', error })
    //     }
    // }

    async index({ response }: HttpContext) {
        try {
            const registros = await RangoPrecio.all();
            // Convertir cada registro a un objeto plano y aplicar el mapeo
            const transformedRegistros = registros.map(rangoprecio => this.mapKeys(rangoprecio.toJSON()));
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
            Id: data.id,
            CodProducto: data.codProducto, // Mapea a la forma original
            CantidadInicio: data.cantidadInicio,
            CantidadFinal: data.cantidadFinal,
            Precio: data.precio,
        };
    }

    async store({request, response}: HttpContext) {
        const data = request.only(['Id', 'CodProducto', 'CantidadInicio','CantidadFinal', 'Precio'])
        try {
            const rango = await RangoPrecio.create(data)
            return response.created(rango)
        } catch (error) {
            return response.internalServerError({ message: 'Error creating price range', error })
        }
    }

    async show({ params, response }: HttpContext) {
        try {
            const rango = await RangoPrecio.findOrFail(params.id)
            const transformedRegistros = this.mapKeys(rango.toJSON());
            return response.ok(transformedRegistros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching price range', error })
        }
    }


}