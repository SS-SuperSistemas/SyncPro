import type { HttpContext } from '@adonisjs/core/http'
import env from '#start/env'
import * as soap from 'soap'
import * as xml2js from 'xml2js'

export default class FelsController {
  private wsdlUrlConsultaNIT: string | undefined = env.get('wsdlUrlConsultaNIT')
  private wsdUrlFactura: string | undefined = env.get('wsdUrlFactura')
  private wsdUrlAnulacion: string | undefined = env.get('wsdUrlAnulacion')
  private cliente: string | undefined = env.get('CLIENTE_FEL')
  private usuario: string | undefined = env.get('USUARIO_FEL')
  private clave: string | undefined = env.get('CLAVE_FEL')
  private numEstablecimiento: string | undefined = env.get('ESTABLECIMIENTO_FEL') 


  async consultarNIT({ params, response }: HttpContext) {
    const receptorId = params.nit

    try {
      const soapClient = await soap.createClientAsync(this.wsdlUrlConsultaNIT!)

      const args = {
        Cliente: this.cliente,
        Usuario: this.usuario,
        Clave: this.clave,
        Receptorid: receptorId,
      }

      const resultado: any = await new Promise((resolve, reject) => {
        soapClient.ReceptorInfo.ReceptorInfoSoapPort.Execute(args, (err: any, result: any) => {
          if (err) {
            reject(err)
          } else {
            resolve(result)
          }
        })
      })

      // Extraer la cadena XML contenida en el resultado
      const xml = resultado?.Informacion

      if (!xml) {
        return response.status(500).json({
          success: false,
          message: 'No se recibió información válida desde el servicio SOAP',
        })
      }

      // Usar xml2js para convertir el XML a JSON
      const parser = new xml2js.Parser()
      const parsedResult = await parser.parseStringPromise(xml)

      // Extraer los campos NIT, NOMBRE y DIRECCION
      const receptorInfo = parsedResult?.RECEPTOR
      if (!receptorInfo) {
        const errores = parsedResult?.Errores
        const error = errores?.Error?.[0]
        return response.status(200).json({
          success: false,
          error: error['_'],
          codigoError: error['$']['Codigo'],
        })
      }
      const nit = receptorInfo?.NIT?.[0] || ''
      const nombre = receptorInfo?.NOMBRE?.[0] || ''
      const direccion = receptorInfo?.DIRECCION?.[0] || ' '

      // Retornar la respuesta con los datos extraídos
      return response.status(200).json({
        success: true,
        data: {
          nit,
          nombre,
          direccion,
        },
      })
    } catch (error) {
      return response.status(500).json({
        success: false,
        message: 'Error al consumir el servicio SOAP',
        error: error.message,
      })
    }
  }
  
}