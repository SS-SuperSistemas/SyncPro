import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class Inventario extends BaseModel {

  static table = 'Inventario' 


  @column({ isPrimary: true, columnName: 'Codigo' })
  declare Codigo: number

  @column({ columnName: 'Barras' })
  declare Barras: number

  @column({ columnName: 'IdBodega' })
  declare IdBodega: number

  @column({ columnName: 'Descripcion' })
  declare Descripcion: String

  @column({ columnName: 'DescripcionCorta' })
  declare DescripcionCorta: String

  @column({ columnName: 'Presentacion' })
  declare Presentacion: number

  @column({ columnName: 'CodPresent' })
  declare CodPresent: number

  @column({ columnName: 'CodMarca' })
  declare CodMarca: Number

  @column({ columnName: 'CodSubCategoria' })
  declare CodSubCategoria: Number

  @column({ columnName: 'SubUbicacion' })
  declare SubUbicacion: Number

  @column({ columnName: 'Minima' })
  declare Minima: Number
  
  @column({ columnName: 'Media' }) 
  declare Media: Number  

  @column({ columnName: 'Maxima' })
  declare Maxima: Number

  @column({ columnName: 'Existencia' })
  declare Existencia: Number

  @column({ columnName: 'Observaciones' })
  declare Observaciones: String 

  @column({ columnName: 'CodMonedaCosto' })
  declare CodMonedaCosto: Number

  @column({ columnName: 'CostoGeneral' })
  declare CostoGeneral: Number

  @column({ columnName: 'CodMonedaVenta' })
  declare CodMonedaVenta: Number

  @column({ columnName: 'IVenta' })
  declare IVenta: Boolean

  @column({ columnName: 'UtilidadA' })
  declare UtilidadA: Number

  @column({ columnName: 'UtilidadB' })
  declare UtilidadB: Number

  @column({ columnName: 'UtilidadC' })
  declare UtilidadC: Number

  @column({ columnName: 'UtilidadD' })
  declare UtilidadD: Number

  @column({ columnName: 'PrecioA' })
  declare PrecioA: Number

  @column({ columnName: 'PrecioB' })
  declare PrecioB: Number

  @column({ columnName: 'PrecioC' })
  declare PrecioC: Number

  @column({ columnName: 'PrecioD' })
  declare PrecioD: Number

  @column({ columnName: 'PermiteDescuento' })
  declare PermiteDescuento: Boolean

  @column({ columnName: 'MaxDesc' })
  declare MaxDesc: Number

  @column({ columnName: 'FechaIngreso' })
  declare FechaIngreso: DateTime

  @column({ columnName: 'PreguntaPrecio' })
  declare PreguntaPrecio: Boolean

  @column({ columnName: 'Apartado' })
  declare Apartado: Number

  @column({ columnName: 'Inhabilitado' })
  declare Inhabilitado: Boolean

  @column({ columnName: 'Servicio' })
  declare Servicio: Number

  @column({columnName: 'CodProveedor'})
  declare CodProveedor: Boolean

  @column({columnName: 'Serie'})
  declare Serie: Boolean

  @column({columnName: 'PermiteComision'})
  declare PermiteComision: Boolean

  @column({columnName: 'PorcComision'})
  declare PorcComision: Number

  @column({columnName: 'ProductoCompuesto'})
  declare ProductoCompuesto: Boolean

  @column({columnName: 'Consignado'})
  declare Consignado: Number

  @column({columnName: 'Lote'})
  declare Lote: Boolean

  @column({columnName: 'CasaComercial'})
  declare CasaComercial: Number

  @column({columnName: 'CodigoFabricante'})
  declare CodigoFabricante: String

  @column({columnName: 'NombreGenerico'})
  declare NombreGenerico: String

  @column({columnName: 'Imagen'})
  declare Imagen: String

  @column({columnName: 'CantMayoreo'})
  declare CantMayoreo: Number

  @column({columnName: 'PrecioMayoreo'})
  declare PrecioMayoreo: Number

  @column({columnName: 'CantidadMayoreo'})
  declare CantidadMayoreo: Number

  @column({columnName: 'PrecioAMayoreo'})
  declare PrecioAMayoreo: Number

  @column({columnName: 'PrecioBMayoreo'})
  declare PrecioBMayoreo: Number

  @column({columnName: 'PrecioCMayoreo'})
  declare PrecioCMayoreo: Number

  @column({columnName: 'PrecioDMayoreo'})
  declare PrecioDMayoreo: Number

  @column({columnName: 'Facturable'})
  declare Facturable: Boolean

  @column({columnName: 'PaqPorFardo'})
  declare PaqPorFardo: Number

  @column({columnName: 'PrecioPorFardo'})
  declare PrecioPorFardo: Number

  @column({columnName: 'Editable'})
  declare Editable: Boolean

  @column({columnName: 'Equivalencia1'})
  declare Equivalencia1: String

  @column({columnName: 'Equivalencia2'})
  declare Equivalencia2: String

  @column({columnName: 'TipoComision'})
  declare TipoComision: Boolean

  @column({columnName: 'SubUbicacion2'})
  declare SubUbicacion2: Number

  @column({columnName: 'PorcDescuento'})
  declare PorcDescuento: Number

  @column({columnName: 'PrecioRef'})
  declare PrecioRef: Number

  @column({columnName: 'PreguntaCantidad'})
  declare PreguntaCantidad: Boolean

  @column({columnName: 'NoPermiteAjuste'})
  declare NoPermiteAjuste: Boolean

  @column({columnName: 'PermiteVentaNegativa'})
  declare PermiteVentaNegativa: Boolean














}