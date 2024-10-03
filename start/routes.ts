/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const MobiliariosController = () => import('#controllers/mobiliarios_controller')
import AperturaCajasController from '#controllers/apertura_cajas_controller'
import UserController from '#controllers/user_controller'
import ClientesController from '#controllers/clientes_controller'
import VendedoresController from '#controllers/vendedores_controller'
import InventarioController from '#controllers/inventarios_controller'
import PedidosController from '#controllers/pedidos_controller'
import DetallePedidoController from '#controllers/detalle_pedidos_controller'
import RutasController from '#controllers/rutas_controller'
import DetalleRutaController from '#controllers/detalle_rutas_controller'
import EmpresasController from '#controllers/empresas_controller'
import VentasController from '#controllers/ventas_controller'
import RangoPrecioController from '#controllers/rango_precio_productos_controller'
import DetalleVentasController from '#controllers/detalle_ventas_controller'
import PermisosController from '#controllers/permisos_controller'
import ModulosController from '#controllers/modulos_controller'
import router from '@adonisjs/core/services/router'
import MovCajasController from '#controllers/movcajas_controller'
import ConfigsController from '#controllers/configs_controller'
import ArqueoCajasController from '#controllers/arqueo_cajas_controller'
import ArqueoChequesController from '#controllers/arqueo_cheques_controller'
import ArqueoEfectivosController from '#controllers/arqueo_efectivos_controller'
import ArqueoTarjetasController from '#controllers/arqueo_tarjetas_controller'
import CierreCajasController from '#controllers/cierre_cajas_controller'
import AbonoApartadosController from '#controllers/abono_apartados_controller'
import AbonoPagarsController from '#controllers/abono_pagars_controller'
import AbonosCobrarsController from '#controllers/abonos_cobrars_controller'
import LocalidadsController from '#controllers/localidads_controller'


router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router
  .group(() => {
    router.get('/', [MobiliariosController, 'index'])
  })
  .prefix('mobiliario')

router
  .group(() => {
    router.get('/', [AperturaCajasController, 'index'])
    router.post('/', [AperturaCajasController, 'store'])
    router.get('/:id', [AperturaCajasController, 'show'])
    router.put('/:id', [AperturaCajasController, 'updateAnulado'])
  })
  .prefix('apertura')

router
  .group(() => {

    router.get('/', [UserController, 'index'])
    router.post('/', [UserController, 'store'])
    router.get('/:id', [UserController, 'show'])
    router.put('/:id', [UserController, 'updateAnulado'])
  })
  .prefix('user')

router
  .group(() => {
    router.get('/', [ClientesController, 'index'])
    router.post('/', [ClientesController, 'store'])
    router.get('/:id', [ClientesController, 'show'])
    router.put('/:id', [ClientesController, 'updateInhabilitado'])
  })
  .prefix('cliente')

router
  .group(() => {
    router.get('/', [VendedoresController, 'index'])
    router.post('/', [VendedoresController, 'store'])
    router.get('/:id', [VendedoresController, 'show'])
    router.put('/:id', [VendedoresController, 'updateInhabilitado'])
  })
  .prefix('vendedor')

router
  .group(() => {

    router.get('/', [InventarioController, 'index'])
    router.post('/', [InventarioController, 'store'])
    router.get('/:id', [InventarioController, 'show'])
    router.put('/:id', [InventarioController, 'updateInhabilitado'])

  })
  .prefix('inventario')

router
  .group(() => {
    router.get('/', [PedidosController, 'index'])
    router.post('/', [PedidosController, 'store'])
    router.get('/:id', [PedidosController, 'show'])
    router.put('/:id', [PedidosController, 'updateAnulado'])
  })
  .prefix('pedidos')

router
  .group(() => {
    router.get('/', [DetallePedidoController, 'index'])
    router.post('/', [DetallePedidoController, 'store'])
    router.get('/:id', [DetallePedidoController, 'show'])
  })
  .prefix('detalle_pedidos')

  router
  .group(() => {
    router.get('/', [RutasController, 'index'])
    router.post('/', [RutasController, 'store'])
    router.get('/:id', [RutasController, 'show'])
    router.put('/:id', [RutasController, 'updateAnulado'])
  })
  .prefix('ruta')

  router
  .group(() => {
    router.get('/', [DetalleRutaController, 'index'])
    router.post('/', [DetalleRutaController, 'store'])
    router.get('/:id', [DetalleRutaController, 'show'])
  })
  .prefix('detalle_ruta')

router 
  .group(() => {
    router.get('/', [EmpresasController, 'index'])
    router.post('/', [EmpresasController, 'store'])
    router.get('/:id', [EmpresasController, 'show'])
  })
  .prefix('empresa')
  
