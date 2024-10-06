import type { HttpContext } from '@adonisjs/core/http'
import Cliente from '#models/cliente'

export default class ClientesController {

    // async index({ response }: HttpContext) {
    //     try {
    //         const registros = await Cliente.all()
    //         return response.ok(registros)
    //     } catch (error) {
    //         return response.internalServerError({ message: 'Error fetching clients', error })
    //     }
    // }

    // Mostrar clientes
    async index({ response }: HttpContext) {
        try {
            const registros = await Cliente.all();
            // Convertir cada registro a un objeto plano y aplicar el mapeo
            const transformedRegistros = registros.map(cliente => this.mapKeys(cliente.toJSON()));
            return response.ok(transformedRegistros);
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching orders', error });
        }
    }
    /**
     * Mapea las claves del objeto a los nombres originales de la base de datos.
     */
    private mapKeys(data: Record<string, any>): Record<string, any> {
        return {
            CodCliente: data.codCliente,
            Cedula: data.cedula, // Mapea a la forma original
            Nombre: data.nombre,
            Observaciones: data.observaciones,
            Telefono1: data.telefono1,
            Telefono2: data.telefono2,
            Celular: data.celular,
            Email: data.email,
            Direccion: data.direccion,
            Credito: data.credito,
            LimiteCredito: data.limiteCredito,
            PlazoCredito: data.plazoCredito,
            TipoPrecio: data.tipoPrecio,
            Restriccion: data.restriccion,
            CodMoneda: data.codMoneda,
            Moroso: data.moroso,
            InHabilitado: data.inHabilitado,
            FechaIngreso: data.fechaIngreso,
            FechaNacimiento: data.fechaNacimiento,
            IdLocalidad: data.idLocalidad,
            IdAgente: data.idAgente,
            PermiteDescuento: data.permiteDescuento,
            Descuento: data.descuento,
            MaxDescuento: data.maxDescuento,
            Exonerar: data.exonerar,
            Codigo: data.codigo,
            Contacto: data.contacto,
            TelContacto: data.telContacto,
            DPI: data.dpi,
            Categoria: data.categoria,

        };
    }

    // Crear cliente
    async store({ request, response }: HttpContext) {
        const data = request.only(['CodCliente', 'Cedula', 'Nombre', 'Observaciones', 'Telefono1', 'Telefono2', 'Celular', 'Email', 'Direccion', 'Credito', 'LimiteCredito', 'PlazoCredito', 'TipoPrecio', 'Restriccion', 'CodMoneda',
            'Moroso', 'InHabilitado', 'FechaIngreso', 'FechaNacimiento', 'IdLocalidad', 'IdAgente', 'PermiteDescuento', 'Descuento', 'MaxDescuento', 'Exonerar', 'Codigo', 'Contacto', 'TelContacto', 'DPI', 'Categoria'])
        try {
            const cliente = await Cliente.create(data)
            return response.created(cliente)
        } catch (error) {
            return response.internalServerError({ message: 'Error creating client', error })
        }
    }

    // Mostrar cliente por id
    async show({ params, response }: HttpContext) {
        try {
            const cliente = await Cliente.findOrFail(params.id)
            const transformedRegistros = this.mapKeys(cliente.toJSON());
            return response.ok(transformedRegistros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching client', error })
        }
    }

    // Actualizar cliente a inhabilitado
    async updateInhabilitado({ params, response }: HttpContext) {
        const cliente = await Cliente.findOrFail(params.id)
        cliente.InHabilitado = true
        await cliente.save()
        return response.ok(cliente)
    }

    // Mostrar clientes por idAgente
    async clientesPorVendedor({ params, response }: HttpContext) {
        try {
            const { idAgente } = params;

            // Filtrar clientes por el idAgente (Id del Vendedor)
            const clientes = await Cliente.query().where('IdAgente', idAgente);

            // Transformar y devolver los clientes
            const transformedClientes = clientes.map(cliente => this.mapKeys(cliente.toJSON()));
            return response.ok(transformedClientes);
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching clients for the agent', error });
        }
    }

    // Mostrar clientes por idLocalidad
    async clientesPorLocalidad({ params, response }: HttpContext) {
        try {
            const { idLocalidad } = params;

            // Filtrar clientes por el idLocalidad
            const clientes = await Cliente.query().where('IdLocalidad', idLocalidad);

            // Transformar y devolver los clientes
            const transformedClientes = clientes.map(cliente => this.mapKeys(cliente.toJSON()));
            return response.ok(transformedClientes);
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching clients for the location', error });
        }
    }



}