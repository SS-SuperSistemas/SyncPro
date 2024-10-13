import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class ArticulosOrden extends BaseModel {

  static table = 'ArticulosOrden'

  @column({ isPrimary: true, columnName: 'Id' })
  declare Id: number

  @column({ columnName: 'NombreArticulo' })
  declare NombreArticulo: string

  @column({ columnName: 'IdArticulo' })
  declare IdArticulo: number

  @column({ columnName: 'IdOrden' })
  declare IdOrden: number

  @column({ columnName: 'Cantidad' })
  declare Cantidad: number

  @column({ columnName: 'Precio' })
  declare Precio: number

}