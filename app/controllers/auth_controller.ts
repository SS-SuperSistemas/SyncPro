import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
export default class AuthController {

  async login({ request, response }: HttpContext) {
    try {
      console.log('Login')
      const data = await request.only(['Nombre', 'password'])
      console.log(data)
      const user = await User.verifyCredentials(data.Nombre, data.password)

      if (!user || user.Anulado) {
        return response.unauthorized({ error: 'Credenciales incorrectas' })
      }

      const token = await User.accessTokens.create(user)

      return {
        user,
        token: token.value!.release(),
      }
    } catch (err) {
      console.log(err)
      response.status(500).json({ message: 'Error login', err })
    }
  }

  async logout({ auth }: HttpContext) {
    try {
      const user = auth.user!
      await User.accessTokens.delete(user, user.currentAccessToken.identifier)
      return { message: 'success' }
    } catch (error) {
      return { message: 'error', error: error }
    }
  }

}