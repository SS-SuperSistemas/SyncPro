
import { BaseModel, column} from '@adonisjs/lucid/orm'


export default class Marca extends BaseModel {

  static table = 'Marcas'

  @column({ columnName: 'NombreMarca' })
  declare NombreMarca: string

  @column({ isPrimary: true, columnName: 'id' })
  declare id: number

  @column({ columnName: 'idBodega' })
  declare idBodega: number

  

}