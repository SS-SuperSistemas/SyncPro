import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['Nombre'],
  passwordColumnName: 'pass_user',
})

export default class User extends compose(BaseModel, AuthFinder) {

  static table = 'Usuario'

  @column({ isPrimary: true, columnName: 'Id' })
  declare Id: number

  @column({ columnName: 'Nombre' })
  declare Nombre: String

  @column({ columnName: 'ClaveEntrada' })
  declare ClaveEntrada: String

  @column({ columnName: 'ClaveInterna' })
  declare ClaveInterna: String

  @column({ columnName: 'CambiarPrecio' })
  declare CambiarPrecio: Boolean

  @column({ columnName: 'PorcPrecio' })
  declare PorcPrecio: Number

  @column({ columnName: 'AplicarDesc' })
  declare AplicarDesc: Boolean

  @column({ columnName: 'PorcDesc' })
  declare PorcDesc: Number

  @column({ columnName: 'ExistenciaNegativa' })
  declare ExistenciaNegativa: Boolean

  @column({ columnName: 'Anulado' })
  declare Anulado: Boolean

  @column({ columnName: 'Tema' })
  declare Tema: String

  @column({ columnName: 'IdVendedor' })
  declare IdVendedor: Number

  @column({ columnName: 'VerTodo' })
  declare VerTodo: Boolean

  @column({ columnName: 'PermitirAbrirVentanas' })
  declare PermitirAbrirVentanas: Boolean

  @column({ columnName: 'VentasFechaAnterior' })
  declare VentasFechaAnterior: Boolean

  @column({ columnName: 'EsAdmin' })
  declare EsAdmin: Boolean

  @column({ columnName: 'DiasFacturacion' })
  declare DiasFacturacion: Number

  @column({ columnName: 'EsEncargado' })
  declare EsEncargado: Boolean

  @column({ columnName: 'IdEncargado' })
  declare IdEncargado: Number

  @column({ columnName: 'pass_user' })
  declare pass_user: String

  static accessTokens = DbAccessTokensProvider.forModel(User, {
    expiresIn: '2 days',
  })



}

