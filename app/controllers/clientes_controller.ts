import type { HttpContext } from '@adonisjs/core/http'
import Cliente from '#models/cliente'

export default class ClientesController {

    async index({ response }: HttpContext) {
        try {
            const registros = await Cliente.all()
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching clients', error })
        }
    }

    async store({ request, response }: HttpContext) {
        const data = request.only(['CodCliente', 'Cedula', 'Nombre', 'Observaciones', 'Telefono1', 'Telefono2', 'Celular', 'Email', 'Direccion', 'Credito', 'LimiteCredito','PlazoCredito','TipoPrecio','Restriccion','CodMoneda','Moroso','InHabilitado','FechaIngreso','FechaNacimiento','IdLocalidad','IdAgente','PermiteDescuento','Descuento','MaxDescuento','Exonerar','Codigo'])
        try {
            const cliente = await Cliente.create(data)
            return response.created(cliente)
        } catch (error) {
            return response.internalServerError({ message: 'Error creating client', error })
        }
    }

    async show({ params, response }: HttpContext) {
        try {
            const cliente = await Cliente.findOrFail(params.id)
            return response.ok(cliente)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching client', error })
        }
    }

    async updateInhabilitado({ params, response }: HttpContext) {
        const cliente = await Cliente.findOrFail(params.id)
        cliente.InHabilitado = true
        await cliente.save()
        return response.ok(cliente)
    }
    

}