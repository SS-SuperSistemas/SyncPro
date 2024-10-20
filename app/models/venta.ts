import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class Venta extends BaseModel {
static table = 'Ventas'

  @column({ isPrimary: true, columnName: 'Id' })
  declare Id: number

  @column({ columnName: 'Nfactura' })
  declare Nfactura: number

  @column({ columnName: 'Tipo' })
  declare Tipo: String

  @column({ columnName: 'Fecha' })
  declare Fecha: Date

  @column({ columnName: 'Vence' })
  declare Vence: Date

  @column({ columnName: 'CodCliente' })
  declare CodCliente: number

  @column({ columnName: 'NombreCliente' })
  declare NombreCliente: String

  @column({ columnName: 'IdUsuario' })
  declare IdUsuario: number

  @column({ columnName: 'Anulado' })
  declare Anulado: Boolean

  @column({ columnName: 'FacturaCancelado' })
  declare FacturaCancelado: Boolean

  @column({ columnName: 'NumApertura' })
  declare NumApertura: Number

  @column({ columnName: 'CodMoneda' })
  declare CodMoneda: Number

  @column({ columnName: 'TipoCambio' })
  declare TipoCambio: Number

  @column({ columnName: 'Exonerar' })
  declare Exonerar: Boolean

  @column({ columnName: 'Observaciones' })
  declare Observaciones: String

  @column({ columnName: 'IdVendedor' })
  declare IdVendedor: Number

  @column({ columnName: 'Apartado' })
  declare Apartado: Number

  @column({ columnName: 'Hora' })
  declare Hora: DateTime

  @column({ columnName: 'SubTotal' })
  declare SubTotal: Number

  @column({ columnName: 'TotalDescuento' })
  declare TotalDescuento: Number

  @column({ columnName: 'TotalImpuesto' })
  declare TotalImpuesto: Number

  @column({ columnName: 'SubTotalGravado' })
  declare SubTotalGravado: Number

  @column({ columnName: 'SubTotalExcento' })
  declare SubTotalExento: Number

  @column({ columnName: 'Total' })
  declare Total: Number

  @column({ columnName: 'IdBodega' })
  declare IdBodega: Number

  @column({ columnName: 'AutorizacionFEL' })
  declare AutorizacionFEL: String

  @column({ columnName: 'NumeroFEL' })
  declare NumeroFEL: String

  @column({ columnName: 'SerieFEL' })
  declare SerieFEL: String

  @column({ columnName: 'EmisionFEL' })
  declare EmisionFEL: String

  @column({ columnName: 'QR' })
  declare QR: String  

  @column({ columnName: 'TotalLetras' })
  declare TotalLetras: String

  @column({ columnName: 'NoAbonos' })
  declare NoAbonos: number

  @column({ columnName: 'MontoAbonos' })
  declare MontoAbonos: number

  @column({ columnName: 'Contacto' })
  declare Contacto: String

  @column({ columnName: 'TelContacto' })
  declare TelContacto: String

  @column({ columnName: 'AnuladoPor' })
  declare AnuladoPor: String

  @column({ columnName: 'NombrePaciente' })
  declare NombrePaciente: String

  @column({ columnName: 'NITFacturado' })
  declare NITFacturado: String

  @column({ columnName: 'NombreFacturado' })
  declare NombreFacturado: String

  @column({ columnName: 'DireccionFacturado' })
  declare DireccionFacturado: String

  @column({ columnName: 'DPI' })
  declare DPI: Boolean

  @column({ columnName: 'Recibido' })
  declare Recibido: Boolean

  @column({ columnName: 'Guia' })
  declare Guia: String

  @column({ columnName: 'NoGuia' })
  declare NoGuia: String

  @column({ columnName: 'Notas' })
  declare Notas: String

  @column({ columnName: 'IdTransporte' })
  declare IdTransporte: Number

  @column({ columnName: 'CantidadCuotas' })
  declare CantidadCuotas: Number
}
