import type { HttpContext } from '@adonisjs/core/http'
import MovCajas from '#models/movcajas'
export default class MovCajasController {

    async index({ response }: HttpContext) {
        try {
            const registros = await MovCajas.all()
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching records', error })
        }
    }


    
    // async store({ request, response }: HttpContext) {
          
    //     const data = request.only(['Id', 'Entrada', 'Monto', 'CodMoneda', 'IdUsuario', 
    //         'Observaciones', 'Anulado', 'NumApertura', 'TipoCambio', 'Fecha', 
    //         'Hora', 'Idbanco'])
    //     try {
    //         const movimiento = await MovCajas.create(data)
    //         return response.created(movimiento)
    //     } catch (error) {

    //         console.log(error)
    //         return response.internalServerError({ message: 'Error creating record', error })
    //     }
    // }

    async store({ request, response }: HttpContext) {
        const data = request.only(['Entrada', 'Monto', 'CodMoneda', 'IdUsuario', 
            'Observaciones', 'Anulado', 'NumApertura', 'TipoCambio', 'Fecha', 
            'Hora', 'Idbanco']);
    
        // Validaciones adicionales (opcional)
        if (!data.Entrada || !data.Monto || !data.CodMoneda || !data.IdUsuario) {
            return response.badRequest({ message: 'Faltan campos requeridos' });
        }
    
        try {
            const movimiento = await MovCajas.create(data);
            return response.created(movimiento);
        } catch (error) {
            console.error("Error al crear el registro:", error);
            return response.internalServerError({ message: 'Error creating record', error });
        }
    }


    async show({ params, response }: HttpContext) {
        try {
            const movimiento = await MovCajas.findOrFail(params.id)
            return response.ok(movimiento)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching record', error })
        }
    }

    async updateAnulado({ params, response }: HttpContext) {
        const movimiento = await MovCajas.findOrFail(params.id)
        movimiento.Anulado = true
        await movimiento.save()
        return response.ok(movimiento)
    }

}


