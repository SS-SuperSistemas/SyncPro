import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class AbonoApartado extends BaseModel {
  static table = 'AbonoApartado'

  @column({ isPrimary: true, columnName: 'Id' })
  declare Id: number

  @column({ columnName: 'CodCliente' })
  declare CodCliente: number

  @column({ columnName: 'SaldoCuenta' })
  declare SaldoCuenta: number

  @column({ columnName: 'Abono' })
  declare Abono: number

  @column({ columnName: 'SaldoActual' })
  declare SaldoActual: number

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