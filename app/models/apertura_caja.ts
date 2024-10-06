import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class AperturaCaja extends BaseModel {
  static table = 'AperturaCaja'

  @column({ isPrimary: true, columnName: 'NApertura' })
  declare NApertura: number

  @column({ columnName: 'Fecha' })
  declare Fecha: Date

  @column({ columnName: 'IdUsuario' })
  declare IdUsuario: Number

  @column({ columnName: 'Cajero' })
  declare Cajero: String

  @column({ columnName: 'Observaciones' })
  declare Observaciones: String

  @column({ columnName: 'Anulado' })
  declare Anulado: Boolean

  @column({ columnName: 'Hora' })
  declare Hora: DateTime

}


