import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class ArqueoEfectivo extends BaseModel {
  static table = 'ArqueoEfectivo'

  @column({ isPrimary: true, columnName: 'Id' })
  declare Id: number

  @column({ columnName: 'Id_Arqueo' })
  declare Id_Arqueo: number

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