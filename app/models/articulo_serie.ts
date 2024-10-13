
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class ArticuloSerie extends BaseModel {

  static table = 'ArticuloSerie'

  @column({ isPrimary: true, columnName: 'Id' })
  declare Id: number

  @column({ columnName: 'Serie' })
  declare Serie: string

  @column({ columnName: 'CodArticulo' })
  declare CodArticulo: number

  @column({ columnName: 'Activa' })
  declare Activa: boolean
}