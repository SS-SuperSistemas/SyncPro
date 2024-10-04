import type { HttpContext } from '@adonisjs/core/http'
import Inventario from '#models/inventario'



export default class InventariosController {

    // async index({ response }: HttpContext) {
    //     try {
    //         const registros = await Inventario.all()
    //         return response.ok(registros)
    //     } catch (error) {
    //         return response.internalServerError({ message: 'Error fetching inventory', error })
    //     }

    // }

    async index({ response }: HttpContext) {
        try {
            const registros = await Inventario.all();
            // Convertir cada registro a un objeto plano y aplicar el mapeo
            const transformedRegistros = registros.map(inventario => this.mapKeys(inventario.toJSON()));
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
            Codigo: data.codigo,
            Barras: data.barras, // Mapea a la forma original
            Descripcion: data.descripcion,
            DescripcionCorta: data.descripcionCorta,
            Presentacion: data.presentacion,
            CodPresent: data.codPresent,
            CodMarca: data.codMarca,
            CodSubCategoria: data.codSubCategoria,
            SubUbicacion: data.subUbicacion,
            Minima: data.minima,
            Media: data.media,
            Maxima: data.maxima,
            Existencia: data.existencia,
            Observaciones: data.observaciones,
            CodMonedaCosto: data.codMonedaCosto,
            CostoGeneral: data.costoGeneral,
            CodMonedaVenta: data.codMonedaVenta,
            IVenta: data.iVenta,
            UtilidadA: data.utilidadA,
            UtilidadB: data.utilidadB,
            UtilidadC: data.utilidadC,
            UtilidadD: data.utilidadD,
            PrecioA: data.precioA,
            PrecioB: data.precioB,
            PrecioC: data.precioC,
            PrecioD: data.precioD,
            PermiteDescuento: data.permiteDescuento,
            MaxDesc: data.maxDesc,
            FechaIngreso: data.fechaIngreso,
            PreguntaPrecio: data.preguntaPrecio,
            Apartado: data.apartado,
            Inhabilitado: data.inhabilitado,
            Servicio: data.servicio,
            CodProveedor: data.codProveedor,
            Serie: data.serie,
            PermiteComision: data.permiteComision,
            PorcComision: data.porcComision,
            ProductoCompuesto: data.productoCompuesto,
            Consignado: data.consignado,
            Lote: data.lote,
            CasaComercial: data.casaComercial,
            CodigoFabricante: data.codigoFabricante,
            NombreGenerico: data.nombreGenerico,
            Imagen: data.imagen,
            CantMayoreo: data.cantMayoreo,
            PrecioMayoreo: data.precioMayoreo,
            CantidadMayoreo: data.cantidadMayoreo,
            PrecioAMayoreo: data.precioAMayoreo,
            PrecioBMayoreo: data.precioBMayoreo,
            PrecioCMayoreo: data.precioCMayoreo,
            PrecioDMayoreo: data.precioDMayoreo,
            Facturable: data.facturable,
            PaqPorFardo: data.paqPorFardo,
            PrecioPorFardo: data.precioPorFardo,
            Editable: data.editable,
            Equivalencia1: data.equivalencia1,
            Equivalencia2: data.equivalencia2,
            TipoComision: data.tipoComision,
            SubUbicacion2: data.subUbicacion2,
            PorcDescuento: data.porcDescuento,
            PrecioRef: data.precioRef,
            PreguntaCantidad: data.preguntaCantidad,
            NoPermiteAjuste: data.noPermiteAjuste,
            PermiteVentaNegativa: data.permiteVentaNegativa


        };
    }

    async store({ request, response }: HttpContext) {
        const data = request.only(['Codigo', 'Barras', 'IdBodega', 'Descripcion', 'DescripcionCorta', 'Presentacion', 'CodPresent', 'CodMarca', 'CodSubCategoria',
            'SubUbicacion', 'Minima', 'Media', 'Maxima', 'Existencia', 'Observaciones', 'CodMonedaCosto', 'CostoGeneral', 'CodMonedaVenta', 'IVenta', 'UtilidadA',
            'UtilidadB', 'PrecioC', 'PrecioD', 'PermiteDescuento', 'MaxDesc', 'FechaIngreso', 'PreguntaPrecio', 'Apartado', 'Inhabilitado', 'Servicio', 'CodProveedor',
            'Serie', 'PermiteComision', 'PorcComision', 'ProductoCompuesto', 'Consignado', 'Lote', 'CasaComercial', 'CodigoFabricante', 'NombreGenerico', 'Imagen', 'CantMayoreo',
            'PrecioMayoreo', 'CantidadMayoreo', 'PrecioAMayoreo', 'PrecioBMayoreo', 'PrecioCMayoreo', 'PrecioDMayoreo', 'Facturable', 'PaqPorFardo', 'PrecioPorFardo', 'Editable',
            'Equivalencia1', 'Equivalencia2', 'TipoComision', 'SubUbicacion2', 'PorcDescuento', 'PrecioRef', 'PreguntaCantidad', 'NoPermiteAjuste', 'PermiteVentaNegativa'
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
            const transformedRegistros = this.mapKeys(inventario.toJSON());
            return response.ok(transformedRegistros)
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

    async getCustomInventory({ response }: HttpContext) {
        try {
            const registros = await Inventario.query()
                .preload('existencias') // Cargar existencias
                .preload('marca') // Cargar marca
                .preload('subCategoria') // Cargar subcategoría
                .where('inhabilitado', false)
                .select('codigo', 'barras', 'descripcion', 'inhabilitado');

            const transformedRegistros = registros.map(inventario => ({
                Codigo: inventario.Codigo,
                Barras: inventario.Barras,
                Descripcion: inventario.Descripcion,
                Existencia: inventario.existencias.reduce((total, existencia) => total + existencia.ExistenciaTotal, 0), // Suponiendo que tienes un campo `existenciaTotal` en ExistenciaBodega
                Costo: inventario.CostoGeneral, // Asegúrate de que este campo esté disponible
                PrecioFinal: inventario.PrecioA, // Asegúrate de que este campo esté disponible
                Marcas: inventario.marca?.NombreMarca, // Asegúrate de que este campo esté disponible
                Categoria_SubCategoria: `${inventario.subCategoria?.categoria} / ${inventario.subCategoria?.SubCategoria}`, // Asegúrate de que estos campos estén disponibles
                Observaciones: inventario.Observaciones // Asegúrate de que este campo esté disponible
            }));

            return response.ok(transformedRegistros);
        } catch (error) {
            console.error('Error fetching custom inventory:', error);
            return response.internalServerError({ message: 'Error fetching custom inventory', error });
        }
    }

}