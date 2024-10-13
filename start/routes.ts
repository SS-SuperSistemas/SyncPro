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
import AuthController from '#controllers/auth_controller'
import OpcionesDePagosController from '#controllers/opciones_de_pagos_controller'
import DetallePagosController from '#controllers/detalle_pagos_controller'
import BancosController from '#controllers/bancos_controller'
import AjusteCobrarsController from '#controllers/ajuste_cobrars_controller'
import AjusteInventariosController from '#controllers/ajuste_inventarios_controller'
import AjustesPagarsController from '#controllers/ajustes_pagars_controller'
import ApartadosController from '#controllers/apartados_controller'
import AperturaEfectivosController from '#controllers/apertura_efectivos_controller'
import ArticuloBodegasController from '#controllers/articulo_bodegas_controller'
import FelsController from '#controllers/fels_controller'
import { middleware } from './kernel.js'
import ArticuloCompuestosController from '#controllers/articulo_compuestos_controller'
import ArticuloSeriesController from '#controllers/articulo_series_controller'
import ArticulosOrdensController from '#controllers/articulos_ordens_controller'
import VentasCreditosController from '#controllers/ventas_creditos_controller'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router
  .group(() => {
    router.get('/', [MobiliariosController, 'index'])
  })
  .use(middleware.auth())
  .prefix('mobiliario')

router
  .group(() => {
    router.get('/', [AperturaCajasController, 'index'])
    router.get('/activa/:IdUsuario', [AperturaCajasController, 'getAperturaActiva'])
    router.post('/', [AperturaCajasController, 'store'])
    router.get('/:id', [AperturaCajasController, 'show'])
    router.put('/:id', [AperturaCajasController, 'updateAnulado'])
  })
  .use(middleware.auth())
  .prefix('apertura')

router
  .group(() => {
    router.get('/', [UserController, 'index'])
    router.post('/', [UserController, 'store'])
    router.get('/:id', [UserController, 'show'])
    router.put('/:id', [UserController, 'updateAnulado'])
  })
  .use(middleware.auth())
  .prefix('user')

router
  .group(() => {
    router.get('/', [ClientesController, 'index'])
    router.get('/:id', [ClientesController, 'show'])
    router.post('/cedula', [ClientesController, 'clientesPorCedula'])
    router.post('/save', [ClientesController, 'storev2'])
    router.post('/', [ClientesController, 'store'])
    router.put('/:id', [ClientesController, 'updateInhabilitado'])
    router.get('/vendedor/:idAgente', [ClientesController, 'clientesPorVendedor'])
    router.get('/localidad/:idLocalidad', [ClientesController, 'clientesPorLocalidad'])
  })
  // .use(middleware.auth())
  .prefix('cliente')

router
  .group(() => {
    router.get('/', [VendedoresController, 'index'])
    router.post('/', [VendedoresController, 'store'])
    router.get('/:id', [VendedoresController, 'show'])
    router.put('/:id', [VendedoresController, 'updateInhabilitado'])
  })
  .use(middleware.auth())
  .prefix('vendedor')

router
  .group(() => {
    router.get('/', [InventarioController, 'index'])
    router.get('/personalizado', [InventarioController, 'obtenerInventario'])
    router.post('/', [InventarioController, 'store'])
    router.post('/checkStock', [InventarioController, 'checkStock'])
    router.get('/:id', [InventarioController, 'show'])
    router.put('/:id', [InventarioController, 'updateInhabilitado'])
  })
  .use(middleware.auth())
  .prefix('inventario')

router
  .group(() => {
    router.get('/', [PedidosController, 'index'])
    router.get('/:id', [PedidosController, 'show'])
    router.get('/vendedor/:idVendedor', [PedidosController, 'pedidosPorVendedor'])
    router.post('/', [PedidosController, 'store'])
    // router.post('/save', [PedidosController, 'storev2'])
    router.put('/:id', [PedidosController, 'updateAnulado'])
  })
  .use(middleware.auth())
  .prefix('pedidos')

