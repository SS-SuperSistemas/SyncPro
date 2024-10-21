import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
import PDFDocument from 'pdfkit'
export default class TicketVentasController {
    async generarTicket({ request, response }: HttpContext) {
        // Obtener el parámetro `idVenta` de la URL (query param)
        const idVenta = request.input('idVenta')

        // Consulta raw al procedimiento almacenado
        const result = await db.rawQuery('EXEC dbo.ticket_venta @Idventa = ?', [idVenta])

        // Crear un nuevo documento PDF
        const pdfDoc = new PDFDocument()

        // Configurar los encabezados para el archivo PDF
        response.header('Content-Type', 'application/pdf')
        response.header('Content-Disposition', `attachment; filename="ticket_${idVenta}.pdf"`)

        // Conectar el stream del PDF directamente a la respuesta HTTP
        pdfDoc.pipe(response.response)

        // Añadir contenido al PDF (en este caso, el resultado de la consulta)
        pdfDoc.fontSize(25).text('Ticket de Venta', { align: 'center' })
        pdfDoc.moveDown() // Mueve hacia abajo para un nuevo párrafo

        // Asumimos que el resultado del procedimiento contiene detalles de la venta
        pdfDoc.text(`ID de la Venta: ${idVenta}`, { align: 'left' })
        pdfDoc.text(`Detalles: ${JSON.stringify(result)}`, { align: 'left' })

        // Finalizar el documento
        pdfDoc.end()
    }
}