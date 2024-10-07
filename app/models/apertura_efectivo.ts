import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class AperturaEfectivo extends BaseModel {
  static table = 'AperturaEfectivo'

  @column({ isPrimary: true, columnName: 'Id' })
  declare Id: bigint

  @column({ columnName: 'NApertura' })
  declare NApertura: number

  @column({ columnName: 'Denominacion' })
  declare Denominacion: number

  @column({ columnName: 'Cantidad' })
  declare Cantidad: number

  @column({ columnName: 'Valor' })
  declare Valor: number

  @column({ columnName: 'CodMoneda' })
  declare CodMoneda: number

  @column({ columnName: 'TipoCambio' })
  declare TipoCambio: number


}