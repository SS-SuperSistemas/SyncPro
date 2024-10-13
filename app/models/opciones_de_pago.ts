import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class OpcionesDePago extends BaseModel {
  static table = 'OpcionesDePago'

  @column({ isPrimary: true, columnName: 'id' })
  declare id: number

  @column({ columnName: 'Documento' })
  declare Documento: number

  @column({ columnName: 'IdRecibo' })
  declare IdRecibo: number

  @column({ columnName: 'TipoDocumento' })
  declare TipoDocumento: string

  @column({ columnName: 'MontoPago' })
  declare MontoPago: number

  @column({ columnName: 'FormaPago' })
  declare FormaPago: string

  @column({ columnName: 'Denominacion' })
  declare Denominacion: number

  @column({ columnName: 'IdUsuario' })
  declare IdUsuario: number

  @column({ columnName: 'CodMoneda' })
  declare CodMoneda: number

  @column({ columnName: 'TipoCambio' })
  declare TipoCambio: number

  @column({ columnName: 'Fecha' })
  declare Fecha: Date

  @column({ columnName: 'Napertura' })
  declare Napertura: number

  @column({ columnName: 'Vuelto' })
  declare Vuelto: number

  @column({ columnName: 'Anulado' })
  declare Anulado: boolean


}