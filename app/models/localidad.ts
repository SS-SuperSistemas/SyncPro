import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Localidad extends BaseModel {
  static table = 'Localidad'

  @column({ isPrimary: true, columnName: 'Id' })
  declare Id: number

  @column({ columnName: 'Nombre' })
  declare Nombre: string

}