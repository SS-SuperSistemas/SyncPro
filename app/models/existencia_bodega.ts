import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import * as relations from '@adonisjs/lucid/types/relations';
import Inventario from './inventario.js';

export default class ExistenciaBodega extends BaseModel {

  static table = 'ExistenciaBodega'

  @column({ columnName: 'CodArticulo' })
  declare createdAt: number

  @column({ columnName: 'ExistenciaTotal' })
  declare ExistenciaTotal: number

  @belongsTo(() => Inventario)
  declare inventario: relations.BelongsTo<typeof Inventario>;

}