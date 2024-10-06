import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class CierreCaja extends BaseModel {
  static table = 'CierreCaja'

  @column({ isPrimary: true, columnName: 'NumeroCierre' })
  declare NumeroCierre: number

  @column({ columnName: 'IdApertura' })
  declare IdApertura: number

  @column({ columnName: 'Fecha' })
  declare Fecha: Date

  @column({ columnName: 'IdUsuario' })
  declare IdUsuario: number

  @column({ columnName: 'Anulado' })
  declare Anulado: boolean

  @column({ columnName: 'Hora' })
  declare Hora: DateTime

 
}