router
  .group(() => {
    router.get('/', [DetallePedidoController, 'index'])
    router.post('/', [DetallePedidoController, 'store'])
    router.get('/:id', [DetallePedidoController, 'show'])
    router.get('/pedidos/:idPedido', [DetallePedidoController, 'detallePedidosPorPedidos'])
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
    router.get('/1', [EmpresasController, 'show'])
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

router
  .group(() => {
    router.post('/login', [AuthController, 'login'])
    router.post('/logout', [AuthController, 'logout'])
  })
  .prefix('auth')

router
  .group(() => {
    router.get('/', [OpcionesDePagosController, 'index'])
    router.post('/', [OpcionesDePagosController, 'store'])
    router.get('/:id', [OpcionesDePagosController, 'show'])
    router.put('/:id', [OpcionesDePagosController, 'updateAnulado'])
  })
  .prefix('opciones_pago')

router
  .group(() => {
    router.get('/', [DetallePagosController, 'index'])
    router.post('/', [DetallePagosController, 'store'])
    router.get('/:id', [DetallePagosController, 'show'])
  })
  .prefix('detalle_pago')

router
  .group(() => {
    router.get('/', [BancosController, 'index'])
    router.post('/', [BancosController, 'store'])
    router.get('/:id', [BancosController, 'show'])
    router.put('/:id', [BancosController, 'updateInhabilitado'])
  })
  .prefix('bancos')

router
  .group(() => {
    router.get('/', [AjusteCobrarsController, 'index'])
    router.post('/', [AjusteCobrarsController, 'store'])
    router.get('/:id', [AjusteCobrarsController, 'show'])
    router.put('/:id', [AjusteCobrarsController, 'updateAnulado'])
  })
  .prefix('ajuste_cobrar')

router
  .group(() => {
    router.get('/', [AjusteInventariosController, 'index'])
    router.post('/', [AjusteInventariosController, 'store'])
    router.get('/:id', [AjusteInventariosController, 'show'])
    router.put('/:id', [AjusteInventariosController, 'updateAnulado'])
  })
  .use(middleware.auth())
  .prefix('ajuste_inventario')

router
  .group(() => {
    router.get('/', [AjustesPagarsController, 'index'])
    router.post('/', [AjustesPagarsController, 'store'])
    router.get('/:id', [AjustesPagarsController, 'show'])
    router.put('/:id', [AjustesPagarsController, 'updateAnulado'])
  })
  .prefix('ajustes_pagar')

router
  .group(() => {
    router.get('/', [ApartadosController, 'index'])
    router.post('/', [ApartadosController, 'store'])
    router.get('/:id', [ApartadosController, 'show'])
    router.put('/:id', [ApartadosController, 'updateAnulado'])
    router.put('/cancelado/:id', [ApartadosController, 'updateCancelado'])
  })
  .prefix('apartados')

router
  .group(() => {
    router.get('/', [AperturaEfectivosController, 'index'])
    router.post('/', [AperturaEfectivosController, 'store'])
    router.get('/:id', [AperturaEfectivosController, 'show'])
  })
  .prefix('apertura_efectivo')

router
  .group(() => {
    router.get('/', [ArticuloBodegasController, 'index'])
    router.post('/', [ArticuloBodegasController, 'store'])
    router.get('/:id', [ArticuloBodegasController, 'show'])
  })
  .prefix('articulo_bodega')

router
  .group(() => {
    router.get('/', [ArticuloCompuestosController, 'index'])
    router.post('/', [ArticuloCompuestosController, 'store'])
    router.get('/:id', [ArticuloCompuestosController, 'show'])
  })
  .prefix('articulo_compuesto')

router
  .group(() => {
    router.get('/', [ArticuloSeriesController, 'index'])
    router.post('/', [ArticuloSeriesController, 'store'])
    router.get('/:id', [ArticuloSeriesController, 'show'])
    router.put('/:id', [ArticuloSeriesController, 'updateActiva'])
  })
  .prefix('articulo_serie')

router
  .group(() => {
    router.get('/', [ArticulosOrdensController, 'index'])
    router.post('/', [ArticulosOrdensController, 'store'])
    router.get('/:id', [ArticulosOrdensController, 'show'])
  })
  .prefix('articulos_orden')

router
  .group(() => {
    router.get('/', [VentasCreditosController, 'index'])
    router.post('/save', [VentasCreditosController, 'storev2'])
    router.post('/', [VentasCreditosController, 'store'])
    router.get('/:id', [VentasCreditosController, 'show'])
  })
  .prefix('ventas_creditos')



router
  .group(() => {
    router.get('/consultaNit/:nit', [FelsController, 'consultarNIT'])
  })
  .prefix('fel')