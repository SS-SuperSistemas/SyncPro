import env from '#start/env'
import { defineConfig } from '@adonisjs/lucid'

const dbConfig = defineConfig({
  connection: 'mssql',
  connections: {
    mssql: {
      client: 'mssql',
      connection: {
        server: env.get('DB_HOST'),
        port: env.get('DB_PORT'),
        user: env.get('DB_USER'),
        password: env.get('DB_PASSWORD'),
        database: env.get('DB_DATABASE'),
        options: {
          encrypt: false, // Si el servidor SQL requiere conexión encriptada
          enableArithAbort: true,
          trustServerCertificate: true, // Opción recomendada para SQL Server
        },
      },
      migrations: {
        naturalSort: true,
        paths: ['database/migrations'],
      },
    },
  },
})

export default dbConfig
