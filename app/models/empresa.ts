
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Empresa extends BaseModel {
static table = 'Empresa'

  @column({ isPrimary: true, columnName: 'Empresa' })
  declare Empresa: String

  @column({ columnName: 'NombreComercial' })
  declare NombreComercial: String

  @column({ columnName: 'Telefono1' })
  declare Telefono1: String
  
  @column({ columnName: 'Telefono2' })  
  declare Telefono2: String

  @column({ columnName: 'Fax' })
  declare Fax: String

  @column({ columnName: 'Fax2' })
  declare Fax2: String

  @column({ columnName: 'Direccion' })
  declare Direccion: String

  @column({ columnName: 'Frase' })
  declare Frase: String

  @column({ columnName: 'Email' })
  declare Email: String

  @column({ columnName: 'Web' })
  declare Web: String
 
  @column({ columnName: 'Facebook' })
  declare Logo: String

  @column({ columnName: 'Info' })
  declare Info: String

  @column({ columnName: 'FEL' })
  declare FEL: Number

  @column({ columnName: 'FELCliente' })
  declare FELCliente: String

  @column({ columnName: 'FELUsuario' })
  declare FELUsuario: String

  @column({ columnName: 'FELPassword' })
  declare FELPassword: String

  @column({ columnName: 'EstablecimientoFEL' })
  declare EstablecimientoFEL: Number

  @column({ columnName: 'ServidorFEL' })
  declare ServidorFEL: String

  @column({ columnName: 'RegimenFEL' })
  declare RegimenFEL: String

  @column({ columnName: 'FELPasswordNIT' })
  declare FELPasswordNIT: String

  @column({ columnName: 'RegimenISR' })
  declare RegimenISR: String

  @column({ columnName: 'AgenteRetenedor' })
  declare AgenteRetenedor: Boolean


}