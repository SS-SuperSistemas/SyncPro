import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Apartados extends BaseModel {
  static table = 'Apartados'

  @column({ isPrimary: true, columnName: 'Id' })
  declare Id: number

  @column({ columnName: "Napartado" })
  declare createdAt: number

  @column({ columnName: "CodCliente" })
  declare CodCliente: number

  @column({ columnName: "NombreCliente" })
  declare NombreCliente: string

  @column({ columnName: "Idusuario" })
  declare Idusuario: string

  @column({ columnName: "Fecha" })
  declare Fecha: Date

  @column({ columnName: "Vence" })
  declare Vence: Date

  @column({ columnName: "Anulado" })
  declare Anulado: boolean

  @column({ columnName: "Cancelado" })
  declare Cancelado: boolean

  @column({ columnName: "TipoCambio" })
  declare TipoCambio: number

  @column({ columnName: "CodMoneda" })
  declare CodMoneda: number

  @column({ columnName: "IdVendedor" })
  declare IdVendedor: number

  @column({ columnName: "Hora" })
  declare Hora: DateTime

  @column({ columnName: "SubTotal" })
  declare SubTotal: number

  @column({ columnName: "TotalDescuento" })
  declare TotalDescuento: number

  @column({ columnName: "TotalImpuesto" })
  declare TotalImpuesto: number

  @column({ columnName: "SubTotalGravado" })
  declare SubTotalGravado: number

  @column({ columnName: "SubTotalExcento" })
  declare SubTotalExcento: number

  @column({ columnName: "Total" })
  declare Total: number

}