import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class AbonoPagar extends BaseModel {
  static table = 'AbonoPagar'

  @column({ isPrimary: true, columnName: 'Id' })
  declare Id: number

  @column({ columnName: 'Fecha' })
  declare Fecha: Date

  @column({ columnName: 'CodProveedor' })
  declare CodProveedor: number

  @column({ columnName: 'IdUsuario' })
  declare IdUsuario: number

  @column({ columnName: 'SaldoCuenta' })
  declare SaldoCuenta: number

  @column({ columnName: 'Monto' })
  declare Monto: number

  @column({ columnName: 'SaldoActual' })
  declare SaldoActual: number

  @column({ columnName: 'Anulado' })
  declare Anulado: boolean

  @column({ columnName: 'CodMoneda' })
  declare CodMoneda: number

  @column({ columnName: 'TipoCambio' })
  declare TipoCambio: number

  @column({ columnName: 'MontoLetras' })
  declare MontoLetras: string

  @column({ columnName: 'FechaEntrada' })
  declare FechaEntrada: DateTime

  @column({ columnName: 'Observacion' })
  declare Observacion: string

  @column({ columnName: 'NumRecibo' })
  declare NumRecibo: string

  @column({ columnName: 'FondoCaja' })
  declare FondoCaja: boolean

  @column({ columnName: 'IdMov' })
  declare IdMov: number

  

}