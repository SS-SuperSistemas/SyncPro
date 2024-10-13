import type { HttpContext } from '@adonisjs/core/http'
import Vendedores from '#models/vendedores'
export default class VendedoresController {



// async index({ response }: HttpContext) {
//     try {
//         const registros = await Vendedores.all()
//         return response.ok(registros)
//     } catch (error) {
//         return response.internalServerError({ message: 'Error fetching sales', error })
//     }
// }

async index({ response }: HttpContext) {
    try {
        const registros = await Vendedores.all();
        // Convertir cada registro a un objeto plano y aplicar el mapeo
        const transformedRegistros = registros.map(vendedores => this.mapKeys(vendedores.toJSON()));
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
        Cedula: data.cedula, // Mapea a la forma original
        Nombre: data.nombre,
        Telefono: data.telefono,
        Celular: data.celular,
        Direccion: data.direccion,
        Comision: data.comision,
        Inhabilitado: data.inhabilitado,
        Correo: data.correo,
        Comision2: data.comision2,
        DiasdeGracia: data.diasdeGracia,
        TipoComision: data.tipoComision,
        Meta: data.meta,
        PorcXMeta: data.porcXMeta,
        PorProdoPorc: data.porProdoPorc,
    };
}

async store({ request, response }: HttpContext) {
    const data = request.only(['Id', 'Cedula', 'Nombre','Telefono', 'Celular', 'Direccion', 'Comision', 'Inhabilitado', 'Correo', 'Comision2', 'DiasdeGracia', 'TipoComision', 'Meta', 'PorcXMeta', 'PorProdoPorc'
    ])
    try {
        const vendedor = await Vendedores.create(data)
        return response.created(vendedor)
    } catch (error) {
        return response.internalServerError({ message: 'Error creating sale', error })
    }
}

async show({ params, response }: HttpContext) {
    try {
        const vendedor = await Vendedores.findOrFail(params.id)
        const transformedRegistros = this.mapKeys(vendedor.toJSON());
            return response.ok(transformedRegistros)
    } catch (error) {
        return response.internalServerError({ message: 'Error fetching sale', error })
    }
}

    async updateInhabilitado({ params, response }: HttpContext) {
        const vendedor = await Vendedores.findOrFail(params.id)
        vendedor.Inhabilitado = true
        await vendedor.save()
        return response.ok(vendedor)
    }   

}

