import type { HttpContext } from '@adonisjs/core/http'
import Inventario from '#models/inventario'
import db from '@adonisjs/lucid/services/db';




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
        const data = request.only(['Codigo', 'Barras', 'Descripcion', 'DescripcionCorta', 'Presentacion', 'CodPresent', 'CodMarca', 'CodSubCategoria',
            'SubUbicacion', 'Minima', 'Media', 'Maxima', 'Existencia', 'Observaciones', 'CodMonedaCosto', 'CostoGeneral', 'CodMonedaVenta', 'IVenta', 'UtilidadA',
            'UtilidadB', 'UtilidadC', 'UtilidadD', 'PrecioA', 'PrecioB', 'PrecioC', 'PrecioD', 'PermiteDescuento', 'MaxDesc', 'FechaIngreso', 'PreguntaPrecio', 'Apartado', 'Inhabilitado', 'Servicio', 'CodProveedor',
            'Serie', 'PermiteComision', 'PorcComision', 'ProductoCompuesto', 'Consignado', 'Lote', 'CasaComercial', 'CodigoFabricante', 'NombreGenerico', 'Imagen', 'ImagenByte', 'CantMayoreo',
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
            console.log(error)
            return response.internalServerError({ message: 'Error fetching inventory', error })
        }
    }

    async updateInhabilitado({ params, response }: HttpContext) {
        const inventario = await Inventario.findOrFail(params.id)
        inventario.Inhabilitado = true
        await inventario.save()
        return response.ok(inventario)
    }

    async obtenerInventario({ response }: HttpContext) {
        try {
            const resultado = await db.rawQuery(
                `SELECT 
                    INVENTARIO.Codigo,
                    INVENTARIO.Barras,
                    INVENTARIO.Descripcion,
                    EXISTENCIABODEGAS.ExistenciaTotal AS Existencia,
                    INVENTARIO.COSTOGENERAL AS Costo,
                    INVENTARIO.PRECIOA AS PrecioFinal,
                    INVENTARIO.PRECIOB,
                    INVENTARIO.PRECIOC,
                    INVENTARIO.PRECIOD,
                    MARCAS.NOMBREMARCA AS Marcas,
                    CONCAT(Categorias.categoria, ' / ', SubCategorias.SubCategoria) AS Categoria_SubCategoria,
                    INVENTARIO.Observaciones
                FROM 
                    INVENTARIO
                INNER JOIN 
                    EXISTENCIABODEGAS ON INVENTARIO.CODIGO = EXISTENCIABODEGAS.CODARTICULO
                INNER JOIN 
                    MARCAS ON INVENTARIO.CODMARCA = MARCAS.ID
                INNER JOIN 
                    SubCategorias ON SubCategorias.Id = INVENTARIO.CodSubCategoria
                INNER JOIN 
                    Categorias ON Categorias.Codigo = SubCategorias.CodCategoria
                WHERE 
                    INHABILITADO = 0`
            );

            return response.ok(resultado); // Devuelve el resultado de la consulta

        } catch (error) {
            console.error('Error al obtener el inventario:', error); // Asegúrate de que este mensaje se imprima
            return response.internalServerError({ message: 'Error al obtener el inventario', error });
        }
    }

    async checkStock({ request, response }: HttpContext) {
        const codigos: string[] = request.input('codigos')

        if (!Array.isArray(codigos) || codigos.length === 0) {
            return response.badRequest({ message: 'Debes enviar un arreglo de códigos de productos' })
        }

        try {
            let existencias = []
            if (codigos.length > 0) {
                const placeholders = codigos.map((codigo) => `${codigo}`).join(',')
                const query = `SELECT codigo, existencia FROM vInventario WHERE codigo IN (${placeholders})`

                existencias = await db.rawQuery(query)
            }

            if (existencias.length === 0) {
                return response.notFound({
                    message: 'No se encontraron productos para los códigos proporcionados',
                })
            }

            return response.ok({ productos: existencias })
        } catch (error) {
            return response.internalServerError({
                message: 'Error al consultar las existencias',
                error: error.message,
            })
        }
    }
}