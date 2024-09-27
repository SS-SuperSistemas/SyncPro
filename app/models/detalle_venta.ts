import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class DetalleVenta extends BaseModel {
static table = 'DetalleVentas'

  @column({ isPrimary: true, columnName: 'Id' })
  declare Id: number

  @column({ columnName: 'IdFactura' })
  declare IdFactura: number

  @column({ columnName: 'CodArticulo' })
  declare CodArticulo: number

  @column({ columnName: 'Descripcion' })
  declare Descripcion: String

  @column({ columnName: 'Cantidad' })
  declare Cantidad: number

  @column({ columnName: 'Unidades' })
  declare Unidades: number

  @column({ columnName: 'Paquetes' })
  declare Paquetes: number

  @column({ columnName: 'Costo' })
  declare Costo: number

  @column({ columnName: 'PrecioVenta' })
  declare PrecioVenta: number

  @column({ columnName: 'PrecioMayoreo' })
  declare PrecioMayoreo: number

  @column({ columnName: 'PorcDescuento' })
  declare PorcDescuento: number

  @column({ columnName: 'TotalDescuento' })
  declare TotalDecuento: number

  @column({ columnName: 'PorcImpuesto' })
  declare PorcImpuesto: number

  @column({columnName: 'TotalImpuesto' }) 
  declare TotalImpuesto: number 

  @column({ columnName: 'SubtotalGravado' })
  declare SubtotalGravado: number

  @column({ columnName: 'SubTotalExcento' })
  declare SubTotalExcento: number

  @column({ columnName: 'Total' })
  declare Total: number

  @column({ columnName: 'Idbodega' })
  declare Idbodega: number

  @column({ columnName: 'CodMoneda' })
  declare CodMoneda: number

  @column({ columnName: 'MaxDesc' })
  declare MaxDesc: number

  @column({ columnName: 'Regalias' })
  declare Regalias: number

  @column({ columnName: 'PorcComision' })
  declare PorcComision: number

  @column({ columnName: 'IdLote' })
  declare IdLote: number

  @column({ columnName: 'IdUsuario' })
  declare IdUsuario: number

  @column({ columnName: 'Compuesto' })
  declare Compuesto: Boolean

  @column({ columnName: 'BonifUnit' })
  declare BonifUnit: Number

  @column({ columnName: 'BonifPaq' })
  declare BonifPaq: Number

  @column({ columnName: 'MayoreoMenudeo' })
  declare MayoreoMenudeo: Boolean
}