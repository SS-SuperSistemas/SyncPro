
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class AjusteCobrar extends BaseModel {

  static table = 'AjusteCobrar'

  @column({ isPrimary: true, columnName: 'IDAjuste' })
  declare IDAjuste: number

  @column({ columnName: 'Tipo' })
  declare Tipo: string

  @column({ columnName: 'CodCliente' })
  declare CodCliente: number

  @column({ columnName: 'Fecha' })
  declare Fecha: Date

  @column({ columnName: 'SaldoAnt' })
  declare SaldoAnt: number

  @column({ columnName: 'Ajuste' })
  declare Ajuste: number
  
  @column({ columnName: 'SaldoAct' })
  declare SaldoAct: number
  
  @column({ columnName: 'Anulado' })
  declare Anulado: boolean
  
  @column({ columnName: 'IdUsuario' })
  declare IdUsuario: number
  
  @column({ columnName: 'CodMoneda' })
  declare CodMoneda: number
  
  @column({ columnName: 'Observaciones' })
  declare Observaciones: string
  
  @column({ columnName: 'TipoCambio' })
  declare TipoCambio: number
  
  @column({ columnName: 'FechaEntrada' })
  declare FechaEntrada: Date

  @column({ columnName: 'Hora' })
  declare Hora: DateTime

}