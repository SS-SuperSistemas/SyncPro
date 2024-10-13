
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class VentasCredito extends BaseModel {

  static table = 'VentasAlCredito'
  @column({ isPrimary: true, columnName: 'Id' })
  declare id: number

  @column({ columnName: "IdFactura" })
  declare IdFactura: number

  @column({ columnName: "Fecha" })
  declare Fecha: Date

  @column({ columnName: "Cuota" })
  declare Cuota: number

  @column({ columnName: "Abono" })
  declare Abono: number

  @column({ columnName: "FechaPago" })
  declare FechaPago: number

  @column({ columnName: "Pagado" })
  declare Pagado: number

  @column({ columnName: "NoCuota" })
  declare NoCuota: number

  




}