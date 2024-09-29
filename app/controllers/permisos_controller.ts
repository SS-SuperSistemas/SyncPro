import type { HttpContext } from '@adonisjs/core/http'
import Permisos from '#models/permiso'
export default class PermisosController {

    async index({ response }: HttpContext) {
        try {
            const permisos = await Permisos.all()
            return response.ok(permisos)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching permissions', error })
        }
    }
async store ({request, response }: HttpContext) {
    const data = request.only(['Id', 'IdUsuario', 'IdModulo','Ejecutar','Actualizar','Eliminar','Buscar','Imprimir','Opcional','Menu'])
    try {
        const permiso = await Permisos.create(data)
        return response.created(permiso)
    } catch (error) {
        return response.internalServerError({ message: 'Error creating permission', error })
    }
}

async show({ params, response }: HttpContext) {
    try {
        const permiso = await Permisos.findOrFail(params.id)
        return response.ok(permiso)
    } catch (error) {
        return response.internalServerError({ message: 'Error fetching permission', error })
    }
}


async getPermisosByModulo({ request, response }: HttpContext) {
        try {
        const {nombreModulo, idUsuario} = request.only(['nombreModulo','idUsuario'])
        console.log({nombreModulo, idUsuario})
        const permiso = await Permisos.query().whereHas('modulo', (query) => {
            query.where('Nombre', nombreModulo)
        })
        .andWhere('IdUsuario', idUsuario).first()
        return response.ok(permiso)
    } catch (error) {
        console.log(error)
        return response.internalServerError({ message: 'Error fetching permission', error })
    }
}


}