import type { HttpContext } from '@adonisjs/core/http'
import Ventas from '#models/venta'

export default class VentasController {
    async index({ response }: HttpContext) {
        try {
            const registros = await Ventas.all()
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching sales', error })
        }
    }

    async store({ request, response }: HttpContext) {
        const data = request.only(['Id', 'Nfactura', 'Tipo', 'Fecha', 'Vence', 'CodCliente', 'NombreCliente', 'IdUsuario', 'Anulado', 'FacturaCancelado', 'NumApertura', 'CodMoneda', 'TipoCambio', 'Exonerar', 'Observaciones', 'IdVendedor', 'Apartado', 'Hora', 'SubTotal', 'TotalDescuento', 'TotalImpuesto', 'SubTotalGravado', 'SubTotalExcento', 'Total', 'IdBodega', 'AutorizacionFEL', 'NumeroFEL', 'SerieFEL', 'EmisionFEL', 'QR', 'TotalLetras', 'NoAbonos', 'MontoAbonos', 'Contacto', 'TelContacto', 'AnuladoPor', 'NombrePaciente', 'NITFacturado', 'NombreFacturado', 'DireccionFacturado', 'DPI', 'Recibido', 'Guia', 'NoGuia', 'Notas', 'IdTransporte', 'CantidadCuotas'])
        try {
            const venta = await Ventas.create(data)
            return response.created(venta)
        } catch (error) {
            return response.internalServerError({ message: 'Error creating sale', error })
        }
    }

    async show({ params, response }: HttpContext) {
        try {
            const venta = await Ventas.findOrFail(params.id)
            return response.ok(venta)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching sale', error })
        }
    }

    async updateAnulado({ params, response }: HttpContext) {
        const venta = await Ventas.findOrFail(params.id)
        venta.Anulado = true
        await venta.save()
        return response.ok(venta)
    }




}

