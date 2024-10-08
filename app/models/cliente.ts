import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Cliente extends BaseModel {
  static table = 'Clientes'

  @column({ isPrimary: true, columnName: 'CodCliente' })
  declare CodCliente: number

  @column({ columnName: 'Cedula' })
  declare Cedula: string

  @column({ columnName: 'Nombre' })
  declare Nombre: string

  @column({ columnName: 'Observaciones' })
  declare Observaciones: string

  @column({ columnName: 'Telefono1' })
  declare Telefono1: string

  @column({ columnName: 'Telefono2' })
  declare Telefono2: string

  @column({ columnName: 'Celular' })
  declare Celular: string

  @column({ columnName: 'Email' })
  declare Email: string

  @column({ columnName: 'Direccion' })
  declare Direccion?: string

  @column({ columnName: 'Credito' })
  declare Credito: boolean

  @column({ columnName: 'LimiteCredito' })
  declare LimiteCredito: number

  @column({ columnName: 'PlazoCredito' })
  declare PlazoCredito: number

  @column({ columnName: 'TipoPrecio' })
  declare TipoPrecio: number

  @column({ columnName: 'Restriccion' })
  declare Restriccion: boolean

  @column({ columnName: 'CodMoneda' })
  declare CodMoneda: number

  @column({ columnName: 'Moroso' })
  declare Moroso: boolean

  @column({ columnName: 'InHabilitado' })
  declare InHabilitado: boolean

  @column({ columnName: 'FechaIngreso' })
  declare FechaIngreso: Date

  @column({ columnName: 'IdLocalidad' })
  declare IdLocalidad: number

  @column({ columnName: 'IdAgente' })
  declare IdAgente: number

  @column({ columnName: 'PermiteDescuento' })
  declare PermiteDescuento: boolean

  @column({ columnName: 'Descuento' })
  declare Descuento: number

  @column({ columnName: 'MaxDescuento' })
  declare MaxDescuento: number

  @column({ columnName: 'Exonerar' })
  declare Exonerar: boolean

  @column({ columnName: 'Codigo' })
  declare Codigo: string

  @column({ columnName: 'Contacto' })
  declare Contacto: string

  @column({ columnName: 'TelContacto' })
  declare TelContacto: string

  @column({ columnName: 'DPI' })
  declare DPI: number

  @column({ columnName: 'Categoria' })
  declare Categoria: number

  // Método estático para procesar datos
  static processData(data: any) {
    return {
      Cedula: data.Cedula,
      Nombre: data.Nombre,
      Observaciones: data.Observaciones || "",
      Telefono1: data.Telefono1 || "",
      Telefono2: data.Telefono2 || "",
      Celular: data.Celular || "",
      Email: data.Email || "",
      Direccion: data.Direccion || "",
      Credito: data.Credito || false,
      LimiteCredito: data.LimiteCredito || 0,
      PlazoCredito: data.PlazoCredito || 0,
      TipoPrecio: data.TipoPrecio || 0,
      Restriccion: data.Restriccion || false,
      CodMoneda: data.CodMoneda || 0,
      Moroso: data.Moroso || false,
      InHabilitado: data.InHabilitado || false,
      FechaIngreso: data.FechaIngreso || new Date(),
      IdLocalidad: data.IdLocalidad || 0,
      IdAgente: data.IdAgente || 0,
      PermiteDescuento: data.PermiteDescuento || false,
      Descuento: data.Descuento || 0,
      MaxDescuento: data.MaxDescuento || 0,
      Exonerar: data.Exonerar || false,
      Codigo: data.Codigo || "",
      Contacto: data.Contacto || "",
      TelContacto: data.TelContacto || "",
      DPI: data.DPI || 0,
      Categoria: data.Categoria || 0,
    };
  }
}
