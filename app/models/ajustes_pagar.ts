import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class AjustesPagar extends BaseModel {
  static table = 'AjustesPagar'

  @column({ isPrimary: true, columnName: 'IDAjuste' })
  declare IDAjuste: number

  @column({ columnName: 'Tipo' })
  declare Tipo: string

  @column({ columnName: 'CodProveedor' })
  declare CodProveedor: number

  @column({ columnName: 'Fecha' })
  declare Fecha: Date

  @column({ columnName: 'SaldoAnt' })
  declare SaldoAnt : number

  @column({ columnName: 'Monto' })
  declare Monto : number

  @column({ columnName: 'SaldoAct' })
  declare SaldoAct : number

  @column({ columnName: 'Observaciones' })
  declare Observaciones : string

  @column({ columnName: 'Anulado' })
  declare Anulado : boolean

  @column({ columnName: 'IdUsuario' })
  declare IdUsuario : number

  @column({ columnName: 'CodMoneda' })
  declare CodMoneda : number

  @column({ columnName: 'FechaEntrada' })
  declare FechaEntrada: Date

  @column({ columnName: 'TipoCambio' })
  declare TipoCambio: number

  @column({ columnName: 'NumRecibo' })
  declare NumRecibo: number

}