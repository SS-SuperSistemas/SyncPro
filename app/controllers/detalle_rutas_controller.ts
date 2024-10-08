import type { HttpContext } from '@adonisjs/core/http'
import DetalleRuta from '#models/detalle_ruta'

export default class DetalleRutasController {

    // public async index({ response }: HttpContext) {
    //     try {
    //         const registros = await DetalleRuta.all()
    //         return response.ok(registros)
    //     } catch (error) {
    //         return response.internalServerError({
    //             message: 'Error fetching detail_routes'

    //         })
    //     }
    // }

    async index({ response }: HttpContext) {
        try {
            const registros = await DetalleRuta.all();
            // Convertir cada registro a un objeto plano y aplicar el mapeo
            const transformedRegistros = registros.map(detalleruta => this.mapKeys(detalleruta.toJSON()));
            return response.ok(transformedRegistros);
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching orders', error });
        }
    }

    private mapKeys(data: Record<string, any>): Record<string, any> {
        return {
            Id: data.id,
            idRuta: data.idRuta, // Mapea a la forma original
            CodCliente: data.codCliente,
            estado: data.estado,
            observaciones: data.observaciones,
            idPedido: data.idPedido,
            inicio: data.inicio,
            fin: data.fin,
        };
    }


    public async store({ request, response }: HttpContext) {
        try {
            const data = request.only(['idRuta', 'CodCliente', 'estado', 'observaciones', 'idPedido', 'inicio', 'fin'])
            const registro = await DetalleRuta.create(data)
            return response.created(registro)
        } catch (error) {
            console.log(error)
            return response.internalServerError({ message: 'Error creating detail_route', error })
        }

    }


    public async show({ params, response }: HttpContext) {
        try {
            const registro = await DetalleRuta.findOrFail(params.id)
            const transformedRegistros = this.mapKeys(registro.toJSON());
            return response.ok(transformedRegistros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching detail_route', error })
        }
    }


}