import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
export default class UserController {

    // async index({ response }: HttpContext) {
    //   try {
    //     const registros = await User.all()
    //     return response.ok(registros)
    //   } catch (error) {
    //     return response.internalServerError({ message: 'Error fetching user', error })
    //   }
    // }

    async index({ response }: HttpContext) {
      try {
        const registros = await User.all();
        // Convertir cada registro a un objeto plano y aplicar el mapeo
        const transformedRegistros = registros.map(user => this.mapKeys(user.toJSON()));
        return response.ok(transformedRegistros);
      } catch (error) {
        return response.internalServerError({ message: 'Error fetching orders', error });
      }
    }

    private mapKeys(data: Record<string, any>): Record<string, any> {
      return {
        Id: data.id,
        Nombre: data.nombre,
        ClaveEntrada: data.claveEntrada, // Mapea a la forma original
        ClaveInterna: data.claveInterna,
        CambiarPrecio: data.cambiarPrecio,
        PorcPrecio: data.porcPrecio,
        AplicarDesc: data.aplicarDesc,
        PorcDesc: data.porcDesc,
        ExistenciaNegativa: data.existenciaNegativa,
        Anulado: data.anulado,
        Tema: data.tema,
        IdVendedor: data.idVendedor,
        VerTodo: data.verTodo,
        PermitirAbrirVentanas: data.permitirAbrirVentanas,
        VentasFechaAnterior: data.ventasFechaAnterior,
        EsAdmin: data.esAdmin,
        DiasFacturacion: data.diasFacturacion,
        EsEncargado: data.esEncargado,
        IdEncargado: data.idEncargado,
        pass_user: data.pass_user,
      };
    }

    /**
 * Creates a new user based on the provided request data.
 *
 * @param {HttpContext} request - The HTTP request context.
 * @param {HttpContext} response - The HTTP response context.
 * @return {Promise<HttpResponse>} The created user or an error response if creation fails.
 */
async store({ request, response }: HttpContext) {
  const data = request.only(['Nombre', 'ClaveEntrada', 'ClaveInterna','CambiarPrecio','PorcPrecio',
    'AplicarDesc','PorcDesc','ExistenciaNegativa','Anulado','Tema','IdVendedor','VerTodo',
    'PermitirAbrirVentanas','VentasFechaAnterior','EsAdmin','DiasFacturacion','EsEncargado',
    'IdEncargado','pass_user'])
  try {
    const user = await User.create(data)
    return response.created(user)
  } catch (error) {
    return response.internalServerError({ message: 'Error creating user', error })
  }
}

async show({ params, response }: HttpContext) {
  try {
    const registro = await User.findOrFail(params.id)
    const transformedRegistros = this.mapKeys(registro.toJSON());
    return response.ok(transformedRegistros)
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