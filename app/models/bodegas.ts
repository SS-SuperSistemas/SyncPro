import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Bodegas extends BaseModel {
static table = 'Bodegas'

  @column({ isPrimary: true, columnName: 'Id' })
  declare Id: number

  @column({ columnName: 'Nombre' })
  declare Nombre: String

  @column({ columnName: 'Observaciones' })
  declare Observaciones: String

  @column({ columnName: 'Principal' })
  declare Principal: Boolean

  @column({ columnName: 'IdBodega' })
  declare IdBodega: Number
}