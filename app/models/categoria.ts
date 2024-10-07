
import { BaseModel, column } from '@adonisjs/lucid/orm'


export default class Categoria extends BaseModel {

  static table = 'Categorias'

  @column({ isPrimary: true, columnName: 'Codigo' })
  declare Codigo: number

  @column({ columnName: 'Categoria' })
  declare Categoria: string

  @column({ columnName: 'idBodega' })
  declare idBodega: number



}