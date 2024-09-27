import type { HttpContext } from '@adonisjs/core/http'
import Inventario from '#models/inventario'

export default class InventariosController {

    async index({ response }: HttpContext) {
        try {
            const registros = await Inventario.all()
            return response.ok(registros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching inventory', error })
        }

    }

    async store({ request, response }: HttpContext) {
        const data = request.only(['Codigo', 'Barras', 'IdBodega', 'Descripcion', 'DescripcionCorta', 'Presentacion', 'CodPresent', 'CodMarca', 'CodSubCategoria', 'SubUbicacion', 'Minima', 'Media', 'Maxima', 'Existencia', 'Observaciones', 'CodMonedaCosto', 'CostoGeneral', 'CodMonedaVenta', 'IVenta', 'UtilidadA', 'UtilidadB', 'PrecioC', 'PrecioD', 'PermiteDescuento', 'MaxDesc', 'FechaIngreso', 'PreguntaPrecio', 'Apartado', 'Inhabilitado', 'Servicio', 'CodProveedor', 'Serie', 'PermiteComision', 'PorcComision', 'ProductoCompuesto', 'Consignado', 'Lote', 'CasaComercial', 'CodigoFabricante', 'NombreGenerico', 'Imagen', 'CantMayoreo', 'PrecioMayoreo', 'CantidadMayoreo', 'PrecioAMayoreo', 'PrecioBMayoreo', 'PrecioCMayoreo', 'PrecioDMayoreo', 'Facturable', 'PaqPorFardo', 'PrecioPorFardo', 'Editable', 'Equivalencia1', 'Equivalencia2', 'TipoComision', 'SubUbicacion2', 'PorcDescuento', 'PrecioRef', 'PreguntaCantidad', 'NoPermiteAjuste', 'PermiteVentaNegativa'
        ])

        try {
            const inventario = await Inventario.create(data)
            return response.created(inventario)
        } catch (error) {
            return response.internalServerError({ message: 'Error creating inventory', error })
        }



    }

    async show({ params, response }: HttpContext) {
        try {
            const inventario = await Inventario.findOrFail(params.id)
            return response.ok(inventario)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching inventory', error })
        }
    }


    async updateInhabilitado({ params, response }: HttpContext) {
        const inventario = await Inventario.findOrFail(params.id)
        inventario.Inhabilitado = true
        await inventario.save()
        return response.ok(inventario)
    }

}