router
  .group(() => {
    router.get('/', [VentasController, 'index'])
    router.post('/', [VentasController, 'store'])
    router.get('/:id', [VentasController, 'show'])
  })
  .prefix('venta')

router
  .group(() => {
    router.get('/', [RangoPrecioController, 'index'])
    router.post('/', [RangoPrecioController, 'store'])
    router.get('/:id', [RangoPrecioController, 'show'])
  })
  .prefix('rango_precio_producto')

router
  .group(() => {
    router.get('/', [DetalleVentasController, 'index'])
    router.post('/', [DetalleVentasController, 'store'])
    router.get('/:id', [DetalleVentasController, 'show'])
  })
  .prefix('detalle_venta')

  router
  .group(() => {
    router.get('/', [PermisosController, 'index'])
    router.post('/', [PermisosController, 'store'])
    router.get('/:id', [PermisosController, 'show'])
    router.post('/permisosModulo', [PermisosController, 'getPermisosByModulo'])

  })
  .prefix('permisos')
  
  router
  .group(() => {
    router.get('/', [ModulosController, 'index'])
    router.post('/', [ModulosController, 'store'])
    router.get('/:id', [ModulosController, 'show'])
  })
  .prefix('modulo')

  router
  .group(() => {
    router.get('/', [MovCajasController, 'index'])
    router.post('/', [MovCajasController, 'store'])
    router.get('/:id', [MovCajasController, 'show'])
    router.put('/:id', [MovCajasController, 'updateAnulado'])
  })
  .prefix('movcajas')

  router
  .group(() => {
    router.get('/', [ConfigsController, 'index'])
    router.get('/:id', [ConfigsController, 'show'])
    router.put('/:id', [ConfigsController, 'update'])
  })
  .prefix('config')
  
  router
  .group(() => {
    router.get('/', [ArqueoCajasController, 'index'])
    router.post('/', [ArqueoCajasController, 'store'])
    router.get('/:id', [ArqueoCajasController, 'show'])
    router.put('/:id', [ArqueoCajasController, 'updateAnulado'])
  })
  .prefix('arqueo_caja')  

  router
  .group(() => {
    router.get('/', [ArqueoChequesController, 'index'])
    router.post('/', [ArqueoChequesController, 'store'])
    router.get('/:id', [ArqueoChequesController, 'show'])
    })
  .prefix('arqueo_cheque')

  router
  .group(() => {
    router.get('/', [ArqueoEfectivosController, 'index'])
    router.post('/', [ArqueoEfectivosController, 'store'])
    router.get('/:id', [ArqueoEfectivosController, 'show'])
  })
  .prefix('arqueo_efectivo')

  router
  .group(() => {
    router.get('/', [ArqueoTarjetasController, 'index'])
    router.post('/', [ArqueoTarjetasController, 'store'])
    router.get('/:id', [ArqueoTarjetasController, 'show'])
  })
  .prefix('arqueo_tarjeta')

  router
  .group(() => {
    router.get('/', [CierreCajasController, 'index'])
    router.post('/', [CierreCajasController, 'store'])
    router.get('/:id', [CierreCajasController, 'show'])
    router.put('/:id', [CierreCajasController, 'updateAnulado'])
  })
  .prefix('cierre_caja')

  router
  .group(() => {
    router.get('/', [AbonoApartadosController, 'index'])
    router.post('/', [AbonoApartadosController, 'store'])
    router.get('/:id', [AbonoApartadosController, 'show'])
    router.put('/:id', [AbonoApartadosController, 'updateAnulado'])
  })
  .prefix('abono_apartado')

  router
  .group(() => {
    router.get('/', [AbonoPagarsController, 'index'])
    router.post('/', [AbonoPagarsController, 'store'])
    router.get('/:id', [AbonoPagarsController, 'show'])
    router.put('/:id', [AbonoPagarsController, 'updateAnulado'])
  })
  .prefix('abono_pagar')

  router
  .group(() => {
    router.get('/', [AbonosCobrarsController, 'index'])
    router.post('/', [AbonosCobrarsController, 'store'])
    router.get('/:id', [AbonosCobrarsController, 'show'])
    router.put('/:id', [AbonosCobrarsController, 'updateAnulado'])
  })
  .prefix('abono_cobrar')

  router
  .group(() => {
    router.get('/', [LocalidadsController, 'index'])
    router.post('/', [LocalidadsController, 'store'])
    router.get('/:id', [LocalidadsController, 'show'])
  })
  .prefix('localidad')

  










  

