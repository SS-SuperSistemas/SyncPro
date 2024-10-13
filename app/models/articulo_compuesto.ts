import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class ArticuloCompuesto extends BaseModel {

  static table = 'ArticuloCompuesto'

  @column({ columnName: 'Id' })
  declare Id: number

  @column({ columnName: 'CodProductoCompuesto' })
  declare CodProductoCompuesto: number

  @column({ columnName: 'CodProducto' })
  declare CodProducto: number

  @column({ columnName: 'Cantidad' })
  declare Cantidad: number

}