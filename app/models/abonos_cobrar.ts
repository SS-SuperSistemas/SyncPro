import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class AbonosCobrar extends BaseModel {
  static table = 'AbonosCobrar'

  @column({ isPrimary: true, columnName: 'IdRecibo' })
  declare IdRecibo: number

  @column({ columnName: 'NumRecibo' })
  declare NumRecibo: number

  @column({ columnName: 'CodCliente' })
  declare CodCliente: number

  @column({ columnName: 'SaldoAnt' })
  declare SaldoAnt: number
  
  @column({ columnName: 'Abono' })
  declare Abono: number
  
  @column({ columnName: 'SaldoAct' })
  declare SaldoAct: number
  
  @column({ columnName: 'Fecha' })
  declare Fecha: Date
  
  @column({ columnName: 'Observaciones' })
  declare Observaciones: string
  
  @column({ columnName: 'Anulado' })
  declare Anulado: boolean
  
  @column({ columnName: 'IdUsuario' })
  declare IdUsuario: number
  
  @column({ columnName: 'CodMoneda' })
  declare CodMoneda: number
  
  @column({ columnName: 'TipoCambio' })
  declare TipoCambio: number
  
  @column({ columnName: 'Hora' })
  declare Hora: DateTime
  
}