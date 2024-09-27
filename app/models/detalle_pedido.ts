import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class DetallePedido extends BaseModel {

  static table = 'DetallePedidos'
  
  @column({ isPrimary: true, columnName: 'Id' })
  declare id: number

  @column({ columnName: 'IdPedido' })
  declare IdPedido: number

  @column({ columnName: 'CodArticulo' })
  declare CodArticulo: number

  @column({ columnName: 'Descripcion' })
  declare Descripcion: String

  @column({ columnName: 'Cantidad' })
  declare Cantidad: number

  @column({ columnName: 'PrecioVenta' })
  declare PrecioVenta: number

  @column({ columnName: 'PorcDescuento' })
  declare PorcDescuento: number

  @column({ columnName: 'Total' })
  declare Total: number
}