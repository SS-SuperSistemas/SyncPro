import { BaseModel, column } from '@adonisjs/lucid/orm'
export default class ArqueoCheque extends BaseModel {
  static table = 'ArqueoCheque'

  @column({ isPrimary: true, columnName: 'Id' })
  declare Id: number

  @column({ columnName: 'Id_Arqueo' })
  declare Id_Arqueo: number

  @column({ columnName: 'CodMoneda' })
  declare CodMoneda: number

  @column({ columnName: 'Monto' })
  declare Monto: number

  @column({ columnName: 'TipoCambio' })
  declare TipoCambio: number

}