import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Bancos extends BaseModel {
  static table = 'Bancos'

  @column({ isPrimary: true, columnName: 'Id' })
  declare Id: number

  @column({ columnName: 'Nombre' })
  declare Nombre: string

  @column({ columnName: 'Inhabilitado' })
  declare Inhabilitado: boolean
}
