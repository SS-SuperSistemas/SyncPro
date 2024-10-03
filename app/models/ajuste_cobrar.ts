
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class AjusteCobrar extends BaseModel {

  static table = 'AjusteCobrar'

  @column({ isPrimary: true, columnName: 'IDAjuste' })
  declare IDAjuste: number

  @column({ columnName: 'Fecha' })
  declare Fecha: Date

  
}