import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class AjusteInventario extends BaseModel {
  static table = 'AjusteInventario'

  @column({ isPrimary: true, columnName: 'Consecutivo' })
  declare Consecutivo: number

  @column({ columnName: 'Fecha' })
  declare Fecha: Date

  @column({ columnName: 'Anula' })
  declare Anula: boolean

  @column({ columnName: 'Observaciones' })
  declare Observaciones: string

  @column({ columnName: 'IdUsuario' })
  declare IdUsuario: number

  @column({ columnName: 'CodMoneda' })
  declare CodMoneda: number

  @column({ columnName: 'TipoCambio' })
  declare TipoCambio: number
}
