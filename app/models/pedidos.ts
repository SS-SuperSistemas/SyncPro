import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Pedidos extends BaseModel {
static table = 'Pedidos'


  @column({ isPrimary: true, columnName: 'id' })
  declare id: number

  @column({ columnName: 'CodCliente' })
  declare CodCliente: number

  @column({ columnName: 'Fecha' })
  declare Fecha: DateTime

  @column({ columnName: 'Observaciones' })
  declare Observaciones: String

  @column({ columnName: 'IdUsuario' })
  declare IdUsuario: Number

  @column({ columnName: 'FechaEntrega' })
  declare FechaEntrega: DateTime

  @column({ columnName: 'CodMoneda' })
  declare CodMoneda: Number

  @column({ columnName: 'TipoCambio' })
  declare TipoCambio: Number

  @column({ columnName: 'Anulado' })
  declare Anulado: Boolean

  @column({ columnName: 'idVendedor' })
  declare idVendedor: Number

}