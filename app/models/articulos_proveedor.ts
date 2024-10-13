
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class ArticulosProveedor extends BaseModel {
static table = 'ArticulosProveedor'

  @column({ isPrimary: true, columnName: 'Id' })
  declare Id: number

  

  
}