import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class RangoPrecioProducto extends BaseModel {
static table = 'RangoPrecioProducto'

  @column({ isPrimary: true, columnName: 'Id' })
  declare Id: number

  @column({ columnName: 'CodProducto' })
  declare CodProducto: number

  @column({ columnName: 'CantidadInicio' })
  declare CantidadInicio: number

  @column({ columnName: 'CantidadFinal' })
  declare CantidadFinal: number

  @column({ columnName: 'Precio' })
  declare Precio: number
}

