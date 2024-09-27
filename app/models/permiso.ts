import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import User from '#models/user'

export default class Permiso extends BaseModel {
static table = 'Permisos'

  @column({ isPrimary: true, columnName: 'Id' })
  declare id: number
 
  @column({ columnName: 'IdUsuario' })
  declare idUsuario: number

  @column({ columnName: 'IdModulo' })
  declare idModulo: number

  @column({ columnName: 'Ejecutar' })
  declare Ejecutar: boolean

  @column({ columnName: 'Actualizar' })
  declare Actualizar: boolean

  @column({ columnName: 'Eliminar' })
  declare Eliminar: boolean

  @column({ columnName: 'Buscar' })
  declare Buscar: boolean

  @column({ columnName: 'Imprimir' })
  declare Imprimir: boolean

  @column({ columnName: 'Opcional' })
  declare Opcional: boolean

@column ({ columnName: 'Menu' })
declare Menu: String
  
  @hasOne(() => User, {
    localKey: 'idUsuario',
    foreignKey: 'Id'
  })
  declare user: HasOne<typeof User>

  @hasOne(() => Modulo, {
    localKey: 'idUsuario',
    foreignKey: 'Id'
  })
  declare user: HasOne<typeof User>
}