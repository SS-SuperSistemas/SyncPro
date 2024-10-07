import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class DetallePago extends BaseModel {

  static table = 'DetallePago'

  @column({ isPrimary: true, columnName: 'Id' })
  declare Id: number

  @column({ columnName: 'FormaPago' })
  declare FormaPago: string

  @column({ columnName: 'ReferenciaTipo' })
  declare Referenciatipo: number

  @column({ columnName: 'ReferenciaDoc' })
  declare ReferenciaDoc: string

  @column({ columnName: 'IdODP' })
  declare IdODP: number

  @column({ columnName: 'TarjetaBanco' })
  declare TarjetaBanco: number


}