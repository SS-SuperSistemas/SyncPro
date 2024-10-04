
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import * as relations from '@adonisjs/lucid/types/relations'
import Inventario from './inventario.js'

export default class Marca extends BaseModel {

  static table = 'Marcas'

  @column({ columnName: 'NombreMarca' })
  declare NombreMarca: string

  @column({ isPrimary: true, columnName: 'id' })
  declare id: number

  @column({ columnName: 'idBodega' })
  declare idBodega: number

  @hasMany(() => Inventario)
  declare inventarios: relations.HasMany<typeof Inventario>;


}