
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class ArticulosProveedor extends BaseModel {
  static table = 'ArticulosProveedor'

  @column({ isPrimary: true, columnName: 'Id' })
  declare Id: number

  @column({ columnName: 'CodArticulo' })
  declare CodArticulo: number

  @column({ columnName: 'CodProveedor' })
  declare CodProveedor: number

  @column({ columnName: 'FechaUltimaCompra' })
  declare FechaUltimaCompra: Date

  @column({ columnName: 'UltimoCosto' })
  declare UltimoCosto: number

  @column({ columnName: 'CodMoneda' })
  declare CodMoneda: number

  @column({ columnName: 'UltimaBonif' })
  declare UltimaBonif: number

  @column({ columnName: 'UltimaRealBonif' })
  declare UltimaRealBonif: string

  @column({ columnName: 'UltimoDescuento' })
  declare UltimoDescuento: number

  @column({ columnName: 'CantidadComprada' })
  declare CantidadComprada: number

  @column({ columnName: 'NumFac' })
  declare NumFac: string
}