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

  @column({ columnName: 'fechaInicio' })
  declare FechaInicio: DateTime

  @column({ columnName: 'fechaFin' })
  declare FechaFin: DateTime

  @column({ columnName: 'anulado' })
  declare Anulado: Boolean
}

  