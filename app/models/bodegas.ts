import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Bodegas extends BaseModel {

  static table = 'Bodegas'

  @column({ isPrimary: true, columnName: 'Id' })
  declare Id: number

  @column({ columnName: 'Nombre' })
  declare Nombre: string

  @column({ columnName: 'Observaciones' })
  declare Observaciones: string

  @column({ columnName: 'Principal' })
  declare Principal: boolean
}
