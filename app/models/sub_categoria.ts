
import { BaseModel, column } from '@adonisjs/lucid/orm'


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


}