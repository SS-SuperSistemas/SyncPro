import { HttpContext } from '@adonisjs/core/http'
import ArticuloSerie from '#models/articulo_serie'

export default class ArticuloSeriesController {

    async index({ response }: HttpContext) {
        try {
            const articulos = await ArticuloSerie.all()
            return response.ok(articulos)
        } catch (error) {
            console.log(error)
            return response.internalServerError({ message: 'Error fetching articles', error })
        }
    }

    async store({ request, response }: HttpContext) {
        const data = request.only(['Serie', 'CodArticulo', 'Activa'])
        try {
            const articulo = await ArticuloSerie.create(data)
            return response.created(articulo)
        } catch (error) {
            console.log(error)
        }
    }

    async show({ params, response }: HttpContext) {
        try {
            const articulo = await ArticuloSerie.findOrFail(params.id)
            return response.ok(articulo)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching article', error })
        }
    }

    async updateActiva({ params }: HttpContext) {
        const articulo = await ArticuloSerie.findOrFail(params.id)
        articulo.Activa = false
        return await articulo.save()
    }
}

