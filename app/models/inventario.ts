import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class Inventario extends BaseModel {

  static table = 'Inventario'

  @column({ isPrimary: true, columnName: 'Codigo' })
  declare Codigo: number

  @column({ columnName: 'Barras' })
  declare Barras: string // Ajustado a string para varchar

  @column({ columnName: 'Descripcion' })
  declare Descripcion: string // Ajustado a string para varchar

  @column({ columnName: 'DescripcionCorta' })
  declare DescripcionCorta: string // Ajustado a string para varchar

  @column({ columnName: 'Presentacion' })
  declare Presentacion: number // int

  @column({ columnName: 'CodPresent' })
  declare CodPresent: number // int

  @column({ columnName: 'CodMarca' })
  declare CodMarca: number // int

  @column({ columnName: 'CodSubCategoria' })
  declare CodSubCategoria: number // int

  @column({ columnName: 'SubUbicacion' })
  declare SubUbicacion: number // int

  @column({ columnName: 'Minima' })
  declare Minima: number // float

  @column({ columnName: 'Media' })
  declare Media: number // float

  @column({ columnName: 'Maxima' })
  declare Maxima: number // float

  @column({ columnName: 'Existencia' })
  declare Existencia: number // float

  @column({ columnName: 'Observaciones' })
  declare Observaciones: string // Ajustado a string para varchar

  @column({ columnName: 'CodMonedaCosto' })
  declare CodMonedaCosto: number // int

  @column({ columnName: 'CostoGeneral' })
  declare CostoGeneral: number // decimal

  @column({ columnName: 'CodMonedaVenta' })
  declare CodMonedaVenta: number // int

  @column({ columnName: 'IVenta' })
  declare IVenta: boolean // bit

  @column({ columnName: 'UtilidadA' })
  declare UtilidadA: number // decimal

  @column({ columnName: 'UtilidadB' })
  declare UtilidadB: number // decimal

  @column({ columnName: 'UtilidadC' })
  declare UtilidadC: number // decimal

  @column({ columnName: 'UtilidadD' })
  declare UtilidadD: number // decimal

  @column({ columnName: 'PrecioA' })
  declare PrecioA: number // decimal

  @column({ columnName: 'PrecioB' })
  declare PrecioB: number // decimal

  @column({ columnName: 'PrecioC' })
  declare PrecioC: number // decimal

  @column({ columnName: 'PrecioD' })
  declare PrecioD: number // decimal

  @column({ columnName: 'PermiteDescuento' })
  declare PermiteDescuento: boolean // bit

  @column({ columnName: 'MaxDesc' })
  declare MaxDesc: number // float

  @column({ columnName: 'FechaIngreso' })
  declare FechaIngreso: DateTime // datetime

  @column({ columnName: 'PreguntaPrecio' })
  declare PreguntaPrecio: boolean // bit

  @column({ columnName: 'Apartado' })
  declare Apartado: number // float

  @column({ columnName: 'Inhabilitado' })
  declare Inhabilitado: boolean // bit

  @column({ columnName: 'Servicio' })
  declare Servicio: number // int

  @column({ columnName: 'CodProveedor' })
  declare CodProveedor: boolean // bit

  @column({ columnName: 'Serie' })
  declare Serie: boolean // bit

  @column({ columnName: 'PermiteComision' })
  declare PermiteComision: boolean // bit

  @column({ columnName: 'PorcComision' })
  declare PorcComision: number // float

  @column({ columnName: 'ProductoCompuesto' })
  declare ProductoCompuesto: boolean // bit

  @column({ columnName: 'Consignado' })
  declare Consignado: number // float

  @column({ columnName: 'Lote' })
  declare Lote: boolean // bit

  @column({ columnName: 'CasaComercial' })
  declare CasaComercial: number // float

  @column({ columnName: 'CodigoFabricante' })
  declare CodigoFabricante: string // Ajustado a string para varchar

  @column({ columnName: 'NombreGenerico' })
  declare NombreGenerico: string // Ajustado a string para varchar

  @column({ columnName: 'Imagen' })
  declare Imagen: string // Ajustado a string para varchar

  @column({ columnName: 'CantMayoreo' })
  declare CantMayoreo: number // float

  @column({ columnName: 'PrecioMayoreo' })
  declare PrecioMayoreo: number // float

  @column({ columnName: 'CantidadMayoreo' })
  declare CantidadMayoreo: number // float

  @column({ columnName: 'PrecioAMayoreo' })
  declare PrecioAMayoreo: number // float

  @column({ columnName: 'PrecioBMayoreo' })
  declare PrecioBMayoreo: number // float

  @column({ columnName: 'PrecioCMayoreo' })
  declare PrecioCMayoreo: number // float

  @column({ columnName: 'PrecioDMayoreo' })
  declare PrecioDMayoreo: number // float

  @column({ columnName: 'Facturable' })
  declare Facturable: boolean // bit

  @column({ columnName: 'PaqPorFardo' })
  declare PaqPorFardo: number // float

  @column({ columnName: 'PrecioPorFardo' })
  declare PrecioPorFardo: number // float

  @column({ columnName: 'Editable' })
  declare Editable: boolean // bit

  @column({ columnName: 'Equivalencia1' })
  declare Equivalencia1: string // Ajustado a string para varchar

  @column({ columnName: 'Equivalencia2' })
  declare Equivalencia2: string // Ajustado a string para varchar

  @column({ columnName: 'TipoComision' })
  declare TipoComision: boolean // bit

  @column({ columnName: 'SubUbicacion2' })
  declare SubUbicacion2: number // int

  @column({ columnName: 'PorcDescuento' })
  declare PorcDescuento: number // float

  @column({ columnName: 'PrecioRef' })
  declare PrecioRef: number // float

  @column({ columnName: 'PreguntaCantidad' })
  declare PreguntaCantidad: boolean // bit

  @column({ columnName: 'NoPermiteAjuste' })
  declare NoPermiteAjuste: boolean // bit

  @column({ columnName: 'PermiteVentaNegativa' })
  declare PermiteVentaNegativa: boolean // bit
}
