
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import SubCategoria from './sub_categoria.js'
import * as relations from '@adonisjs/lucid/types/relations'

export default class Categoria extends BaseModel {

  static table = 'Categoria'

  @column({ isPrimary: true, columnName: 'Codigo' })
  declare Codigo: number

  @column({ columnName: 'Categoria' })
  declare Categoria: string

  @column({ columnName: 'idBodega' })
  declare idBodega: number

  @hasMany(() => SubCategoria)
  declare subCategorias: relations.HasMany<typeof SubCategoria>;

}