import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class ArqueoTarjeta extends BaseModel {
  static table = 'ArqueoTarjeta'

  @column({ isPrimary: true, columnName: 'Id' })
  declare Id: number

  @column({ columnName: 'Id_Arqueo' })
  declare Id_Arqueo: number

  @column({ columnName: 'Id_Tarjeta' })
  declare Id_Tarjeta: number

  @column({ columnName: 'Monto' })
  declare Monto: number

  @column({ columnName: 'TipoCambio' })
  declare TipoCambio: number


}