import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class ArticuloBodega extends BaseModel {
  static table = 'ArticuloBodega'

  @column({ isPrimary: true, columnName: 'Id' })
  declare Id: number

  @column({ columnName: 'CodArticulo' })
  declare CodArticulo: number

  @column({ columnName: 'IdBodega' })
  declare IdBodega: number

  @column({ columnName: 'Existencia' })
  declare Existencia: number

  @column({ columnName: 'CostoPromedio' })
  declare CostoPromedio: number
  
}