import { BaseModel, column } from '@adonisjs/lucid/orm'


export default class Modulo extends BaseModel {

  static table = 'Modulo'

  @column({ isPrimary: true, columnName: 'Id' })
  declare Id: number

  @column({ columnName: 'Nombre' })
  declare Nombre: String

  @column({ columnName: 'NombreInterno' })
  declare NombreInterno: String

  @column({ columnName: 'Software' })
  declare Software: Number

  @column({ columnName: 'Grupo' })
  declare Grupo: String

}