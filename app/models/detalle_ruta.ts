import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class DetalleRuta extends BaseModel {
  static table = 'DetalleRuta'


  @column({ isPrimary: true, columnName: 'Id' })
  declare Id: number

  @column({ columnName: 'idRuta' })
  declare IdRuta: number

  @column({ columnName: 'CodCliente' })
  declare CodCliente: number

  @column({ columnName: 'estado' })
  declare Estado: String

  @column({ columnName: 'observaciones' })
  declare Observaciones: String

  @column({ columnName: 'idPedido' })
  declare idPedido: Number

  @column({ columnName: 'inicio' })
  declare Inicio: DateTime

  @column({ columnName: 'fin' })
  declare Fin: DateTime

}