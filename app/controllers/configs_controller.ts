 import type { HttpContext } from '@adonisjs/core/http'
import Config from '#models/config'
export default class ConfigsController {

    async index({ response }: HttpContext) {
        try {
            const registros = await Config.all()
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching records', error })
        }
    }

    // async store({ request, response }: HttpContext) {
    //     const data = request.only(['Id', 'CodMoneda', 'Iventa', 'Intereses', 'DiasCotizacion', 
    //         'DiasApartados', 'UsaMarca', 'TipoCosto', 'Barras', 'TipoRedondeo', 'unicaja', 
    //         'TipoEmpresa', 'BdUnica', 'CantidadVendidaTicket', 'ServicioOrden', 'CuentaApertura',
    //         'ProductoComun', 'ConservaTipoPrecio', 'TicketSize', 'MultiplesEstablecimientosFEL', 
    //         'CuentasBancarias'])
    //     try {
    //         const detalle = await Config.create(data)
    //         return response.created(detalle)
            
    //     } catch (error) {
    //         return response.internalServerError({ message: 'Error creating config', error })
    //     }
    // }

    async show({ params, response }: HttpContext) {
        try {
            const detalle = await Config.findOrFail(params.id)
            return response.ok(detalle)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching record', error })
        }
    }


    async update({ params, request, response }: HttpContext) {
        // Recoge solo los campos permitidos que deseas actualizar
        const data = request.only([
          'Id', 'CodMoneda', 'Iventa', 'Intereses', 'DiasCotizacion', 
          'DiasApartados', 'UsaMarca', 'TipoCosto', 'Barras', 'TipoRedondeo', 
          'unicaja', 'TipoEmpresa', 'BdUnica', 'CantidadVendidaTicket', 
          'ServicioOrden', 'CuentaApertura', 'ProductoComun', 
          'ConservaTipoPrecio', 'TicketSize', 'MultiplesEstablecimientosFEL', 
          'CuentasBancarias'
        ])
    
        try {
          // Busca el registro por ID
          const config = await Config.findOrFail(params.id)
    
          // Actualiza el registro con los datos enviados
          config.merge(data)
          
          // Guarda los cambios
          await config.save()
    
          // Retorna el registro actualizado
          return response.ok(config)
        } catch (error) {
          return response.internalServerError({ message: 'Error updating record', error })
        }
      }

}