import type { HttpContext } from '@adonisjs/core/http'
import Empresa from '#models/empresa'

export default class EmpresasController {

    //    async index({ response }: HttpContext) {
    //     try {
    //         const registros = await Empresa.all()
    //         return response.ok(registros)
    //     } catch (error) {
    //         return response.internalServerError({ message: 'Error fetching factories', error })
    //     }
    // }

    async index({ response }: HttpContext) {
        try {
            const registros = await Empresa.all();
            // Convertir cada registro a un objeto plano y aplicar el mapeo
            const transformedRegistros = registros.map(empresa => this.mapKeys(empresa.toJSON()));
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
            Id: data.id,
            Cedula: data.cedula, // Mapea a la forma original
            Empresa: data.empresa,
            NombreComercial: data.nombreComercial,
            Telefono01: data.telefono01,
            Telefono02: data.telefono02,
            Fax01: data.fax01,
            Fax02: data.fax02,
            Direccion: data.direccion,
            Frase: data.frase,
            Email: data.email,
            Web: data.web,
            Facebook: data.facebook,
            Info: data.info,
            FEL: data.fel,
            FELCliente: data.felCliente,
            FELUsuario: data.felUsuario,
            FELPassword: data.felPassword,
            EstablecimientoFEL: data.establecimientoFel,
            ServidorFEL: data.servidorFel,
            RegimenFEL: data.regimenFel,
            FELPasswordNIT: data.felPasswordNit,
            RegimenISR: data.regimenIsr,
            AgenteRetenedor: data.agenteRetenedor,


        };
    }

    async store({ request, response }: HttpContext) {
        const data = request.only(['Cedula', 'Empresa', 'NombreComercial', 'Telefono01', 'Telefono02', 'Fax01', 'Fax02', 'Direccion', 'Frase', 'Logo', 'Email', 'Web', 'Facebook', 'Info', 'FEL',
            'FELCliente', 'FELUsuario', 'FELPassword', 'EstablecimientoFEl', 'ServidorFEL', 'RegimenFEL', 'FELPasswordNIT', 'RegimenISR', 'AgenteRetenedor', 'Imagen'])
        try {
            const empresa = await Empresa.create(data)
            return response.created(empresa)
        } catch (error) {
            return response.internalServerError({ message: 'Error creating factory', error })
        }
    }

    async show({ response }: HttpContext) {
        try {
            const empresa = await Empresa.find(1);
            if (!empresa) {
                return response.notFound({ message: 'Empresa not found' })
            }
            const transformedRegistros = this.mapKeys(empresa.toJSON());
            return response.ok(transformedRegistros)
        } catch (error) {
            return response.internalServerError({ message: 'Error fetching factory', error })
        }
    }


    async getImage({ params, response }: HttpContext) {
        try {
            const empresa = await Empresa.find(params.id)
    
            if (!empresa) {
                return response.notFound({ message: 'Empresa not found' })
            }
    
            if (!empresa.Logo) {
                return response.notFound({ message: 'Imagen not found' })
            }
    
            // Aquí asumes que tienes un campo adicional para el tipo de contenido
            const contentType = this.getContentType(empresa.Logo)
    
            response.header('Content-Type', contentType)
            return response.send(empresa.Logo)
    
        } catch (error) {
            console.log(error)
            return response.internalServerError({ message: 'Error fetching image', error })
        }
    }
    
    // Método para determinar el tipo de contenido
    private getContentType(imageBuffer: Buffer): string {
        // Dependiendo de cómo almacenes o determines el tipo de imagen, aquí puedes implementar tu lógica
        // Por simplicidad, aquí se usan tipos comunes
        const jpegSignature = Buffer.from([0xFF, 0xD8, 0xFF])
        const pngSignature = Buffer.from([0x89, 0x50, 0x4E, 0x47])
        const gifSignature = Buffer.from([0x47, 0x49, 0x46])
        
        if (imageBuffer.slice(0, 3).equals(jpegSignature)) {
            return 'image/jpeg'
        }
        if (imageBuffer.slice(0, 8).equals(pngSignature)) {
            return 'image/png'
        }
        if (imageBuffer.slice(0, 3).equals(gifSignature)) {
            return 'image/gif'
        }
    
        // Devuelve un tipo por defecto o un error si no se puede determinar
        return 'application/octet-stream'
    }
    

}