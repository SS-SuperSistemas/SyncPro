import { BaseModel, column } from '@adonisjs/lucid/orm'


export default class ExistenciaBodega extends BaseModel {

  static table = 'existenciaBodegas'

  @column({ columnName: 'CodArticulo' })
  declare CodArticulo: number

  @column({ columnName: 'ExistenciaTotal' })
  declare ExistenciaTotal: number



}