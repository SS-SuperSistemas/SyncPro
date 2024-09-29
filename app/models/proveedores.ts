import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Proveedores extends BaseModel {

  static table = 'Proveedores'
  @column({ isPrimary: true, columnName: 'CodProveedor' })
  declare CodProveedor: number

  @column({ columnName: 'Cedula' })
  declare Cedula: String

  @column({ columnName: 'Nombre' })
  declare Nombre: String

  @column({ columnName: 'Observaciones' })
  declare Observaciones: String

  @column({ columnName: 'Telefono1' })
  declare Telefono1: String

  @column({ columnName: 'Telefono2' })
  declare Telefono2: String

  @column({ columnName: 'Fax1' })
  declare Fax1: String

  @column({ columnName: 'Email' })
  declare Email: String

  @column({ columnName: 'Direccion' })
  declare Direccion: String

  @column({ columnName: 'MontoCredito' })
  declare MontoCredito: Number

  @column({ columnName: 'Plazo' })
  declare Plazo: Number

  @column({ columnName: 'InHabilitado' })
  declare InHabilitado: Boolean

  @column({ columnName: 'CodMoneda' })
  declare CodMoneda: Number

  @column({ columnName: 'Contacto' })
  declare Contacto: String
}