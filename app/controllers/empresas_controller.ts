import type { HttpContext } from '@adonisjs/core/http'
import Empresa from '#models/empresa'

export default class EmpresasController {

   async index({ response }: HttpContext) {
    try {
        const registros = await Empresa.all()
        return response.ok(registros)
    } catch (error) {
        return response.internalServerError({ message: 'Error fetching factories', error })
    }
}
 async store({ request, response }: HttpContext) {  
    const data = request.only(['NombreComercial', 'Telefono1', 'Telefono2', 'Fax', 'Fax2', 'Direccion', 'Frase', 'Email', 'Web', 'Facebook', 'Info', 'FEL', 'FELCliente', 'FELUsuario','FELPassword','EstablecimientoFEl','ServidorFEL','RegimenFEL','FELPasswordNIT','RegimenISR','AgenteRetenedor'
    ])
    try {
        const empresa = await Empresa.create(data)
        return response.created(empresa)
    } catch (error) {
        return response.internalServerError({ message: 'Error creating factory', error })
    }
}

async show({ params, response }: HttpContext) {
    try {
        const empresa = await Empresa.findOrFail(params.id)
        return response.ok(empresa)
    } catch (error) {
        return response.internalServerError({ message: 'Error fetching factory', error })
    }
}
    
}