import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Vendedores extends BaseModel {

  static table = 'Vendedores'
  @column({ isPrimary: true, columnName: 'Id' })
  declare Id: number

  @column({ columnName: 'Cedula' })
  declare Cedula: String

  @column({ columnName: 'Nombre' })
  declare Nombre: String

  @column({ columnName: 'Telefono' })
  declare Telefono: String

  @column({ columnName: 'Celular' })
  declare Celular: String

  @column({ columnName: 'Direccion' })
  declare Direccion: String

  @column({ columnName: 'Comision' })
  declare Comision: Number

  @column({ columnName: 'Inhabilitado' })
  declare Inhabilitado: Boolean

  @column({ columnName: 'Correo' })
  declare Correo: String

  @column({ columnName: 'Comision2' })
  declare Comision2: String

  @column({ columnName: 'DiasdeGracia' })
  declare DiasdeGracia: Number

  @column({ columnName: 'TipoComision' })
  declare TipoComision: Number

  @column({ columnName: 'Meta' })
  declare Meta: Number

  @column({ columnName: 'PorcXMeta' })
  declare PorcXMeta: Number

  @column({ columnName: 'PorProdoPorc' })
  declare PorProdoPorc: Number









}