import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class ArqueoCaja extends BaseModel {
  static table = 'ArqueoCaja'

  @column({ isPrimary: true, columnName: 'Id' })
  declare Id: number

  @column({ columnName: 'IdApertura' })
  declare IdApertura: number

  @column({ columnName: 'Fecha' })
  declare Fecha: Date

  @column({ columnName: 'IdUsuario' })
  declare IdUsuario: number

  @column({ columnName: 'Observaciones' })
  declare Observaciones: string

  @column({ columnName: 'Anulado' })
  declare Anulado: boolean

  @column({ columnName: 'Hora' })
  declare Hora: DateTime
}