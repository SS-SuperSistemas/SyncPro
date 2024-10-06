import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class MovCajas extends BaseModel {
  static table = 'MovCajas'

  @column({ isPrimary: true , columnName: 'Id' })
  declare Id: number

  @column({ columnName: 'Entrada' })
  declare Entrada: number

  @column({ columnName: 'Monto' })
  declare Monto: number

  @column({ columnName: 'CodMoneda' })
  declare CodMoneda: number
  
  @column({ columnName: 'IdUsuario' })
  declare IdUsuario: number
  
  @column({ columnName: 'Observaciones' })
  declare Observaciones: string

  @column({ columnName: 'Anulado' })
  declare Anulado: boolean

  @column({ columnName: 'NumApertura' })
  declare NumApertura: number

  @column({ columnName: 'TipoCambio' })
  declare TipoCambio: number

  @column({ columnName: 'Fecha' })
  declare Fecha: Date

  @column({ columnName: 'Hora' })
  declare Hora: DateTime

  @column({ columnName: 'Idbanco' })
  declare Idbanco: number
}