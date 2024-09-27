import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Mobiliario extends BaseModel {
  static table = 'Marcas'
  @column({ isPrimary: true })
  declare id: number

  @column({ columnName: 'NombreMarca' })
  declare nombreMarca: string

  @column({ columnName: 'idBodega' })
  declare idBodega: number
}
