import type { HttpContext } from '@adonisjs/core/http'
import Proveedores from '#models/proveedores'

export default class ProveedoresController {


    async index({ response }: HttpContext) {
        try {
            const registros = await Proveedores.all()
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({
                message: 'Error fetching suppliers',
                error
            })
        }
    }


    async store({ request, response }: HttpContext) {
        const data = request.only(['CodProveedor', 'Cedula', 'Nombre', 'Observaciones', 'Telefono1', 'Telefono2', 'Fax1 ', 'Email', 'Direccion', 'MontoCredito', 'Plazo', 'InHabilitado', 'CodMoneda', 'Contacto'])
        try {
            const proveedor = await Proveedores.create(data)
            return response.created(proveedor)
        } catch (error) {
            return response.internalServerError({ message: 'Error creating supplier', error })
        }
    }


    async show({ params, response }: HttpContext) {
        try {
            const proveedor = await Proveedores.findOrFail(params.id)
            return response.ok(proveedor)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching supplier', error })
        }
    }

    async updateInHabilitado({ params, request, response }: HttpContext) {
        const data = request.only(['InHabilitado'])
        try {
            const proveedor = await Proveedores.findOrFail(params.id)
            proveedor.merge(data)
            await proveedor.save()
            return response.ok(proveedor)
        } catch (error) {
            return response.internalServerError({ message: 'Error updating supplier', error })
        }
    }


}