
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import * as relations from '@adonisjs/lucid/types/relations'
import Categoria from './categoria.js'

export default class SubCategoria extends BaseModel {

  static table = 'SubCategorias'
  @column({ isPrimary: true, columnName: 'Id' })
  declare Id: number

  @column({ columnName: 'CodCategoria' })
  declare CodCategoria: number

  @column({ columnName: 'SubCategoria' })
  declare SubCategoria: string

  @column({ columnName: 'idBodega' })
  declare idBodega: number


  @belongsTo(() => Categoria)
  declare categoria: relations.BelongsTo<typeof Categoria>;
}