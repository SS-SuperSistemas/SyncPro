
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Config extends BaseModel {
static table = 'Config'

  @column({ isPrimary: true, columnName: 'Id' })
  declare Id: number

  @column({ columnName: 'CodMoneda' })
  declare CodMoneda: number

  @column({ columnName: 'Iventa' })
  declare Iventa: number

  @column({ columnName: 'Intereses' })
  declare Intereses: number

  @column({ columnName: 'DiasCotizacion' })
  declare DiasCotizacion: number

  @column({ columnName: 'DiasApartados' })
  declare DiasApartados: number

  @column({ columnName: 'UsaMarca' })
  declare UsaMarca: boolean

  @column({ columnName: 'TipoCosto' })
  declare TipoCosto: number

  @column({ columnName: 'Barras' })
  declare Barras: boolean

  @column({ columnName: 'TipoRedondeo' })
  declare TipoRedondeo: number

  @column({ columnName: 'unicaja' })
  declare unicaja: boolean

  @column({ columnName: 'TipoEmpresa' })
  declare TipoEmpresa: number

  @column({ columnName: 'BdUnica' })
  declare BdUnica: boolean

  @column({ columnName: 'CantidadVendidaTicket' })
  declare CantidadVendidaTicket: boolean

  @column({ columnName: 'ServicioOrden' })
  declare ServicioOrden: number

  @column({ columnName: 'CuentaApertura' })
  declare CuentaApertura: boolean

  @column({ columnName: 'ProductoComun' })
  declare ProductoComun: string

  @column({ columnName: 'ConservaTipoPrecio' })
  declare ConservaTipoPrecio: boolean

  @column({ columnName: 'TicketSize' })
  declare TicketSize: boolean

  @column({ columnName: 'MultiplesEstablecimientosFEL' })
  declare MultiplesEstablecimientosFEL: boolean

  @column({ columnName: 'CuentasBancarias' })
  declare CuentasBancarias: boolean
}