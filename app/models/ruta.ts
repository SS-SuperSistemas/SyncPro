import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Ruta extends BaseModel {
  static table = 'Ruta'

  @column({ isPrimary: true, columnName: 'Id' })
  declare Id: number

  @column({ columnName: 'idVendedor' })
  declare idVendedor: Number
  
  @column({ columnName: 'idLocalidad' })
  declare idLocalidad: Number

  @column({ columnName: 'FechaInicio' })
  declare FechaInicio: DateTime

  @column({ columnName: 'FechaFin' })
  declare FechaFin: DateTime

  @column({ columnName: 'Anulado' })
  declare Anulado: Boolean
}

  