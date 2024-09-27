import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
export default class UserController {

    async index({ response }: HttpContext) {
      try {
        const registros = await User.all()
        return response.ok(registros)
      } catch (error) {
        return response.internalServerError({ message: 'Error fetching user', error })
      }
    }

    /**
 * Creates a new user based on the provided request data.
 *
 * @param {HttpContext} request - The HTTP request context.
 * @param {HttpContext} response - The HTTP response context.
 * @return {Promise<HttpResponse>} The created user or an error response if creation fails.
 */
async store({ request, response }: HttpContext) {
  const data = request.only(['Nombre', 'ClaveEntrada', 'ClaveInterna','CambiarPrecio','PorcPrecio','AplicarDesc','PorcDesc','ExistenciaNegativa','Anulado','Tema','IdVendedor','VerTodo','PermitirAbrirVentanas','VentasFechaAnterior','EsAdmin','DiasFacturacion','EsEncargado','IdCajero','pass_user'])
  try {
    const user = await User.create(data)
    return response.created(user)
  } catch (error) {
    return response.internalServerError({ message: 'Error creating user', error })
  }
}

async show({ params, response }: HttpContext) {
  try {
    const user = await User.findOrFail(params.id)
    return response.ok(user)
  } catch (error) {
    return response.internalServerError({ message: 'Error fetching user', error })
  }

}

async updateAnulado({ params,response }: HttpContext) {
  const user = await User.findOrFail(params.id)
  user.Anulado = true
  await user.save()
  return response.ok(user)
}

}