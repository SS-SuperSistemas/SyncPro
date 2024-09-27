import type { HttpContext } from '@adonisjs/core/http'
import Vendedores from '#models/vendedores'
export default class VendedoresController {



async index({ response }: HttpContext) {
    try {
        const registros = await Vendedores.all()
        return response.ok(registros)
    } catch (error) {
        return response.internalServerError({ message: 'Error fetching sales', error })
    }
}

async store({ request, response }: HttpContext) {
    const data = request.only(['Id', 'Cedula', 'Nombre', 'Celular', 'Direccion', 'Comision', 'Inhabilitado', 'Correo', 'Comision2', 'DiasdeGracia', 'TipoComision', 'Meta', 'PorcXMeta', 'PorProdoPorc'
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
        return response.ok(vendedor)
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

