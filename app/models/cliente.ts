import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Cliente extends BaseModel {
static table = 'Clientes'


  @column({ isPrimary: true, columnName: 'CodCliente' })
  declare CodCliente: number

  @column({columnName: 'Cedula' })
  declare Cedula: String

  @column({columnName: 'Nombre' })
  declare Nombre: String

  @column({columnName: 'Observaciones' })
  declare Observaciones: String

  @column({columnName: 'Telefono1' })
  declare Telefono1: String

  @column({columnName: 'Telefono2' })
  declare Telefono2: String

  @column({columnName: 'Celular' })
  declare Celular: String

  @column({columnName: 'Email' })
  declare Email: String

  @column({columnName: 'Direccion' })
  declare Direccion: String

  @column({columnName: 'Credito' })
  declare Credito: Boolean

  @column({columnName: 'LimiteCredito' })
  declare LimiteCredito: Number

  @column({columnName: 'PlazoCredito' })
  declare PlazoCredito: Number

  @column({columnName: 'TipoPrecio' })
  declare TipoPrecio: Number

  @column({columnName: 'Restriccion' })
  declare Restriccion: Boolean

  @column({columnName: 'CodMoneda' })
  declare CodMoneda: Number

  @column({columnName: 'Moroso' })
  declare Moroso: Boolean

  @column({columnName: 'InHabilitado' })
  declare InHabilitado: Boolean

  @column({columnName: 'FechaIngreso' })
  declare FechaIngreso: Date

  @column({columnName: 'FechaNacimiento' })
  declare FechaNacimiento: Date

  @column({columnName: 'IdLocalidad' })
  declare IdLocalidad: Number

  @column({columnName: 'IdAgente' })
  declare IdAgente: Number

  @column({columnName: 'PermiteDescuento' })
  declare PermiteDescuento: Boolean

  @column({columnName: 'Descuento' })
  declare Descuento: Number

  @column({columnName: 'MaxDescuento' })
  declare MaxDescuento: Number

  @column({columnName: 'Exonerar' })
  declare Exonerar: Boolean

  @column({columnName: 'Codigo' })
  declare Codigo: Number
}